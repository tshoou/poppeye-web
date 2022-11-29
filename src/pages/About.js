import React from 'react'
import Navbar from "../components/navbar/navbar"
import Footer from "../components/Footer/Footer"
import Description from "../components/Description"
import Logo from "../assets/Logo2.png";
const About = () => {
    return(
        <>
            <Navbar/>
            <div className="flex items-center mx-24 text-justify my-24">
                <img src={Logo} alt="missing image" className="w-2/4"/>
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
            <div className="my-24 text-center mx-44">
                <h1 className="text-5xl text-Primary ">Our Team</h1>
                <p className="py-4">These are the brains behind Popeye's! Our ambitious team comes from a variety of experience backgrounds. We believe fresh ideas will come from various perspectives.</p>
            </div>
            <Footer/>
        </>
    )
}
export default About