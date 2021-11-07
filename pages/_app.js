import 'tailwindcss/tailwind.css'
import '../styles/Custom.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-slideshow-image/dist/styles.css'
import 'animate.css';
import '../styles/CardDetail.css'
import {store , persistor} from "../Redux/Store/Store";
import {Provider, useSelector} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import Footer from "./Components/Footer/Footer";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";


function MyApp({ Component, pageProps }) {


  return (
         <Provider store={store}>
             <PersistGate loading={null} persistor={persistor}>
                 <Navbar/>
          <Component {...pageProps} />
                 <Footer/>
             </PersistGate>
        </Provider>
  )
}

export default MyApp
