import React from 'react'
import Navbar from "../components/navbar/navbar"
import Footer from "../components/Footer/Footer"
import Description from "../components/Description"
import Logo from "../assets/Logo2.png";
import Shasa from "../assets/susan.png";
import Apel from "../assets/apel.png";
import Ronaldo from "../assets/ronaldo.png";
import Willy from "../assets/willy.png";
import shopee from "../assets/shopee.png"
import tokopedia from "../assets/tokopedia.png"
import amazon from "../assets/amazon.png"
import blibli from "../assets/blibli.png"
import build from "../assets/build.png"
import { motion } from "framer-motion"

const About = () => {
    return(
        <>
        <div className="h-screen bg-heroAbout bg-no-repeat bg-cover flex flex-col">
            <motion.div 
                initial={{opacity:0, x:0}}
                animate={{opacity:1}}
                transition={{
                    duration: 3,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                className="bg-gradient-to-r from-Primary via-Primary to-transparent h-screen w-full flex flex-col absolute">
                <Navbar/>
                <motion.div  
                    className="justify-between h-screen flex mt-10 sm:mt-0 sm:items-center">
                    <div className="text-white font-light ml-12">
                        <h2 className="text-xl md:text-2xl lg:text-4xl my-4">About</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl">PED COMPANY</h1>
                    </div>
                          
                </motion.div>
                
            </motion.div>
            <div className="flex justify-end mt-[40vh] sm:mt-[17vh] ">
                <motion.img 
                    initial={{
                        scale:0.9,
                        y:300
                    }}
                    animate={{
                        scale:1,
                        y:-2,
                        
                        transition:{duration:  1.3},
                        
                    }}
                    src={build} alt="missing build" className="layer max-h-[60vh] lg:max-w-xl xl:max-w-none md:max-h-[83vh] z-20"/>
                </div> 
            </div>
            
            <motion.div 
                 initial={{y:-100, opacity:0}}
                 whileInView={{opacity:1,y:0, transition:{type:"spring", duration:3.0}}}
            className="flex flex-col lg:flex-row items-center mx-0 md:mx-24 text-justify my-24">
                <img src={Logo} alt="missing image" className="w-[40vh] md:w-1/4 lg:w-2/4 my-8 lg:my-0"/>
                <p className="mx-6 md:mx-20">We were founded in 2022 by TWMS with the vision to create a product aimed at helping vegetarians consume products that are definitely for them. At that time, being vegan was difficult because many foods still used animal products. Popeye is a local company that upholds a taste and composition suitable for vegetarians. Our primary goal is to develop products that are appealing to Indonesian consumers. We are determined to build a better future for this planet.</p>
            </motion.div>

            <motion.div 
                initial={{y:-100, opacity:0}}
                whileInView={{opacity:1,y:0, transition:{type:"spring", duration:3.0}}}
            className="bg-Primary text-center flex items-center flex-col mx-6 md:mx-44 rounded-[8vh] py-6 md:py-16">
                <div className="bg-white mx-4 md:mx-20 rounded-[8vh] py-8 md:py-4">
                    <h1 className="text-2xl text-Primary">Vision</h1>
                    <p className="pt-4 px-2 md:px-24">To be the only trustworthy and vegan-friendly beverage company that can satisfy customers.</p>
                </div>
                <div className="text-white items-center">
                    <h1 className="text-2xl py-8">Mission</h1>
                    <ul className="text-left list-disc mx-8 md:mx-24 lg:mx-0">
                        <li>Satisfy customers by providing good quality drinks.</li>
                        <li>Providing food ingredients of the highest quality and accompanied by service that satisfies customers.</li>
                        <li>Providing food ingredients of the highest quality and accompanied by service that satisfies customers.</li>
                    </ul>
                </div>
            </motion.div>
            <motion.div 
                // initial={{y:-100, opacity:0}}
                // whileInView={{opacity:1,y:0, transition:{type:"spring", duration:2.0}}}
            className="my-24 text-center ">
                <h1 className="text-5xl text-Primary ">Our Team</h1>
                <p className="py-4 mx-20 lg:mx-44">These are the brains behind Popeye's! Our ambitious team comes from a variety of experience backgrounds. We believe fresh ideas will come from various perspectives.</p>
                <div className="flex flex-row flex-wrap justify-center">

                    <motion.div 
                    initial={{
                        scale:0.7,
                    }}
                    whileInView={{
                        scale:1,
                        
                        transition:{duration:  1.0},
                        
                    }}
                    className="mr-8 mt-8 rounded-3xl shadow-xl">
                        <div className="bg-Secondary rounded-t-3xl flex justify-center">
                            <img src={Shasa} className="w-64 pt-6"/>
                        </div>
                        <div className="bg-white flex flex-col rounded-b-3xl py-4 px-8">
                                <h1 className="font-semibold">Shabrina Putri Fudali</h1>
                                <h2 className="text-Primary">Chief Excecutive Officer</h2>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{
                            scale:0.7,
                        }}
                        whileInView={{
                            scale:1,
                            
                            transition:{duration:  1.0},
                            
                        }}
                    className="mr-8 mt-8 rounded-3xl shadow-xl">
                        <div className="bg-Secondary rounded-t-3xl flex justify-center">
                            <img src={Ronaldo} className="w-64 pt-6"/>
                        </div>
                        <div className="bg-white flex flex-col rounded-b-3xl py-4 px-8">
                                <h1 className="font-semibold">M. Farrel Reginaldo Ahnaf</h1>
                                <h2 className="text-Primary">Chief Operating Officer</h2>
                        </div>
                    </motion.div>

                    <motion.div 
                    initial={{
                        scale:0.7,
                    }}
                    whileInView={{
                        scale:1,
                        
                        transition:{duration:  1.0},
                        
                    }}
                    className="mr-8 mt-8 rounded-3xl shadow-xl">
                        <div className="bg-Secondary rounded-t-3xl flex justify-center">
                            <img src={Apel} className="w-64 pt-9 h-70"/>
                        </div>
                        <div className="bg-white flex flex-col rounded-b-3xl py-4 px-8">
                                <h1 className="font-semibold">Tuffahati Sholihah</h1>
                                <h2 className="text-Primary">Chief Technology Officer</h2>
                        </div>
                    </motion.div>

                    <motion.div 
                                        initial={{
                                            scale:0.7,
                                        }}
                                        whileInView={{
                                            scale:1,
                                            
                                            transition:{duration:  1.0},
                                            
                                        }}
                    className="mr-8 mt-8 rounded-3xl shadow-xl">
                        <div className="bg-Secondary rounded-t-3xl flex justify-center">
                            <img src={Willy} className="w-64 pt-9"/>
                        </div>
                        <div className="bg-white flex flex-col rounded-b-3xl py-4 px-8">
                                <h1 className="font-semibold">Willy Aidil Basrean Hasibuan</h1>
                                <h2 className="text-Primary">Chief Financial Officer</h2>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
            initial={{y:-100, opacity:0}}
            whileInView={{opacity:1,y:0, transition:{type:"spring", duration:3.0}}}
            className="text-center md:mx-36 md:my-16">
                <h1 className="text-5xl text-Primary pb-10">Partnership</h1>
                <div className="flex justify-center flex-wrap items-center">
                    <img src={tokopedia} className="w-36 h-auto mx-8 pb-12"/>
                    <img src={shopee} className="w-36 h-auto mx-8 pb-12"/>
                    <img src={amazon} className="w-36 h-auto mx-8 pb-12"/>
                    <img src={blibli} className="w-80 h-auto mx-8 pb-12"/>
                </div>
            </motion.div>
            <Footer/>
        </>
    )
}
export default About