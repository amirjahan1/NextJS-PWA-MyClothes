import Image from "next/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React , {useState} from "react";
import { Spin as Hamburger } from 'hamburger-react'
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {useRouter} from "next/router";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import InfoIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector} from "react-redux";



const NavbarMD = (props) => {


    const [nav, setNav] = useState(false);
    const [list, setList] = useState(false);

    const router = useRouter();

    function navResponsive(){
   setNav(!nav)

}

function listSlide(){
    setList(!list)

}
    const counter = useSelector(state => state.ProductReducer.BasketBuy.length);
    return(

        <nav style={{
            position :"sticky",
            top:"0px"
        }} className="w-full bg-blue-500 h-16 ">
            <div className="relative ">
            <ul className="flex justify-between bg-blue-500 items-center px-2 ">
                <li onClick={navResponsive}> <Hamburger/> </li>

                <li><Link href="/">
                    <a > <Image src="/Images/Title/TitleIcon.png" height={55} width={55}/> </a>
                    </Link> </li>

                <li>


                            <IconButton>
                                <ButtonGroup variant="text" className="flex flex-row-reverse" aria-label="outlined primary button group">
                                    <Tooltip title="LogIn" placement="top">
                                        <Button><Link href="/Login"><a> <LoginIcon className="text-blueGray-600"/></a></Link> </Button>
                                    </Tooltip>

                                    <Tooltip title="Register" placement="top">
                                        <Button><Link href="/Register"><a><PersonAddAlt1Icon  className="text-blueGray-600"/></a></Link>  </Button>
                                    </Tooltip>

                                    <Tooltip title="Shopping basket" placement="top">
                                        <Button><Link href="/BuyPage"><a> <span className="xl:text-black">
                                         {
                                             counter
                                         }

                                        </span><AddShoppingCartIcon  className="text-blueGray-600"/></a></Link> </Button>
                                    </Tooltip>

                                </ButtonGroup>
                            </IconButton>




                </li>
            </ul>

                <ul style={{ height : "100vh"}} className={` ${nav ? "block animate__animated animate__slideInRight " : "  animate__animated animate__slideOutRight "}  top-0 z-10 pt-5 text-xl w-1/3 l text-blueGray-600 2 bg-blue-500`}>
                <li className={`navbar ${router.pathname == "/" ? "  text-amber-500 " : ""} py-2 border-t-2 border-fuchsia-600`}>
                    <Link  href="/">
                        <a className="navbar  hover:text-amber-500 transition duration-500 ease-in-out pr-2">
                            <HomeIcon/>
                            خانه
                        </a>
                    </Link>
                </li>

                <li onClick={listSlide} className={`navbar  cursor-pointer ${router.pathname == "/product" ? "  text-amber-500 " : ""} py-2 border-t-2 border-fuchsia-600`}>
                    <div className="">
                        <div className="navbar pr-2  hover:text-amber-500 transition duration-500 ease-in-out flex justify-between text-xl text-blueGray-600 ">
                            <div className="text-xl  hover:text-amber-500 transition duration-500 ease-in-out text-blueGray-600">
                            <LocalMallIcon/>
                            محصولات
                            </div>
                            <ArrowDropDownIcon/>

                        </div>


                        <ul className={` text-base text-blueGray-600 overflow-hidden  ${ list ? " block" : "  hidden"}  `}  >
                            <div className={` ${ list ? " animate__animated animate__slideInDown" : "animate__animated animate__slideOutUp hidden"}`}>
                            <li className="  py-2  text-base border-t-2 my-2 border-dotted border-blurGray-600"><Link href="/">
                                <a className="pr-2  hover:text-amber-500 transition duration-500 ease-in-out">
                                    مردانه
                                </a>
                            </Link></li>

                            <li className="  py-2 text-base  border-t-2 my-2 border-dotted border-blurGray-600">
                                <Link href="/">
                                    <a className="pr-2  hover:text-amber-500 transition duration-500 ease-in-out" >
                                        زنانه
                                    </a>
                                </Link>
                            </li>

                            <li  className=" text-base py-2 border-t-2 my-2 border-dotted border-blurGray-600">
                                <Link href="/">
                                    <a className="pr-2   hover:text-amber-500 transition duration-500 ease-in-out"> بچگانه</a>
                                </Link>
                            </li>
                            </div>
                        </ul>

                    </div>
                </li>

                <li className={`navbar ${router.pathname == "/service" ? "  text-amber-500 " : ""} py-2 border-t-2 border-fuchsia-600`}>
                    <Link href="/">
                        <a className="navbar  hover:text-amber-500 transition duration-500 ease-in-out pr-2">
                            <SupervisedUserCircleIcon/>
                            پشتیبانی
                        </a>
                    </Link>
                </li>

                <li className={` navbar ${router.pathname == "/About" ? "  text-amber-500 " : ""} py-2 border-t-2 border-fuchsia-600`}>
                    <Link href="/About">
                        <a className="navbar  hover:text-amber-500 transition duration-500 ease-in-out pr-2">
                            <InfoIcon/>
                            درباره ما
                        </a>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>

    )
}

const mapStateProps=state=>{
    return{
        BasketBuy: state.ProductReducer.BasketBuy
    }
}

export default NavbarMD