import React from "react";
var classNames = require('classnames');


class Slider1 extends React.Component {
    constructor(props) {
        super(props);

        this.IMAGE_PARTS = 4;

        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;

        this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }
    componentWillUnmount() {
        if (typeof window !== "undefined") {
            window.clearTimeout(this.changeTO);
        }


    }

    componentDidMount() {
        this.runAutochangeTO();
        setTimeout(() => {
            this.setState({ activeSlide: 0, sliderReady: true });
        }, 0);

    }

    runAutochangeTO() {
        this.changeTO = setTimeout(() => {
            this.changeSlides(1);
            this.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
    }

    changeSlides(change) {
        if (typeof window !==  "undefined" ) {
            window.clearTimeout(this.changeTO);
        }



        const { length } = this.props.SliderDetail;
        const prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide, prevSlide });
    }

    render() {
        const { activeSlide, prevSlide, sliderReady } = this.state;
        return (
            <div style={{
                direction : 'ltr'
            }} className={classNames('slider', { 's--ready': sliderReady })}>
                <p className="slider__top-heading" style={{fontFamily : 'vazir' ,}}>شیک ترین کالکشن های این هفته</p>
                <div className="slider__slides">
                    {this.props.SliderDetail.map((slide, index) => (

                        <div
                            className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                            key={slide.city}
                        >
                            <div className="slider__slide-content">
                                <h3  style={{fontFamily : 'vazir' , direction : 'ltr'}} className="slider__slide-subheading">{slide.country || slide.city}</h3>
                                <h2  style={{fontFamily : 'vazir' , direction : 'ltr'}} className="slider__slide-heading">
                                     <span style={{fontFamily : 'vazir' , direction : 'ltr'}}>{slide.city}</span>
                                </h2>
                                <p className="slider__slide-readmore">اطلاعات بیشتر</p>
                            </div>
                            <div className="slider__slide-parts">
                                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                                    <div className="slider__slide-part" key={i}>
                                        <div className="slider__slide-part-inner" style={{ fontFamily : 'vazir' , direction : 'ltr' , backgroundImage: `url(${slide.img})` }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider__control" onClick={() => this.changeSlides(-1)} />
                <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
            </div>
        );
    }
}

export default Slider1