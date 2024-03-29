import Image from "next/image"
import { ComparisonSlider } from 'react-comparison-slider';



const SliderHeader=()=>{


    return(
        <ComparisonSlider
            defaultValue={50}
            itemOne={<Image  alt="my clothes pwa build with Amir Jahan" src="/Images/Product/Slider1/slide1.jpg" width="100%" height="100$" layout="fill" style={{ height : '100vh'}} className="bg-red-200"></Image>}
            itemTwo={<Image alt="my clothes pwa build with Amir Jahan" src="/Images/Product/Slider1/slide2.jpg"  width="100%" height="100$" layout="fill" style={{ height : '100vh'}} className="bg-blue-200"></Image>}
            aspectRatio={16 / 9}
            orientation="horizontal"
        />
    )
}

export default SliderHeader