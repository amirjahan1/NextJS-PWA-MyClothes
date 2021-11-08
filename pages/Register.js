import React ,{Fragment , useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import PersonIcon from '@mui/icons-material/Person';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Footer from "../Components/Footer/Footer";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "yup-phone";




const SignupSchema = Yup.object().shape({

    fname: Yup.string().min(2, 'کوتاه است').max(50, 'طولانی است').required('لازم است'),

    lname: Yup.string().min(2, 'کوتاه است').max(50, 'طولانی است').required('لازم است'),

    uname: Yup.string().min(2, 'کوتاه است').max(50, 'طولانی است').required('لازم است'),

    pass: Yup.string().min(2, 'کوتاه است').max(50, 'طولانی است').required('لازم است'),

    pnum: Yup.string().required("لازم است").phone("شماره تلفن نامعتبر"),

    email: Yup.string("فرمت ایمیل را درست وارد کنید").email('فرمت ایمیل را درست وارد کنید').required('لازم است'),

});
 const Register =()=>{


     const [watchPass, setWatchPass] = useState(false);

     return (

         <Fragment>



             <Formik

                 initialValues={{

                     fname: '',
                     lname: '',
                     uname: '',
                     pnum: '',
                     pass: '',
                     email: '',

                 }}

                 validationSchema={SignupSchema}

                 onSubmit={(values) => {


                 }}

             >

                 {({ errors, touched, isValidating }) => (

                     <div className="mx-auto container flex justify-center items-center" id="nav">
                         <div className="w-10/12 pt-2 p-4">

                             <div className="mx-auto md:p-6 md:w-1/2 ">

                                 <Link href="/" >
                                     <a
                                         className="mt-8 backToHome relative text-sm hover:text-rose-600 text-amber-500 hover:text-orange-600 transition duration-500">

                                         بازگشت به صفحه اصلی
                                         <ArrowCircleDownIcon className="transform rotate-90 "/>
                                     </a>
                                 </Link>
                                 <div className="flex flex-wrap justify-center items-center">
                                     <h1 style={{ fontFamily : 'vazir'}} className="text-2xl text-blueGray-600 text-center w-full text-orange-500 hover:text-orange-500 transition duration-500 p-4">
                                         فرم ثبت نام

                                     </h1>
                                     <Image alt="my clothes pwa build with Amir Jahan" src="/Gifs/Register/register.gif" height={250} width={250}/>

                                 </div>

                                 <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">


                                     <Form>

                                         <div className="mb-8">
                                             <label htmlFor="fname" className="block text-gray-700 text-sm font-bold mb-2">
                                                 نام:
                                                 {errors.fname && touched.fname ? (  <span className="text-rose-600">{errors.fname}</span> ) : null}
                                             </label>

                                             <div className="mt-1 relative rounded-md shadow-sm ">
                                                 <div
                                                     className="absolute inset-y-0 right-0 pr-3  flex items-center pointer-events-none">
                                                     <PersonIcon/>
                                                 </div>
                                                 <Field
                                                     type="text"
                                                     id="fname"
                                                     name="fname"
                                                     className="block pr-10 h-10 text-sm text-right shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                                                     placeholder=""/>
                                             </div>

                                         </div>

                                         <div className="mb-8">
                                             <label htmlFor="lname" className="block text-gray-700 text-sm font-bold mb-2">
                                                 نام خانوادگی:
                                                 {errors.lname && touched.lname ? (  <span className="text-rose-600">{errors.lname}</span> ) : null}
                                             </label>
                                             <div className="mt-1 relative rounded-md shadow-sm">
                                                 <div
                                                     className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                     <PersonIcon/>
                                                 </div>
                                                 <Field 
                                                     id="lname"
                                                     name="lname"
                                                     className="block pr-10 h-10 text-sm text-right shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                                                 />
                                             </div>

                                         </div>


                                         <div className="mb-8">
                                             <label htmlFor="uname" className="block text-gray-700 text-sm font-bold mb-2">
                                                 نام کاربری:
                                                 {errors.uname && touched.uname ? (  <span className="text-rose-600">{errors.uname}</span> ) : null}
                                             </label>
                                             <div className="mt-1 relative rounded-md shadow-sm">
                                                 <div
                                                     className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                     <PermIdentityIcon/>
                                                 </div>
                                                 <Field 
                                                     id="uname"
                                                     name="uname"
                                                     className="block pr-10 h-10 text-sm text-right shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                                                 />
                                             </div>

                                         </div>


                                         <div className="mb-8">
                                             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                                 ایمیل:
                                                 {errors.email && touched.email ? (  <span className="text-rose-600">{errors.email}</span> ) : null}
                                             </label>
                                             <div className="mt-1 relative rounded-md shadow-sm">
                                                 <div
                                                     className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                     <AlternateEmailIcon/>
                                                 </div>
                                                 <Field 
                                                     id="email"
                                                     name="email"
                                                     type="email"
                                                     className="block pr-10 h-10 text-sm text-right shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                                                 />
                                             </div>

                                         </div>

                                         <div className="mb-8">
                                             <label htmlFor="pnum" className="block text-gray-700 text-sm font-bold mb-2">
                                                 شماره تلفن:
                                                 {errors.pnum && touched.pnum ? (  <span className="text-rose-600">فرمت را صحیح وارد کنید</span> ) : null}
                                             </label>
                                             <div className="mt-1 relative rounded-md shadow-sm">
                                                 <div
                                                     className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                     <LocalPhoneIcon/>
                                                 </div>
                                                 <Field 

                                                     id="pnum"
                                                     name="pnum"
                                                     className="block pr-10 h-10 text-sm text-left shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                                                 />
                                             </div>
                                         </div>

                                         <div className="mb-8">
                                             <label htmlFor="lname" className="block text-gray-700 text-sm font-bold mb-2">
                                                 عکس کاربری:
                                             </label>
                                             <div className="mt-1 relative rounded-md shadow-sm">
                                                 <label
                                                     className="
                                            w-full
                                            flex flex-col
                                            items-center
                                            px-4
                                            py-6
                                            bg-white
                                            rounded-md
                                            shadow-md
                                            tracking-wide
                                            uppercase
                                            border border-blue
                                            cursor-pointer
                                            hover:bg-purple-600 hover:text-white
                                            text-purple-600
                                            ease-linear
                                            transition-all
                                            duration-150
                                          "
                                                 >

                                                     <span className="mt-2 text-base leading-normal">تصویر را انتخاب کنید</span>
                                                     <Field  name="files[0]" type="file" className="hidden"/>
                                                 </label>
                                             </div>
                                         </div>

                                         <div className="mb-8">
                                             <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                                 رمز حساب:
                                                 {errors.pass && touched.pass ? (  <span className="text-rose-600">{errors.pass}</span> ) : null}
                                             </label>
                                             <div className="mt-1 relative rounded-md shadow-sm">
                                                 <div onClick={()=>setWatchPass(!watchPass)}
                                                      className="absolute inset-y-0 right-0 cursor-pointer pr-3 flex items-center ">
                                                     { watchPass ?
                                                         <LockOpenIcon className="cursor-pointer"/>
                                                         :
                                                         <LockIcon className="cursor-pointer" />

                                                     }
                                                 </div>
                                                 <Field 
                                                     name="pass"
                                                     id="password"
                                                     type={ watchPass ?  "text" : "Password"}
                                                     className="block pr-10 shadow h-10 text-sm text-left  appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"/>
                                             </div>
                                         </div>

                                         <div className="mb-6">
                                             <div className="flex items-center justify-between">
                                                 <div>
                                                     <label className="block text-gray-500 font-bold" htmlFor="remember">
                                                         <Field  className="ml-2 leading-tight" type="checkbox" id="remember"
                                                                name="remember"/>
                                                         <span className="text-sm bottom-1 relative">
                                            من را فراموش نکن
                                        </span>
                                                     </label>
                                                 </div>

                                                 <div>
                                                     <label className="block text-gray-500 font-bold" htmlFor="role">
                                                         <Field  className="ml-2 leading-tight" type="checkbox" id="role"
                                                                name="rule"/>
                                                         <span className="text-sm bottom-1 relative">
                                             موافق
                                                   <span className="text-blue-900 underline cursor-pointer">
                                                       &nbsp;
                                                       قوانین
                                                       &nbsp;
                                                   </span>
                                                    هستم
                                        </span>
                                                     </label>
                                                 </div>

                                             </div>
                                         </div>

                                         <div className="mb-4  flex justify-center text-center">
                                             <button  type= "submit"
                                                 className="transition duration-500 bg-amber-500 w-10/12 hover:bg-lime-500 block text-xl hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                                 ثبت نام
                                             </button>
                                         </div>
                                         < hr/>

                                     </Form>


                                 </div>
                             </div>
                         </div>
                     </div>

                 )}

             </Formik>

         </Fragment>

     )
 }


export default Register