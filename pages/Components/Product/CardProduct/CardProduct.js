import React, {Fragment, useEffect} from "react";
import Image from 'next/image'
import Link from 'next/link'
import {connect} from 'react-redux'
import {addData} from "../../../../Redux/Action/Action";

const CardProduct = (props) => {


    return(
        <Fragment >
            <div style={{boxSizing : 'content-box'}} className="container page-wrapper overflow-hidden   my-5 overflow-hidden w-full animate__animated animate__fadeInDown ">
                <div className="page-inner w-full">
                    <div className="row">
                        <div className="el-wrapper">
                            <div className="box-up">
                                <Image width={100} height={100} layout="fill" alt="" className="img" src={props.details.poster} alt=""/>
                                    <div className="img-info overflow-hidden">
                                        <div className="info-inner">
                                            <span className=" w-full block text-center text-base bg-black opacity-60 text-white">{props.details.name}</span>
                                            <span className="w-full block text-center text-base bg-white opacity-60 text-black"> {props.details.brand}</span>
                                        </div>
                                        <div className="a-size text-base    ">سایز های موجود: <span
                                            className="size">S , M , L , XL</span></div>
                                    </div>
                            </div>

                            <div className="box-down overflow-hidden">
                                <div className="h-bg">
                                    <div className="h-bg-inner overflow-hidden"></div>
                                </div>

                                <span className="cart overflow-hidden" onClick={()=>  props.addToCart(props.details)} >
                                    <span className="price overflow-hidden">{props.details["p-rial"]} </span>
                                    <span className="add-to-cart overflow-hidden">
              <Link href={
                  {
                      pathname: '/CardDetail',
                      query: { id:  props.details.id  },
                  }}

                     ><a className="txt cursor-pointer">جزییات بیشتر</a></Link>
            </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addData(id))
    }
}

export default connect(null,mapDispatchToProps)(CardProduct)