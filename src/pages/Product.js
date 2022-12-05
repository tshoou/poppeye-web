import React from 'react'
import Navbar from "../components/navbar/navbar"
import Footer from "../components/Footer/Footer"
import Product2 from "../assets/Product2.png"
import picProduct1 from "../assets/picProduct1.png"
import ourProduct1 from "../assets/fi-rs-leaf.png"
import { motion } from "framer-motion"

const Product = () => {
    return(
        <>
            <Navbar/>
            <div className="flex flex-col lg:flex-row items-center mx-44 text-justify my-24">
                <img src={Product2} alt="missing image" className="w-36 my-8 lg:my-0"/>
                <p className="ml-20">We were founded in 2022 by TWMS with the vision to create a product aimed at helping vegetarians consume products that are definitely for them. At that time, being vegan was difficult because many foods still used animal products. Popeye is a local company that upholds a taste and composition suitable for vegetarians. Our primary goal is to develop products that are appealing to Indonesian consumers. We are determined to build a better future for this planet.</p>
            </div>

            <div className="flex flex-row justify-center mx-44 text-center items-center my-24">
                <div className="w-1/3 mx-8 shadow-2xl rounded-2xl py-10 ">
                    <img src={ourProduct1} className="mx-auto w-1/3" />
                    <h1 className="font-semibold text-4xl text-Secondary py-8">Organic</h1>
                    <p className="text-lg px-8">Avoid artificial flavors, colors, and perservatives, among other things.</p>
                </div>

                <div className="w-1/3 mx-8 shadow-2xl rounded-2xl py-10 ">
                    <img src={ourProduct1} className="mx-auto w-1/3" />
                    <h1 className="font-semibold text-4xl text-Secondary py-8">Organic</h1>
                    <p className="text-lg px-8">Avoid artificial flavors, colors, and perservatives, among other things.</p>
                </div>

                <div className="w-1/3 mx-8 shadow-2xl rounded-2xl py-10 ">
                    <img src={ourProduct1} className="mx-auto w-1/3" />
                    <h1 className="font-semibold text-4xl text-Secondary py-8">Organic</h1>
                    <p className="text-lg px-8">Avoid artificial flavors, colors, and perservatives, among other things.</p>
                </div>

            </div>

            <div className=" text-center my-24">
                <h1 className="text-5xl text-Primary">Ingredients</h1>
                <p className="text-lg py-8">We use 3 main ingredients to make this fabulous formula</p>

                <div className="flex flex-row justify-center shadow-2xl max-w-4xl items-center mx-auto rounded-[50px]">
                    {/* <div className="my-"> */}
                        <img src={picProduct1} className="rounded-l-[50px] max-w-md"/>
                    {/* </div> */}
                    
                    <div className="text-center text-4xl flex flex-col my-auto mx-24">
                        <h1 className="hover:bg-Secondary hover:text-white py-4 px-16 rounded-full my-4">Lime</h1>
                        <h1 className="hover:bg-Secondary hover:text-white py-4 px-16 rounded-full my-4">Cilantro</h1>
                        <h1 className="hover:bg-Secondary hover:text-white py-4 px-16 rounded-full my-4">Stevia</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Product