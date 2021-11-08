import React , {Fragment} from "react";
import Image from 'next/image'
import Link from 'next/link'
import Footer from "../Components/Footer/Footer";


const About = () => {


    return(
        <Fragment>
        <div className="About overf">
            <div className="wrapper">
                <div className="img-area">
                    <div className="inner-area">
                        <Image
                            height={300}
                            width={300}
                            src="/Images/About/About.jpg"
                            alt=""/>
                    </div>
                </div>
                <div className="icon arrow">
                    <Link href="/">
                        <a>
                    <i className="fas fa-arrow-left"></i>
                    </a>
                    </Link>
                </div>
                <div className="name">Amir Jahan</div>
                <div className="about">Designer & Developer</div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/amirjahan1face/" className="fb text-xl"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/amirjahan_1" className="twitter text-xl"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/amirjahan_1/" className="insta text-xl"><i className="fab fa-instagram"></i></a>
                    <a href="mailto:amirjahan454@gmail.com" className="yt text-xl"><i className="fab fa-google"></i></a>
                </div>
                <div className="buttons">
                    <button>Message</button>
                    <button>Subscribe</button>
                </div>
                <div className="social-share">
                    <div className="row" dir="ltr">
                        <i className="far fa-heart"></i>
                        <i className="icon-2 fas fa-heart"></i>
                        <span>38.9k</span>
                    </div>
                    <div className="row" dir="ltr">
                        <i className="far fa-comment"></i>
                        <i className="icon-2 fas fa-comment"></i>
                        <span>24.3k</span>
                    </div>
                    <div className="row" dir="ltr">
                        <i className="fas fa-share"></i>
                        <span>12.8k</span>
                    </div>
                </div>
            </div>

        </div>

        </Fragment>
    )
}

export default About