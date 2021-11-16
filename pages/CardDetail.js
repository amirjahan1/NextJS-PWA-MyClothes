import React , {Fragment , useState , useEffect} from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {useDispatch , useSelector} from 'react-redux'
import {ADD_BASKET} from "../Redux/Action/ActionType";


const CardDetail = (props) => {


    const [value, setValue] = useState(2);

    const dispatch = useDispatch();
    const Product = useSelector(state => state.ProductReducer.ProductItem);



    return(
        <Fragment>



                    <div key={Product.id} id="container" className="w-7/12 px-32">

                        <div className="product-details pr-4  w-6/12">


                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                    direction : 'ltr',
                                    marginLeft : "9px"
                                }}
                            >

                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Box>

                            <button className="btn text-base w-4/4 absolute top-0 right-0.5">

                <span className="shopping-cart h-full">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                                <span className="buy text-xs "
     onClick={
         ()=>
             dispatch({
                 type : ADD_BASKET,
                 payload : {
                     id : Product.id,
                     name : Product.name,
                     price : parseFloat(Product["p-rial"].replace(",","").replace(",","")),
                     image : Product.poster,
                     qty : 1,
                     totalPrice : parseFloat(Product["p-rial"].replace(",","").replace(",",""))
                 }

             })
             }
                                >اضافه به سبد خرید</span>
                            </button>
                            <h2 style={{fontFamily: 'vazir'}} className="text-base text-right mt-2.5 w-full">نام محصول :  <span className="text-blue-600">{Product.name}</span> </h2>
                            <h2 style={{fontFamily: 'vazir'}} className="text-base text-right mt-2.5 w-full">نام برند :  <span className="text-blue-600">{Product.brand}</span> </h2>
                            <h2 style={{fontFamily: 'vazir'}} className="text-base text-right mt-2.5 w-full">قیمت :  <span className="text-blue-600">
                                {Product["p-rial"]}</span> </h2>



                            <h6 className="text-sm w-full text-center block relative mt-10  ">برای دیدن اطلاعات  روی عکس هاور کنید</h6>



                        </div>

                        <div className="product-image">

                            <Image height="100" width="100" layout="fill"
                                   src={Product.poster}
                                   alt=""/>


                            <div className="info">
                                <h2 style={{fontFamily : 'vazir'}} className="text-xl   pt-4 text-center"> توضیحات</h2>
                                <ul className="flex flex-col justify-evenly items-center h-full py-8">
                                    <li style={{fontFamily : 'vazir'}} className="text-sm" ><strong className="text-sm ml-4">دسته بندی : </strong>{Product.category}</li>
                                    <li style={{fontFamily : 'vazir'}} className="text-sm" ><strong className="text-sm ml-4">وضعیت : </strong>{Product.status}</li>
                                    <li style={{fontFamily : 'vazir'}} className="text-sm" ><strong className="text-sm ml-4">تخفیف : </strong>{Product.off}</li>



                                </ul>
                            </div>
                        </div>

                    </div>





        </Fragment>
    )
}




export default CardDetail