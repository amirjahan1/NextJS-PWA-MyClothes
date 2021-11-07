import React ,{Fragment , useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Footer from "./Components/Footer/Footer";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "yup-phone";




const SignupSchema = Yup.object().shape({


    uname: Yup.string().min(2, 'کوتاه است').max(50, 'طولانی است').required('لازم است'),

    pass: Yup.string().min(2, 'کوتاه است').max(50, 'طولانی است').required('لازم است'),

});
const Login =()=>{


    const [watchPass, setWatchPass] = useState(false);

    return (

        <Fragment>



            <Formik

                initialValues={{  uname: '',
                    pass: '',  }}

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
                                      ورود به حساب کاربری

                                    </h1>
                                    <Image src="/Gifs/Login/login.gif" height={250} width={250}/>

                                </div>

                                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">


                                    <Form>



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


                                                        <Link href="/">
                                                            <a  className="text-sm text-blueGray-600 hover:underline bottom-1 relative">
                                           رمز عبور خود را فراموش کرده اید؟
                                                            </a>
                                        </Link>

                                                </div>



                                            </div>
                                        </div>

                                        <div className="mb-4  flex justify-center text-center">
                                            <button  type="submit"
                                                     className="transition duration-500 bg-amber-500 w-10/12 hover:bg-lime-500 block text-xl hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                               ورود
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


export default Login