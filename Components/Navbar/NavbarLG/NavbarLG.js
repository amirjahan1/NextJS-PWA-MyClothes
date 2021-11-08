import React, {  useEffect , useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box';
import { useRouter} from "next/router";
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import InfoIcon from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {connect, useSelector} from 'react-redux';




const NavbarLG = (props) => {

    const { sx, ...other } = props;

    const router = useRouter();


    const EnterProduct=()=>{
        const hoverItem = document.getElementById('subMenuMale')
        hoverItem.classList.add('hover')
    }

    const LeaveProduct=()=>{
        const hoverItem = document.getElementById('subMenuMale')
        hoverItem.classList.remove('hover')
    }


    const EnterProductMale1=()=>{
        const hoverItem = document.getElementById('megaMenu1')
        hoverItem.classList.add('hover')
    }

    const LeaveProductMale1=()=>{
        const hoverItem = document.getElementById('megaMenu1')
        hoverItem.classList.remove('hover')
    }


    const EnterProductMale2=()=>{
        const hoverItem = document.getElementById('megaMenu2')
        hoverItem.classList.add('hover')
    }

    const LeaveProductMale2=()=>{
        const hoverItem = document.getElementById('megaMenu2')
        hoverItem.classList.remove('hover')
    }


    const EnterProductMale3=()=>{
        const hoverItem = document.getElementById('megaMenu3')
        hoverItem.classList.add('hover')
    }

    const LeaveProductMale3=()=>{
        const hoverItem = document.getElementById('megaMenu3')
        hoverItem.classList.remove('hover')
    }


    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const [textColor, setTextColor] = useState("#1F2937");

    const counter = useSelector(state => state.ProductReducer.BasketBuy.length);


    useEffect( () => {

                const listenScrollEvent = () => {
                    window.scrollY > 50 ? setnavColor("#1F2937") : setnavColor("transparent");
                    window.scrollY >50 ? setnavSize("5rem") : setnavSize("5rem");
                    window.scrollY >50 ? setTextColor("white") :  setTextColor("#1F2937");
                };
                window.addEventListener("scroll", listenScrollEvent);
                return () => {
                    window.removeEventListener("scroll", listenScrollEvent);
                };





            },[]);







  return(

      <nav style={{
          backgroundColor: navColor,
          height: navSize,
          color: textColor ,
          transition: "all 1s",
          position: "sticky",
          top: "0px"
      }}>
          <Box
              sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: textColor ,
              }}
          >
          <ul className="navbar" >
              <Box
              sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  height: '95px'
              }}
              >
              <li className={`navbar ${router.pathname == "/" ? "active" : ""}`}>
                  <Link href="/">
                <a style={{ color: textColor }} className="navbar icon">
                      <HomeIcon/>
                      خانه
                  </a>
                  </Link>
              </li>

                  <li id="subMenu" onMouseEnter={EnterProduct} onMouseLeave={LeaveProduct} className={`navbar text-white
                    ${router.pathname == "/Product" ? "active" : ""}`}>
                      <Link href="/Product">
                        <a style={{ color: textColor }} className="navbar icon">
                              <LocalMallIcon/>
                              محصولات
                          </a>
                      </Link>

                      <ul id="subMenuMale" className="absolute bg-gray-400  flex">


                    <li className="py-2"
                        onMouseEnter={EnterProductMale1}
                        onMouseLeave={LeaveProductMale1}
                        id="subMenuMale"><span  className="text-base pr-3 hover:text-rose-600">پوشاک مردانه</span>

 <section   id="megaMenu1" className="flex text-right  bg-gray-400 rounded-md absolute">
                                  <ul className="pr-3 pl-20 border-l-2 border-fuchsia-600 ">
                                      <li className="my-1" ><span  className="text-base  hover:text-rose-600">شلوار</span></li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار1 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار2 </span> </a>
                                          </Link>
                                      </li>

                                      <li   className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار3 </span> </a>
                                          </Link>
                                      </li>

                                      <li className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار4 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1">
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار5 </span> </a>
                                          </Link>
                                      </li>

                                  </ul>


                                  <ul className="pr-3 pl-20 w-1/3 border-l-2 border-fuchsia-600 ">
                                      <li className="my-1" ><span  className="text-base  hover:text-rose-600">کاپشن</span></li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن1 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن2 </span> </a>
                                          </Link>
                                      </li>

                                      <li   className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن3 </span> </a>
                                          </Link>
                                      </li>

                                      <li className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن4 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1">
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن5 </span> </a>
                                          </Link>
                                      </li>

                                  </ul>


                                      <Image alt="my clothes pwa build with Amir Jahan" className="rounded-l-md relative w-full" src="/Images/megaMenu/male.webp" width={600} height={400} />

                              </section>
                          </li>

                          <li className="py-2"
                              onMouseEnter={EnterProductMale2}
                              onMouseLeave={LeaveProductMale2}
                              id="subMenuMale"><span  className="text-base pr-3 hover:text-rose-600">پوشاک مردانه</span>

                              <section   id="megaMenu2" className="flex text-right  bg-gray-400 rounded-md absolute">
                                  <ul className="pr-3 pl-20 border-l-2 border-fuchsia-600 ">
                                      <li className="my-1" ><span  className="text-base  hover:text-rose-600">شلوار</span></li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار1 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار2 </span> </a>
                                          </Link>
                                      </li>

                                      <li   className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار3 </span> </a>
                                          </Link>
                                      </li>

                                      <li className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار4 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1">
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار5 </span> </a>
                                          </Link>
                                      </li>

                                  </ul>


                                  <ul className="pr-3 pl-20 w-1/3 border-l-2 border-fuchsia-600 ">
                                      <li className="my-1" ><span  className="text-base  hover:text-rose-600">کاپشن</span></li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن1 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن2 </span> </a>
                                          </Link>
                                      </li>

                                      <li   className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن3 </span> </a>
                                          </Link>
                                      </li>

                                      <li className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن4 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1">
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن5 </span> </a>
                                          </Link>
                                      </li>

                                  </ul>


                                  <Image alt="my clothes pwa build with Amir Jahan" className="rounded-l-md relative w-full" src="/Images/megaMenu/male.webp" width={600} height={400} />

                              </section>
                          </li>

                          <li className="py-2"
                              onMouseEnter={EnterProductMale3}
                              onMouseLeave={LeaveProductMale3}
                              id="subMenuMale"><span  className="text-base pr-3 hover:text-rose-600">پوشاک مردانه</span>

                              <section   id="megaMenu3" className="flex text-right  bg-gray-400 rounded-md absolute">
                                  <ul className="pr-3 pl-20 border-l-2 border-fuchsia-600 ">
                                      <li className="my-1" ><span  className="text-base  hover:text-rose-600">شلوار</span></li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار1 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار2 </span> </a>
                                          </Link>
                                      </li>

                                      <li   className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار3 </span> </a>
                                          </Link>
                                      </li>

                                      <li className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار4 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1">
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> شلوار5 </span> </a>
                                          </Link>
                                      </li>

                                  </ul>


                                  <ul className="pr-3 pl-20 w-1/3 border-l-2 border-fuchsia-600 w-6/6">
                                      <li className="my-1" ><span  className="text-base  hover:text-rose-600 ">کاپشن  </span></li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن1 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن2 </span> </a>
                                          </Link>
                                      </li>

                                      <li   className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن3 </span> </a>
                                          </Link>
                                      </li>

                                      <li className="my-1" >
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن4 </span> </a>
                                          </Link>
                                      </li>

                                      <li  className="my-1">
                                          <Link  href="/">
                                              <a><span  className="text-base hover:text-rose-600"> کاپشن5 </span> </a>
                                          </Link>
                                      </li>

                                  </ul>


                                  <Image alt="my clothes pwa build with Amir Jahan" className="rounded-l-md relative w-full" src="/Images/megaMenu/male.webp" width={600} height={400} />

                              </section>
                          </li>



                      </ul>

                  </li>

                  <li className={`navbar ${router.pathname == "/service" ? "active" : ""}`}>
                      <Link href="/">
                        <a style={{ color: textColor }} className="navbar icon">
                              <SupervisedUserCircleIcon/>
                             پشتیبانی
                          </a>
                      </Link>
                  </li>
                   <li className={` navbar  ${router.pathname == "/about" ? "active" : ""} `}>
                      <Link href="/About">
                        <a style={{ color: textColor }} className="navbar icon">
                              <InfoIcon/>
                             درباره ما
                          </a>
                      </Link>
                  </li>
              </Box>
          </ul>

          <ul className="navbar">
              <Box
                  sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center'
                  }}
              >

                  <li>
                      <Link href="/">
                          <a>

                                  <IconButton>

                                      <ButtonGroup variant="text" className="flex flex-row-reverse relative" aria-label="outlined primary button group">
 <Tooltip title="ورود" placement="top">
     <Button><Link href="/Login"><a> <LoginIcon style={{ color: textColor }}  /></a></Link> </Button>
 </Tooltip>

  <Tooltip title="ثبت نام" placement="top">
      <Button><Link href="/Register"><a><PersonAddAlt1Icon style={{ color: textColor }} /></a></Link>  </Button>
  </Tooltip>

   <Tooltip title="برای رفتن به صفحه خرید کلیک کنید" placement="top">
       <Button>

           <Link href="/BuyPage">
               <a>
                   <span style={{ color: textColor }}>  {
                       counter

                   }</span>
                   <AddShoppingCartIcon  style={{ color: textColor }}/>
               </a>
           </Link>
       </Button>
   </Tooltip>

                                      </ButtonGroup>
                                  </IconButton>


                          </a>
                      </Link>
                  </li>


                  <li className="navbar">
                      <Link href="/">
                          <a>
                      <Image
                          src="/Images/Title/TitleIcon.png"
                             alt="Logo Site"
                             width={70}
                             height={70}
                      />
                          </a>
                  </Link>
                      </li>

              </Box>
          </ul>

          </Box>

      </nav>

  )
}

// const mapStateToProps=state=>{
//     return{
//         BasketBuy: state.ProductReducer.BasketBuy
//     }
// }

 export default NavbarLG


