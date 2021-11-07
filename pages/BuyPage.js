import React , {Fragment , useState , useEffect} from "react";
import Image from "next/image"
import {connect , useDispatch} from "react-redux";
import { removeBasket } from "../Redux/Action/Action";
import {INCREASE_QTY , DECREASE_QTY} from "../Redux/Action/ActionType";

const BuyPage = (props) => {



    const [total, setTotal] = useState(0);


    const dispatch = useDispatch();


    let AllHiddenInput=[]
    let priceArray = []
    let err = false
    let endTotal = 0

        useEffect(async () => {
        if (props.BasketBuy) {

            AllHiddenInput = document.querySelectorAll(".hiddenInput")
            for (let i = 0; i < AllHiddenInput.length; i++) {
                await priceArray.push(AllHiddenInput[i].value)
                const reducer = (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue);
                if(priceArray.reduce(reducer) > -1){
                    setTotal(priceArray.reduce(reducer))
                }

            }
        }

    }, [props.BasketBuy,props.BasketBuy.qty,props.BasketBuy.totalPrice]);








    return(
        <Fragment>



            <div className="flex justify-center my-6" dir="ltr"  >
                <div
                    className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div className="flex-1">
                        { props.BasketBuy.length < 1 ?  <h1 className="text-center text-xl ">محصولی انتخاب نکرده اید یا محصول انتخابی شما پاک شده دوباره تلاش کنید</h1>  :
                            props.BasketBuy.map(
                                (item,index)=>(
                                    <table key={index} className="w-full text-sm lg:text-base" cellSpacing="0">
                                        <thead>
                                        <tr className="h-12 uppercase">
                                            <th className="hidden md:table-cell"></th>
                                            <th className="text-center">نام محصول</th>
                                            <th className="lg:ttext-center text-center pl-5 lg:pl-0">
                                                <span className="lg:hidden text-center" title="Quantity">تعداد</span>
                                                <span className="hidden text-center lg:inline">تعداد</span>
                                            </th>
                                            <th className="hidden text-center md:table-cell">قیمت پایه</th>
                                            <th className="text-center">قیمت نهایی</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hidden pb-4 md:table-cell">

                                                <Image width="100%" height="100%" layout=""
                                                       src={item.image}
                                                       className="w-20 rounded" alt="Thumbnail"/>

                                            </td>
                                            <td className="relative">

                                                <p className="mb-2 md:ml-4 text-center mt-6">{item.name}</p>

      <small style={{bottom : "-20px"}}
             onClick={()=>props.RemoveFromBasket(item.id)}
             className="hover:text-rose-600 text-red-400 cursor-pointer text-left  absolute bottom-0 left-0  ">(حذف محصول)</small>


                                            </td>
                                            <td className="justify-center flex text-center   md:flex mt-6">
                                                <div className="w-20 h-10 ">
                                                    <div className="relative flex justify-center mt-6 flex-row  h-8">

                                                        <div className="text-xl">
                                    <button className="text-2xl px-2"
                                            onClick={()=>dispatch({
                                           type : DECREASE_QTY,
                                             payload : {
                                               id : item.id,
                                               qty : item.qty,
                                               totalPrice : item.totalPrice
                                                         }
                                                            })}
                                    >-</button>
                                                            {item.qty > 0 ? item.qty : 0}

                                                            <button className="text-xl px-2"
                                                            onClick={()=>dispatch({
                                                                type : INCREASE_QTY,
                                                                payload : {
                                                                    id : item.id,
                                                                    qty : item.qty,
                                                                    totalPrice : item.totalPrice
                                                                }
                                                            })}
                                                            >
                                                                +

                                                            </button>
                                                        </div>

                                                     </div>
                                                </div>
                                            </td>
                                            <td className="hidden text-center flex justify-center  md:table-cell">
              <span className="text-sm lg:text-base text-center  font-medium">
                {item.price}
              </span>
                                            </td>
                                            <td className="text-center">
              <span className="text-sm lg:text-base font-medium">
               { item.qty > 0 ? item.totalPrice : 0 }
              </span>
                                            </td>
                                        </tr>
                                        <input type="hidden" className="hiddenInput"  defaultValue={item.price * item.qty} />
                                        </tbody>
                                    </table>
                                )
                            )
                        }



                        <hr className="pb-6 mt-6"/>
                        <div className="my-4 mt-6 -mx-2 lg:flex" style={{fontSize: '10px'}}>



                            <div className="lg:px-2  mx-auto">
                                <div className="p-4 bg-gray-100 rounded-full">
                                    <h1 className="ml-2 font-bold uppercase text-xl text-center">جزییات خرید</h1>
                                </div>
                                <div className="p-4">
                                    <p className="mb-6 italic text-xl text-center">خریدی امن و مطمئن از فروشگاه انلاین مای کلودز،ممنونیم از
                                        اعتماد شما</p>


                                    <div className="flex justify-between pt-4 text-xl border-b">
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                              {props.BasketBuy.length == 0 ? "0"  : total}تومان
                                        </div>
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 text-xl lg:text-lg font-bold text-center text-gray-900">
                                            قیمت پرداختی
                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-4 border-b">
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 text-xl text-lg lg:text-xl font-bold text-center text-gray-800">
                                            { props.BasketBuy.length == 0 ? "0"  : total}تومان
                                        </div>
                                        <div
                                            className="lg:px-4 lg:py-2 m-2 text-xl lg:text-lg font-bold text-center text-gray-900">

                                            جمع نهایی
                                        </div>
                                    </div>

                                        <button
                                            className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">

                                            <span className="ml-2 mt-5px text-xl">رفتن به درگاه بانکی</span>
                                        </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </Fragment>
    )
}


const mapStateToProps=state=>{
    return{
        BasketBuy: state.ProductReducer.BasketBuy
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        RemoveFromBasket: (id)=>dispatch(removeBasket(id)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BuyPage)