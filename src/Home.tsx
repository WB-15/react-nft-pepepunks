import {Button} from '@material-ui/core'
import Mint from 'components/Mint'
import Slides from 'components/Slides'

import * as anchor from '@project-serum/anchor'
import {useWallet} from '@solana/wallet-adapter-react'
import {WalletDialogButton, WalletDisconnectButton} from '@solana/wallet-adapter-material-ui'

export interface HomeProps {
    candyMachineId: anchor.web3.PublicKey
    config: anchor.web3.PublicKey
    connection: anchor.web3.Connection
    startDate: number
    treasury: anchor.web3.PublicKey
    txTimeout: number
}

const Home = (props: HomeProps) => {
    const wallet = useWallet()

    return (
        <div>
            <div className="pepetext">PEPE</div> <div className="punkstext">PUNKs</div>
            <header>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">
                                <img alt="PepePunks" src="pepepunks.svg" /> PepePunks
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <img alt="PepePunks" src="menu.png" width="48" />
                            </button>
                            <div
                                className="collapse navbar-collapse  justify-content-end"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            aria-current="page"
                                            href="#FairDistribution"
                                        >
                                            Fair Distribution
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#Roadmap">
                                            Roadmap
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#OurTeam">
                                            Our Team
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#FAQ">
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        {wallet.connected ? (
                                            <WalletDisconnectButton
                                                color="secondary"
                                                variant="contained"
                                            >
                                                Disconnect Wallet
                                            </WalletDisconnectButton>
                                        ) : (
                                            <WalletDialogButton color="primary" variant="contained">
                                                Connect Wallet
                                            </WalletDialogButton>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <section className="mintsection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>PepePunks</h1>
                            <p>
                                PepePunks are <big>10,000</big> hand drawn, randomly generated,
                                pixel pepes. Their traits are pulled from all reaches of the
                                metaverse and include surprising mashups of <big>350</big> unique
                                attributes all the way down to <big>1 of 1</big> rarities.
                            </p>
                            <Mint {...props} />
                        </div>
                        <div className="col-md-6">
                            <div className="imgcc">
                                <img alt="PepePunkS" src="single.png" className="img-fluid" />

                                <div className="img1cc">
                                    <img alt="PepePunkS" src="1cc.png" className="img-fluid" />
                                </div>

                                <div className="img2cc">
                                    <img alt="PepePunkS" src="2cc.png" className="img-fluid" />
                                </div>

                                <div className="img3cc">
                                    <img alt="PepePunkS" src="3cc.png" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fairsection" id="FairDistribution">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 text-center">
                            <h2>FAIR DISTRIBUTION</h2>
                            <p>
                                There are no bonding curves or price tiers here. Buying a PepePunk
                                costs <big>0.25 SOL</big> for everyone.
                            </p>
                            <Button variant="contained" color="primary">
                                {' '}
                                View Collection
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="theroadmap" id="Roadmap">
                <div className="container-fluid">
                    <h2 className="text-center">The Roadmap</h2>
                    <div className="row rmbox-row">
                        <div className="col-md-10">
                            <Slides />
                        </div>
                    </div>
                </div>
            </section>
            <section className="ourteam" id="OurTeam">
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>OUR TEAM</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="memeber">
                                <img alt="PepePunkS" src="member.png" />
                                <br />
                                <img alt="PepePunkS" className="mimg" src="m.png" />
                                <h4>King Harold</h4>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="memeber">
                                <img alt="PepePunkS" src="member1.png" />
                                <br />
                                <img alt="PepePunkS" className="mimg1" src="m1.png" />
                                <h4>King Toad</h4>
                                <p>Artist</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="memeber">
                                <img alt="PepePunkS" src="member2.png" />
                                <br /> <img alt="PepePunkS" className="mimg2" src="m2.png" />
                                <h4>REMAPPER</h4>
                                <p>Developer</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="memeber">
                                <img alt="PepePunkS" src="member3.png" />
                                <br />
                                <img alt="PepePunkS" className="mimg3" src="m3.png" />
                                <h4>MarksCards</h4>
                                <p>Developer</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="memeber">
                                <img alt="PepePunkS" src="member4.png" />
                                <br /> <img alt="PepePunkS" className="mimg4" src="m4.png" />
                                <h4>ALEX</h4>
                                <p>Community Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq" id="FAQ">
                <div className="container-fluid">
                    <div className="faq-layout">
                        <h2 className="text-center faq-title">ANY PEPEPUNK QUESTIONS?</h2>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseOne"
                                    >
                                        What are the benefits of owning a PepePunk?
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingOne"
                                >
                                    <div className="accordion-body">
                                        Holders are entitled to a membership that will provide them
                                        with special perks &amp; exclusive benefits such as
                                        exclusive partnership mints &amp; future collaborative
                                        incentives beyond the pepeverse.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                        Is the art randomly generated?
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingTwo"
                                >
                                    <div className="accordion-body">
                                        Yes! Each PepePunk is completely unique with over 350
                                        possible traits and millions of possible combinations.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree"
                                    >
                                        How can I mint these punks!?
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingThree"
                                >
                                    <div className="accordion-body">
                                        PepePunks can be minted on our website for the initial
                                        release. Once they sell out, you will be able to purchase
                                        them on the secondary market such as SolSea. You will also
                                        be able to participate in community contests and giveaways
                                        to have a chance of winning prized mints.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingF">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseF"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseF"
                                    >
                                        Are there collaborations planned with any other projects?
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseF"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingF"
                                >
                                    <div className="accordion-body">
                                        This project has had many very carefully thought out
                                        collaborations and marketing plans. We are already in
                                        discussions with several popular communities, companies,
                                        agencies, &amp; influencers. We are excited to release these
                                        over the period of weeks post launch.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingG">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseG"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseG"
                                    >
                                        How long after minting will my NFT be revealed?
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseG"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingG"
                                >
                                    <div className="accordion-body">
                                        Your PepePunk will be revealed instantly after minting!
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingJ">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseJ"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseJ"
                                    >
                                        How much will it cost to mint?
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseJ"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingJ"
                                >
                                    <div className="accordion-body">
                                        It will cost 0.25 SOL + gas to mint a PepePunk.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners" id="partners">
                <div className="container-fluid text-center">
                    <div className="">
                            <h2>Partners</h2>
                    </div>
                    <div className="partners-body">
                        As seen on&nbsp;
                        <img height='48' src="/nft-sol-calendar-black.png" alt="NFT SOL Calendar" />
                    </div>
                </div>
            </section>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <strong>PepePunkS</strong>
                        </div>
                        <div className="col-md-8">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Smart Contract
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://discord.gg/DqxGXBQBpz">
                                        Discord
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://magiceden.io/">
                                        Magic Eden
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://twitter.com/pepepunksnft">
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
