import Image from 'next/image'


const Box5 = () => {

    return(
        <div className="grid
        lg:grid-cols-3 lg:grid-flow-col lg:grid-rows-1 lg:gap-2
        sm:grid-cols-4 sm:gap-2 sm:grid-flow-row
        grid-cols-1  gap-3  grid-flow-row

        mt-3 px-2">

            <div className="
             lg:col-span-1 lg:row-start-auto
             sm:col-span-2 sm:row-start-2


            ">
                <section  className="bg-gray-200 text-center lg:h-40 h-40 sm:h-40  rounded-xl relative overflow-hidden Box">
                    <div className="opacity-60 bg-black w-full h-full rounded-xl block absolute t-0 z-10">
                    </div>
                    <h4 className="absolute z-20 text-3xl text-blueGray-300"> پوشاک بهاره</h4>
                        <Image src="/Images/BoxUnderSlider1/spring.jpg" height="100%" width="100%" layout="fill"/>
                </section>
            </div>


            <div className="
             lg:col-span-1 lg:row-start-auto
             sm:col-span-2 sm:row-start-2

            ">
                <section  className="bg-gray-200 text-center lg:h-36 h-40 sm:h-40   rounded-xl relative overflow-hidden Box">
                    <div className="opacity-60 bg-black w-full h-full rounded-xl block absolute t-0 z-10">
                    </div>
                    <h4 className="absolute z-20 text-3xl text-blueGray-300"> پوشاک تابستانه</h4>
                    <Image src="/Images/BoxUnderSlider1/summer.jpg" height="100%" width="100%" layout="fill"/>
                </section>
            </div>


            <div className="
            lg:col-span-1 lg:row-start-auto lg:row-span-2
            sm:col-span-4 sm:row-start-1

            ">
                <section  className="bg-gray-200 text-center lg:h-80 h-40 sm:h-40 rounded-xl relative overflow-hidden Box">
                    <div className="opacity-60 bg-black w-full h-full rounded-xl block absolute t-0 z-10">
                    </div>
                    <h4 className="absolute z-20 text-3xl   text-blueGray-300"> مد سال</h4>
                    <Image src="/Images/BoxUnderSlider1/Brand.jpg" height="100%" width="100%" layout="fill"/>
                </section>
            </div>


            <div className="
            lg:col-span-1 lg:row-start-auto
            sm:col-span-2 sm:row-start-3

            ">
                <section  className="bg-gray-200 text-center  lg:h-40 h-40 sm:h-40 rounded-xl relative overflow-hidden Box">
                    <div className="opacity-60 bg-black w-full h-full rounded-xl block absolute t-0 z-10">
                    </div>
                    <h4 className="absolute z-20 text-3xl   text-blueGray-300"> پوشاک پاییزه</h4>
                    <Image src="/Images/BoxUnderSlider1/fall.jpg" height="100%" width="100%" layout="fill"/>
                </section>
            </div>


            <div className="
            lg:col-span-1 lg:row-start-auto
              sm:col-span-2 sm:row-start-3

            ">
                <section  className="bg-gray-200  text-center  lg:h-36 h-40 sm:h-40 rounded-xl relative overflow-hidden Box">
                    <div className="opacity-60 bg-black w-full h-full rounded-xl block absolute t-0 z-10">
                    </div>
                    <h4 className="absolute z-20 text-3xl  text-blueGray-300"> پوشاک زمستانه</h4>
                    <Image src="/Images/BoxUnderSlider1/winter.jpg" height="100%" width="100%" layout="fill"/>
                </section>
            </div>


        </div>
    )
}
export default Box5