import {ThemeProvider} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme/index'
import Home from './Home'

import {SnackbarProvider} from 'context'
import Snackbar from 'components/shared/Snackbar'

import * as anchor from '@project-serum/anchor'
import {clusterApiUrl} from '@solana/web3.js'
import {WalletAdapterNetwork} from '@solana/wallet-adapter-base'
import {getPhantomWallet, getSolflareWallet, getSolletWallet} from '@solana/wallet-adapter-wallets'

import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react'

import {WalletDialogProvider} from '@solana/wallet-adapter-material-ui'
import { useMemo } from 'react'
import { CANDY_MACHINE_CONFIG, CANDY_MACHINE_ID, CANDY_START_DATE, SOLANA_NETWORK, SOLANA_RPC_HOST, TREASURY_ADDRESS } from 'config/constants'

const treasury = new anchor.web3.PublicKey(TREASURY_ADDRESS!)

const config = new anchor.web3.PublicKey(CANDY_MACHINE_CONFIG!)

const candyMachineId = new anchor.web3.PublicKey(CANDY_MACHINE_ID!)

const network = SOLANA_NETWORK as WalletAdapterNetwork

const rpcHost = SOLANA_RPC_HOST!
const connection = new anchor.web3.Connection(rpcHost)

const startDateSeed = parseInt(CANDY_START_DATE!, 10)

const txTimeout = 30000 // milliseconds (confirm this works for your project)

const App = () => {
    const endpoint = useMemo(() => clusterApiUrl(network), [])

    const wallets = useMemo(() => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()], [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
                <ConnectionProvider endpoint={endpoint}>
                    <WalletProvider wallets={wallets} autoConnect>
                        <WalletDialogProvider>
                            <Home
                                candyMachineId={candyMachineId}
                                config={config}
                                connection={connection}
                                startDate={startDateSeed}
                                treasury={treasury}
                                txTimeout={txTimeout}
                            />
                        </WalletDialogProvider>
                    </WalletProvider>
                </ConnectionProvider>
                <Snackbar />
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App
