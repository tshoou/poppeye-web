import React, { useState } from "react";
import Navbar from "../components/navbar/navbar"
import Footer from "../components/Footer/Footer"
import Product2 from "../assets/Product2.png"
import picProduct1 from "../assets/picProduct1.png"
import ourProduct1 from "../assets/Vector.svg"
import ourProduct2 from "../assets/fi-rs-thumbs-up.png"
import ourProduct3 from "../assets/fi-rs-sun.png"
import Carousel from "../components/Carousel";
import Botol from "../assets/botol.png"
import { motion } from "framer-motion"
import picProduct2 from "../assets/picProduct2.png" 
import picProduct3 from "../assets/picProduct3.png"

// const data = [
//     {
//         key: "1",
//         img: "picProduct1"
//     },
//     {
//         key: "2",
//         img: "picProduct2"
//     },
//     {
//         key: "3",
//         img: "picProduct3"
//     }
    
// ]  
const Product = () => {
    // const [toggle, setToggle] = useState();
    return(
        <>
            <div className="h-screen bg-heroProduct bg-no-repeat bg-cover flex flex-col">
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
                    <div className="text-white font-light ml-12 ">
                        <h2 className="text-xl md:text-2xl lg:text-4xl my-4">About</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl max-w-2xl">POPPEYE ENERGY DRINK</h1>
                    </div>
                          
                </motion.div>
                
            </motion.div>
            <div className="flex justify-end place-items-end mt-[55vh] sm:mt-[33vh] md:mt-[40vh] lg:mt-[33vh]">
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

                    src={Botol} alt="missing build" className=" w-[20vh] sm:w-[30vh] md:pl-4 lg:pl-0 2xl:pl-12 z-20 mr-10"/>
                </div> 
            </div>

            <motion.div 
            initial={{y:-100, opacity:0}}
            whileInView={{opacity:1,y:0, transition:{type:"spring", duration:3.0}}}
            className="flex flex-col lg:flex-row items-center md:mx-44 text-justify my-24">
                <img src={Product2} alt="missing image" className="max-w-[20vh] md:max-w-1/4 lg:max-w-2/4 my-8 lg:my-0"/>
                <p className="mx-6 text-base md:mx-20 xl:text-xl">Popeye Soft Drinks is produced by Popeye, the only company that produces vegetarian soft drinks. Popeye Soft Drinks come in a wide variety of flavors. Available only in Indonesia with amazing packaging that is also eco-friendly.</p>
            </motion.div>

            <div className="flex flex-row flex-wrap justify-center mx-4 text-center items-center my-24">
                <motion.div 
                initial={{
                    scale:0,
                }}
                whileInView={{
                    scale:1,
                    
                    transition:{duration:  1.0, delay:0},
                    
                }}
                className="w-[50vh] mx-4 shadow-2xl rounded-2xl py-10 my-8 hover:bg-Primary hover:text-white">
                    <img src={ourProduct1} className="mx-auto w-1/3" />
                    <h1 className="font-semibold text-4xl text-Secondary hover:text-white py-8">Organic</h1>
                    <p className="text-lg px-8">Avoid artificial flavors, colors, and perservatives, among other things.</p>
                </motion.div>

                <motion.div 
                initial={{
                    scale:0,
                }}
                whileInView={{
                    scale:1,
                    
                    transition:{duration:  1.0, delay:0.10},
                    
                }}
                className="w-[50vh] mx-4 shadow-2xl rounded-2xl py-14 my-8 hover:bg-Primary hover:text-white">
                    <img src={ourProduct2} className="mx-auto w-1/3" />
                    <h1 className="font-semibold text-4xl text-Secondary hover:text-white py-8">Tasteful</h1>
                    <p className="text-lg px-8">Elegant, appropriate, or aesthetically pleasing drink.</p>
                </motion.div>

                <motion.div 
                initial={{
                    scale:0,
                }}
                whileInView={{
                    scale:1,
                    
                    transition:{duration:  1.0, delay:0.20},
                    
                }}
                className="w-[50vh] mx-4 shadow-2xl rounded-2xl py-14 my-8 hover:bg-Primary hover:text-white">
                    <img src={ourProduct3} className="mx-auto w-1/3" />
                    <h1 className="font-semibold text-4xl text-Secondary hover:text-white py-8">Energized</h1>
                    <p className="text-lg px-8">Make consumer feel energetic or eager.</p>
                </motion.div>

            </div>

            <motion.div 
             initial={{y:-100, opacity:0}}
             whileInView={{opacity:1,y:0, transition:{type:"spring", duration:3.0}}}className=" text-center my-24">
                <h1 className="text-5xl text-Primary">Ingredients</h1>
                <p className="text-lg py-8">We use 3 main ingredients to make this fabulous formula</p>
                <div className="flex flex-row justify-center shadow-2xl max-w-lg md:max-w-4xl items-center mx-auto rounded-[50px]">
                
                    <div className="rounded-l-[50px] max-w-[55vh] md:max-w-md">
                        <Carousel/>
                    </div>
                    <div className="text-center text-lg md:text-4xl flex flex-col my-auto md:mx-24">

                        <button className="hover:bg-Secondary hover:text-white py-0 md:py-4 px-16 md:px-16 rounded-full my-4">
                            Lime
                        </button>
                        <button className="hover:bg-Secondary hover:text-white py-0 md:py-4 px-16 md:px-16 rounded-full my-4">
                            Cilantro
                        </button>
                        <button className="hover:bg-Secondary hover:text-white py-0 md:py-4 px-16 md:px-16 rounded-full my-4">
                            Stevia
                        </button>
                    
                    </div>                
                
                
                </div>
            </motion.div>
           
            <Footer/>
        </>
    )
}
export default Product