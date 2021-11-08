import React, {Fragment, useEffect, useState} from "react";
import NavbarLG from "./NavbarLG/NavbarLG";
import NavbarMD from "./NavbarMD/NavbarMD";






const Navbar = () => {

    const [width, setWidth] = useState(0);



    useEffect(()=>{

        if (typeof window !==  "undefined" ) {
            setWidth(window.innerWidth)
            window.addEventListener("resize", function (){
                setWidth(window.innerWidth)
            })
        }


    },[width])


    return(
        <Fragment>


            { width >= 950  ?   <NavbarLG/> : <NavbarMD/> }
        </Fragment>
    )
}

export default Navbar