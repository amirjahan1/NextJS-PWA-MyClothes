
import React, {Fragment} from "react";
import Header from "../Components/Home/Header/Header";
import Slider1 from "../Components/Home/Sliders/Slider1/Slider1";
import SlickSlider from "../Components/Home/SlickSlider/SlickSlider";
import Box5 from "../Components/Home/Boxes/Box";
import Box6th from "../Components/Home/Box6/Box6th";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ApartmentIcon from '@mui/icons-material/Apartment';




export default function Index() {

    const data = [
        {
            country : "جذاب ترین های هفته",
            city : "کت و شلوار",
            img : "/Images/Slider1/slide1.jpg"
        },

        {
            country : "برند های جدید",
            city : "اسپورت و خفن",
            img : "/Images/Slider1/slide2.jpg"
        },

        {
            country : "با کیفیت ترین",
            city : "پیراهن و تیشرت",
            img : "/Images/Slider1/slide3.jpg"
        }

    ]
  return (
      <Fragment>


          <Header/>
          <Slider1 SliderDetail={data}/>
       
          <SlickSlider/>



          <div className="flex flex-wrap  mt-32 icon6 px-10">
       
          </div>
      </Fragment>





  )
}
