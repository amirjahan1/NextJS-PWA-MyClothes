import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class Fade extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        return (
            <div>
                <h2>Fade</h2>
                <Slider {...settings}>
                    <div>
  <Image alt="my clothes pwa build with Amir Jahan" src={baseUrl + "/abstract01.jpg"}/>
                    </div>
                    <div>
                        <Image alt="my clothes pwa build with Amir Jahan" src={baseUrl + "/abstract02.jpg"}/>
                    </div>
                    <div>
                        <Image alt="my clothes pwa build with Amir Jahan" src={baseUrl + "/abstract03.jpg"}/>
                    </div>
                    <div>
                        <Image alt="my clothes pwa build with Amir Jahan" src={baseUrl + "/abstract04.jpg"}/>
                    </div>
                </Slider>
            </div>
        );
    }
}