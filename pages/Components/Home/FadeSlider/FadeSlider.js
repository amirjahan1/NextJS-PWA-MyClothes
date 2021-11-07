import React from 'react';
import Image from 'next/image'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const FadeSlider = (props) => {

    const fadeImages = [
        {
            url: props.url1 ,

        },
        {
            url:  props.url2,

        },
        {
            url: props.url3 ,

        },
    ];

    return (
            <div className="slide-container flex p-4">
            <Fade   className="w-11/12  rounded-2xl">
                {
                    fadeImages.map( (fadeImage,index)=>
                    <div className="each-fade" key={index}>
                    <div className="image-container">
                    <Image  className="rounded-2xl" src={fadeImage.url} layout="responsive" width="100%" height={` ${ props.row ? "48%" : "100%"}`} />
                    </div>
                    <h2>{fadeImage.caption}</h2>
                    </div>
                    )
                }
            </Fade>
            </div>

    )
}

export default FadeSlider