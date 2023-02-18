import * as anchor from '@project-serum/anchor'

// import {LAMPORTS_PER_SOL} from '@solana/web3.js'

import {useWallet} from '@solana/wallet-adapter-react'
import {WalletDialogButton, WalletDisconnectButton} from '@solana/wallet-adapter-material-ui'

import useStyles from './Mint.styles'

import {
    CandyMachine,
    awaitTransactionSignatureConfirmation,
    getCandyMachineState,
    mintOneToken,
    shortenAddress
} from '../../config/candy-machine'

import {useContext, useEffect, useRef, useState} from 'react'
import {Box, Button, CircularProgress, Typography} from '@material-ui/core'
import {SnackbarContext} from 'context'
import Countdown from 'react-countdown'
import ProgressBar from 'components/ProgressBar'

// const MAX_MINTING_COUNT: number = 5

export interface MintProps {
    candyMachineId: anchor.web3.PublicKey
    config: anchor.web3.PublicKey
    connection: anchor.web3.Connection
    startDate: number
    treasury: anchor.web3.PublicKey
    txTimeout: number
}

const Mint = (props: MintProps) => {
    const classes = useStyles()
    const {showMessage} = useContext(SnackbarContext)

    // const [balance, setBalance] = useState<number>()
    const [isActive, setIsActive] = useState(false) // true when countdown completes
    const [isSoldOut, setIsSoldOut] = useState(false) // true when items remaining is zero
    const [isMinting, setIsMinting] = useState(false) // true when user got to press MINT

    const [remainingCount, setRemainingCount] = useState(0)
    // const [redeemdedCount, setRedeemedCount] = useState(0)
    const [availableCount, setAvailableCount] = useState(0)

    const wallet = useWallet()
    const [candyMachine, setCandyMachine] = useState<CandyMachine>()

    const [startDate, setStartDate] = useState(new Date(props.startDate))

    const mintOne = async () => {
        try {
            if (wallet.connected && candyMachine?.program && wallet.publicKey) {
                const mintTxId = await mintOneToken(
                    candyMachine,
                    props.config,
                    wallet.publicKey,
                    props.treasury
                )

                const status = await awaitTransactionSignatureConfirmation(
                    mintTxId,
                    props.txTimeout,
                    props.connection,
                    'singleGossip',
                    false
                )

                if (!status?.err) {
                    showMessage('Congratulations! Mint succeeded!', 'success')
                    loadCandyMachineState()
                } else {
                    showMessage('Mint failed! Please try again!', 'error')
                }
            }
        } catch (error: any) {
            // TODO: blech:
            let message = error.msg || 'Minting failed! Please try again!'
            if (!error.msg) {
                if (error.message.indexOf('0x138')) {
                } else if (error.message.indexOf('0x137')) {
                    message = `SOLD OUT!`
                } else if (error.message.indexOf('0x135')) {
                    message = `Insufficient funds to mint. Please fund your wallet.`
                }
            } else {
                if (error.code === 311) {
                    message = `SOLD OUT!`
                    setIsSoldOut(true)
                } else if (error.code === 312) {
                    message = `Minting period hasn't started yet.`
                }
            }

            showMessage(message, 'error')
        }
    }

    const handleMint = async () => {
        setIsMinting(true)

        await mintOne()

        setIsMinting(false)
    }

    const loadCandyMachineState = async () => {
        const anchorWallet = {
            publicKey: wallet.publicKey,
            signAllTransactions: wallet.signAllTransactions,
            signTransaction: wallet.signTransaction
        } as anchor.Wallet

        const {candyMachine, goLiveDate, itemsRemaining, itemsAvailable} =
            await getCandyMachineState(anchorWallet, props.candyMachineId, props.connection)

        setRemainingCount(itemsRemaining)
        setAvailableCount(itemsAvailable)

        setIsSoldOut(itemsRemaining === 0)
        setStartDate(goLiveDate)
        setCandyMachine(candyMachine)
    }

    useEffect(() => {
        ;(async () => {
            if (
                !wallet ||
                !wallet.publicKey ||
                !wallet.signAllTransactions ||
                !wallet.signTransaction
            ) {
                return
            }

            loadCandyMachineState()
        })()
    }, [wallet, props.candyMachineId, props.connection])

    return (
        <Box className="mint-wrapper">
            {remainingCount} / {availableCount}
            <Box marginTop={1}>
                <ProgressBar completed={Math.round(((availableCount - remainingCount) / availableCount) * 100)} />
            </Box>
            {wallet.connected && !isSoldOut && !isActive && (
                <Countdown
                    date={startDate}
                    onMount={({completed}) => completed && setIsActive(true)}
                    onComplete={() => setIsActive(true)}
                    renderer={renderCounter}
                />
            )}
            <Box className={classes.mintButtonWrapper}>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={true || isSoldOut || isMinting || !isActive}
                    onClick={handleMint}
                >
                    {isSoldOut ? 'SOLD OUT' : 'Mint NFT'}
                </Button>
                { isMinting && <CircularProgress size={30} className={classes.buttonProgress} />}
            </Box>
        </Box>
    )
}

const renderCounter = ({days, hours, minutes, seconds, props}: any) => {
    return (
        <p className="timep">
            {days && `${days}:`}
            {hours}:{minutes}:{seconds}
        </p>
    )
}

export default Mint
