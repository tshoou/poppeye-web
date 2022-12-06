import React from 'react'
import Navbar from "../components/navbar/navbar"
import Footer from "../components/Footer/Footer"
import Product2 from "../assets/Product2.png"
import picProduct1 from "../assets/picProduct1.png"
import ourProduct1 from "../assets/Vector.svg"
import ourProduct2 from "../assets/fi-rs-thumbs-up.png"
import ourProduct3 from "../assets/fi-rs-sun.png"
import { motion } from "framer-motion"

const Product = () => {
    return(
        <>
            <Navbar/>
            <div className="flex flex-col lg:flex-row items-center md:mx-44 text-justify my-24">
                <img src={Product2} alt="missing image" className="max-w-[20vh] md:max-w-1/4 lg:max-w-2/4 my-8 lg:my-0"/>
                <p className="mx-6 text-base md:mx-20 xl:text-xl">Popeye Soft Drinks is produced by Popeye, the only company that produces vegetarian soft drinks. Popeye Soft Drinks come in a wide variety of flavors. Available only in Indonesia with amazing packaging that is also eco-friendly.</p>
            </div>

            <div className="flex flex-row flex-wrap justify-center mx-4 text-center items-center my-24">
                <div className="w-[50vh] mx-4 shadow-2xl rounded-2xl py-10 my-8 hover:bg-Primary hover:text-white">
                    <img src={ourProduct1} className="mx-auto w-1/3" />
                    <h1 className="font-semibold text-4xl text-Secondary hover:text-white py-8">Organic</h1>
                    <p className="text-lg px-8">Avoid artificial flavors, colors, and perservatives, among other things.</p>
                </div>

                <div className="w-[50vh] mx-4 shadow-2xl rounded-2xl py-14 my-8 hover:bg-Primary hover:text-white">
                    <img src={ourProduct2} className="mx-auto w-1/3" />
                    <h1 className="font-semibold text-4xl text-Secondary hover:text-white py-8">Tasteful</h1>
                    <p className="text-lg px-8">Elegant, appropriate, or aesthetically pleasing drink.</p>
                </div>

                <div className="w-[50vh] mx-4 shadow-2xl rounded-2xl py-14 my-8 hover:bg-Primary hover:text-white">
                    <img src={ourProduct3} className="mx-auto w-1/3" />
                    <h1 className="font-semibold text-4xl text-Secondary hover:text-white py-8">Energized</h1>
                    <p className="text-lg px-8">Make consumer feel energetic or eager.</p>
                </div>

            </div>

            <div className=" text-center my-24">
                <h1 className="text-5xl text-Primary">Ingredients</h1>
                <p className="text-lg py-8">We use 3 main ingredients to make this fabulous formula</p>

                <div className="flex flex-row justify-center shadow-2xl max-w-lg md:max-w-4xl items-center mx-auto rounded-[50px]">
                    <div>
                    <img src={picProduct1} className="rounded-l-[50px] max-w-[55vh] md:max-w-md"/>
                    </div>
                        
                    
                    <div className="text-center text-lg md:text-4xl flex flex-col my-auto md:mx-24">
                        <h1 className="hover:bg-Secondary hover:text-white py-0 md:py-4 px-16 md:px-16 rounded-full my-4">Lime</h1>
                        <h1 className="hover:bg-Secondary hover:text-white py-0 md:py-4 px-16 md:px-16 rounded-full my-4">Cilantro</h1>
                        <h1 className="hover:bg-Secondary hover:text-white py-0 md:py-4 px-16 md:px-16 rounded-full my-4">Stevia</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Product