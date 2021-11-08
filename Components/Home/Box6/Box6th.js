import Link from 'next/link'




const Box6th = (props) => {


    return(
        <div className=" relative p-1 lg:w-4/12 md:10/12 w-12/12 h-auto ">
<div className=" flex border-2 rounded text-gray-500 hover:text-white border-rose-600 hover:bg-rose-600 transition duration-300">
                <span className="text-base w-9/12 text-right p-2 py-6   ">
             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                </span>
                    <div className="  text-gray-500 hover:text-white transition duration-300 absolute top-1/2 left-2 transform -translate-y-1/2   ">
                        <Link href="/">
                        <a>{props.icon}
                        </a>
                        </Link>
                        </div>
        </div>
        </div>
    )
}

export default Box6th