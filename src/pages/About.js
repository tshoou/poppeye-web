import React from 'react'
import Navbar from "../components/navbar/navbar"
import Footer from "../components/Footer/Footer"
import Description from "../components/Description"
import Logo from "../assets/Logo2.png";
import Shasa from "../assets/shasa.png";
import shopee from "../assets/shopee.png"
import tokopedia from "../assets/tokopedia.png"
import amazon from "../assets/amazon.png"
import blibli from "../assets/blibli.png"
import { motion } from "framer-motion"

const About = () => {
    return(
        <>
            <Navbar/>
            <div className="flex flex-col lg:flex-row items-center mx-24 text-justify my-24">
                <img src={Logo} alt="missing image" className="w-1/4 lg:w-2/4 my-8 lg:my-0"/>
                <p className="mx-20">We were founded in 2022 by TWMS with the vision to create a product aimed at helping vegetarians consume products that are definitely for them. At that time, being vegan was difficult because many foods still used animal products. Popeye is a local company that upholds a taste and composition suitable for vegetarians. Our primary goal is to develop products that are appealing to Indonesian consumers. We are determined to build a better future for this planet.</p>
            </div>

            <div className="bg-Primary text-center flex items-center flex-col mx-44 rounded-[8vh] py-16">
                <div className="bg-white mx-20 rounded-[8vh] py-4">
                    <h1 className="text-2xl text-Primary">Vision</h1>
                    <p className="pt-4 px-24">To be the only trustworthy and vegan-friendly beverage company that can satisfy customers.</p>
                </div>
                <div className="text-white items-center">
                    <h1 className="text-2xl py-8">Mission</h1>
                    <ul className="text-left list-disc">
                        <li>Satisfy customers by providing good quality drinks.</li>
                        <li>Providing food ingredients of the highest quality and accompanied by service that satisfies customers.</li>
                        <li>Providing food ingredients of the highest quality and accompanied by service that satisfies customers.</li>
                    </ul>
                </div>
            </div>
            <div className="my-24 text-center ">
                <h1 className="text-5xl text-Primary ">Our Team</h1>
                <p className="py-4 mx-20 lg:mx-44">These are the brains behind Popeye's! Our ambitious team comes from a variety of experience backgrounds. We believe fresh ideas will come from various perspectives.</p>
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="mr-8 mt-8 rounded-3xl shadow-xl">
                        <div className="bg-Secondary rounded-t-3xl flex justify-center">
                            <img src={Shasa} className="w-64 pt-6"/>
                        </div>
                        <div className="bg-white flex flex-col rounded-b-3xl py-4 px-8">
                                <h1 className="font-semibold">Shabrina Putri Fudali</h1>
                                <h2 className="text-Primary">Chief Excecutive Officer</h2>
                        </div>
                    </div>

                    <div className="mr-8 mt-8 rounded-3xl shadow-xl">
                        <div className="bg-Secondary rounded-t-3xl flex justify-center">
                            <img src={Shasa} className="w-64 pt-6"/>
                        </div>
                        <div className="bg-white flex flex-col rounded-b-3xl py-4 px-8">
                                <h1 className="font-semibold">Shabrina Putri Fudali</h1>
                                <h2 className="text-Primary">Chief Excecutive Officer</h2>
                        </div>
                    </div>

                    <div className="mr-8 mt-8 rounded-3xl shadow-xl">
                        <div className="bg-Secondary rounded-t-3xl flex justify-center">
                            <img src={Shasa} className="w-64 pt-6"/>
                        </div>
                        <div className="bg-white flex flex-col rounded-b-3xl py-4 px-8">
                                <h1 className="font-semibold">Shabrina Putri Fudali</h1>
                                <h2 className="text-Primary">Chief Excecutive Officer</h2>
                        </div>
                    </div>

                    <div className="mr-8 mt-8 rounded-3xl shadow-xl">
                        <div className="bg-Secondary rounded-t-3xl flex justify-center">
                            <img src={Shasa} className="w-64 pt-6"/>
                        </div>
                        <div className="bg-white flex flex-col rounded-b-3xl py-4 px-8">
                                <h1 className="font-semibold">Shabrina Putri Fudali</h1>
                                <h2 className="text-Primary">Chief Excecutive Officer</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mx-36 my-16">
                <h1 className="text-5xl text-Primary pb-10">Partnership</h1>
                <div className="flex justify-center flex-wrap items-center">
                    <img src={tokopedia} className="w-36 h-auto mx-8 pb-12"/>
                    <img src={shopee} className="w-36 h-auto mx-8 pb-12"/>
                    <img src={amazon} className="w-36 h-auto mx-8 pb-12"/>
                    <img src={blibli} className="w-80 h-auto mx-8 pb-12"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default About