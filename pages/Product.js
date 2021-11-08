import React , {Fragment , useState} from 'react'
import SliderHeader from "../Components/Product/SliderHeader/SliderHeader";
import CardProduct from "../Components/Product/CardProduct/CardProduct";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Product = (props) => {


    const [startPaging, setStartPaging] = useState(0);
    const [endPaging, setEndPaging] = useState(8);




  function clickPagin(e){

    setStartPaging(0)
    setEndPaging(8)
    let start = ((parseFloat(e.target.innerText)) * 8) - 8;
    let end = start + 8
    setStartPaging(start)
    setEndPaging(end)
  }









    return(
        <Fragment >





            <SliderHeader/>


            <div className="grid lg:grid-cols-4  pl-20 md:grid-cols-2 grid-cols-1    ">
                {
                    props.data.Result.slice(startPaging,endPaging).map((item)=>(
                        <CardProduct key={item.id} details={item}/>
                        )

                    )


                }


            </div>
            <div className="w-full flex justify-center">
            <Stack dir="ltr" spacing={2} >
                <Pagination onClick={(e)=>clickPagin(e)} count={Math.ceil(props.data.Result.length / 8)} color="primary" />
            </Stack>
            </div>


        </Fragment>
    )
}



export async function getServerSideProps(context) {
    const res = await fetch(`https://okaliptoos-api.ir/digikala/index.php?q=TEXT`)
    const data = await res.json()

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
                revalidate: 60,
            },
        }
    }

    return {
        props: {data},

    }

}




export default Product