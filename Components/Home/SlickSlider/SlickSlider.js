import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image'
import Button from '@mui/material/Button';
import CountdownTimer from '@sakit-sa/countdown-timer';

class SlickSlider extends Component {


    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: true,
                        infinite: false,
                        speed: 500,
                        initialSlide: 0,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <React.Fragment>
                <div className="mt-10">
                    <div className="flex w-full justify-between bg-gray-200 items-center h-14 px-14">
                        <h3 className=" text-blueGray-700 lg:text-2xl sm:text-1xl ">جشنواره تخفیف شگفت انگیز</h3>
                        <div className=" lg:text-2xl sm:text-1xl text-blueGray-700 ml-5">
                            <CountdownTimer
                                time={1356}
                                format="hh:mm:ss"
                                onComplete={() => console.log("The timer completed")}
                            />
                        </div>
                    </div>
            <div  className="w-12/12 px-14 relative bg-gray-200 mx-auto">


                <Slider {...settings}>

                    <div className="bg-gray-200 p-4 m-2" >
                        <Image alt="my clothes pwa build with Amir Jahan" src="/Images/SlickSlider/shoes3.jpg"  layout="responsive" width="350px" height="350px"/>

                        <div className="relative flex justify-center mt-2 items-center h-12">


                            <Button className="mt-5 btn btn-block w-full" variant="contained">50% تخفیف شگفت انگیز</Button>


                        </div>
                    </div>


                    <div className="bg-gray-200 p-4 m-2" >
                        <Image alt="my clothes pwa build with Amir Jahan" src="/Images/SlickSlider/shirt1.jpg" className="bg-white"  layout="responsive" width="350px" height="350px"/>

                        <div className="relative flex justify-center mt-2 items-center h-12">


                            <Button className="mt-5 btn btn-block w-full" variant="contained">50% تخفیف شگفت انگیز</Button>

                        </div>
                    </div>

                    <div className="bg-gray-200 p-4 m-2" >
                        <Image alt="my clothes pwa build with Amir Jahan" src="/Images/SlickSlider/shirt2.jpg" className="bg-white"  layout="responsive" width="350px" height="350px"/>

                        <div className="relative flex justify-center mt-2 items-center h-12">


                            <Button className="mt-5 btn btn-block w-full" variant="contained">50% تخفیف شگفت انگیز</Button>

                        </div>
                    </div>

                    <div className="bg-gray-200 p-4 m-2" >
                        <Image alt="my clothes pwa build with Amir Jahan" src="/Images/SlickSlider/shirt3.jpg" className="bg-white"  layout="responsive" width="350px" height="350px"/>

                        <div className="relative flex justify-center mt-2 items-center h-12">



                            <Button className="mt-5 btn btn-block w-full" variant="contained">50% تخفیف شگفت انگیز</Button>

                        </div>
                    </div>

                    <div className="bg-gray-200 p-4 m-2" >
                        <Image alt="my clothes pwa build with Amir Jahan" src="/Images/SlickSlider/shoes1.jpg" className="bg-white"  layout="responsive" width="350px" height="350px"/>

                        <div className="relative flex justify-center mt-2 items-center h-12">


                            <Button className="mt-5 btn btn-block w-full" variant="contained">50% تخفیف شگفت انگیز</Button>

                        </div>
                    </div>

                    <div className="bg-gray-200 p-4 m-2" >
                        <Image alt="my clothes pwa build with Amir Jahan" src="/Images/SlickSlider/shoes3.jpg" className="bg-white"  layout="responsive" width="350px" height="350px"/>

                        <div className="relative flex justify-center mt-2 items-center h-12">


                            <Button className="mt-5 btn btn-block w-full" variant="contained">50% تخفیف شگفت انگیز</Button>

                        </div>
                    </div>

                    <div className="bg-gray-200 p-4 m-2" >
                        <Image alt="my clothes pwa build with Amir Jahan" src="/Images/SlickSlider/Jean1.jpg" className="bg-white"  layout="responsive" width="350px" height="350px"/>

                        <div className="relative flex justify-center mt-2 items-center h-12">


                            <Button className="mt-5 btn btn-block w-full" variant="contained">50% تخفیف شگفت انگیز</Button>

                        </div>
                    </div>

                    <div className="bg-gray-200 p-4 m-2" >
                        <Image alt="my clothes pwa build with Amir Jahan" src="/Images/SlickSlider/Jean2.jpg" className="bg-white" layout="responsive" width="350px" height="350px"/>

                        <div className="relative flex justify-center mt-2 items-center h-12">


                            <Button className="mt-5 btn btn-block w-full" variant="contained">50% تخفیف شگفت انگیز</Button>

                        </div>
                    </div>
                </Slider>

            </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SlickSlider