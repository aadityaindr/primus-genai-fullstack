import { TypeAnimation } from 'react-type-animation'
import './homepage.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Homepage = () => {

    const [typingStatus, setTypingStatus] = useState('human1')

    useEffect(() => {
        alert('Please operate on desktop, as the website is not configured for mobile.');
    }, []);
    
    

    return (
        <div className='homepage'>
            <img src='/orbital.png' alt="" className='orbital' />

            <div className="left">
                <h1>PRIMUS AI</h1>
                <h2>Empowering Ideas, Instantly </h2>
                <h3>
                    एक नई पीढ़ी की ताकत, जो नवीनता और समाधान प्रदान कर, आपके लक्ष्यों को वास्तविकता में बदलने में मदद करती है..
                </h3>
                <Link to='/dashboard'>Get Started</Link>
            </div>
            <div className="right">
                <div className='imgContainer'>
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot.png" alt="" className='bot' />
                    <div className="chat">
                        <img src={
                            typingStatus === 'human1'
                                ? '/human1.jpeg'
                                : typingStatus === 'human2'
                                    ? '/human2.jpeg'
                                    : 'bot.png'
                        }
                            alt=""
                        />
                        <TypeAnimation
                            sequence={[

                                'Ron: We produce food for Chinchillas',
                                2000,
                                () => {
                                    setTypingStatus('bot');
                                },
                                'Primus: We produce food for Mice',
                                2000, () => {
                                    setTypingStatus('human2');
                                },
                                'Lia : We produce food for Hamsters',
                                2000, () => {
                                    setTypingStatus('bot');
                                },
                                'Bot: We produce food for Guinea Pigs',
                                2000, () => {
                                    setTypingStatus('human1');
                                },

                            ]}
                            wrapper="span"
                            cursor={true}
                            omitDeletionAnimation={true}
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>
            <div className="terms">
                <img src="/logo.png" alt="" />
                <div className="links">
                    <Link to='/legal'>Terms of Service</Link>
                    <span>|</span>
                    <Link to='/legal'>Privacy Policy</Link>
                    

                </div>
            </div>
        </div>
    )
}

export default Homepage
