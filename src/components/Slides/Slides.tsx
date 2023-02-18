import {Carousel} from '@trendyol-js/react-carousel'
export const Highlight = ({children, color}: {children: any; color: any}) => (
    <span
        style={{
            backgroundColor: color,
            borderRadius: '0px',
            color: '#222120',
            padding: '0px',
            display: 'block',
            height: '450px',
            margin: '16px 16px 16px 0'
        }}
    >
        {children}
    </span>
)

const Slides = () => {
    return (
        <Carousel show={2.5} slide={1} transition={0.5}>
            <Highlight color="##D2DCCE">
                <div className="rmbox">
                    <h2>10%</h2>
                    <div className="rmboximg">
                        <img alt="PepePunkS" src="r1.png" /> <span>PP FUND</span>
                    </div>
                    <p>PP fund initiated. PP Hall created for community governance.</p>
                </div>
            </Highlight>
            <Highlight color="#D2DCCE">
                <div className="rmbox">
                    <h2>25%</h2>
                    <div className="rmboximg">
                        <img alt="PepePunkS" src="r2.png" /> <span>mepms</span>
                    </div>
                    <p>
                        Member Exclusive PepePunk Merch Store gets unlocked, featuring limited
                        Edition tees, hoodies, and other goodies.
                    </p>
                </div>
            </Highlight>
            <Highlight color="#D2DCCE">
                <div className="rmbox">
                    <h2>50%</h2>
                    <div className="rmboximg">
                        <img alt="PepePunkS" src="r3.png" /> <span>DONATIONS</span>
                    </div>
                    <p>
                        Airdrop a collectible to the first 1,000 minters and prepare our 100 SOL
                        charitable donation.
                    </p>
                </div>
            </Highlight>
            <Highlight color="#D2DCCE">
                <div className="rmbox">
                    <h2>100%</h2>
                    <div className="rmboximg">
                        <img alt="PepePunkS" src="r4.png" /> <span>PP FUND</span>
                    </div>
                    <p>PP fund initiated. PP Hall created for community governance.</p>
                </div>
            </Highlight>
        </Carousel>
    )
}

export default Slides
