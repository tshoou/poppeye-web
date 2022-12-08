import React from "react";
import { motion } from "framer-motion"
import Navbar from "../components/navbar/navbar"
import Product from "../assets/product1.png";
import Company from "../assets/company1.png";
import leftPattern from "../assets/leftPattern.png";
import rightPattern from "../assets/rightPattern.png";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card";
import AnchorLink from "react-anchor-link-smooth-scroll";
import 'tw-elements';

const Home = () => {
    return(
        <>
            <div className="h-screen bg-leaves bg-no-repeat bg-cover flex flex-col">
                <Navbar/>
                <div className="h-[100vh] md:h-3/4 flex items-center">
                    <div className="flex flex-col w-full text-center">
                        <div className="bg-white w-full py-6 flex flex-col items-center">
                            <motion.h2 
                             initial={{x:-200, opacity:0}}
                             animate={{opacity:1,x:0, transition:{type:"spring", duration:2.0}}}
                            
                            className="py-4 text-lg md:text-xl text-slate-500">DISCOVER THE TASTE OF FRESH ENERGY DRINK WITH</motion.h2>
                            <motion.h1 
                            initial={{x:200, opacity:0}}
                            animate={{opacity:1,x:0, transition:{type:"spring", duration:2.0}}}
                            className="text-3xl md:text-5xl">POPEYE ENERGY DRINK
                            
                            </motion.h1>
                        </div>
                        <h1 className="text-white mt-6">EST 2022</h1> 
                    </div>          
                </div>
                <div className="flex justify-end items-end">
                    <AnchorLink href='#product'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white m-4 sm:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </AnchorLink>
                </div>
            </div>
            
            <motion.div 
            initial={{y:-100, opacity:0}}
            whileInView={{opacity:1,y:0, transition:{type:"spring", duration:3.0}}}
            className="flex flex-wrap items-center justify-evenly my-24 mx-auto sm:flex-row" id="product">
                <img src={Product} className="max-w-sm lg:max-w-[70vh]"/>
                <Card
                    title="Popeye Energy Drink"
                    description="Popeye Soft Drinks is produced by Popeye, the only company that produces vegetarian soft drinks"
                    textButton="MORE"
                />
            </motion.div>

            <motion.div 
            initial={{y:-100, opacity:0}}
            whileInView={{opacity:1,y:0, transition:{type:"spring", duration:3.0}}}
            className="flex flex-wrap items-center justify-evenly my-24 mx-auto sm:flex-row">
                
                <Card
                    title="PED Company"
                    description="We were founded in 2022 by TWMS with the vision to create a product aimed at helping vegetarians consume products that are definitely for them."
                    textButton="MORE"
                />
                <img src={Company} className="max-w-sm lg:max-w-[70vh]"/>
            </motion.div>


            <motion.div 
            initial={{
                scale:0.7,
            }}
            whileInView={{
                scale:1,
                transition:{duration:  1.0},
                
            }}
            className="h-[10vh] md:h-[30vh] mx-8 md:mx-24 bg-white items-center flex justify-between drop-shadow-xl rounded-[50px] shadow-2xl">
                <img src={leftPattern} className="h-[10vh] md:h-[30vh] rounded-bl-[50px]"/>
                <img src={rightPattern} className="w-auto h-[10vh] md:h-[30vh]"/>
                <h1 className="text-xl md:text-5xl z-50 absolute ml-16 align-middle text-Primary">ORGANIC 
                        <span className="text-black">
                            , TASTEFUL, &nbsp;
                        </span>
                        <span className="text-Secondary">
                            ENERGIZED
                        </span>
                </h1>
            </motion.div>

            <motion.div 
            initial={{y:-100, opacity:0}}
            whileInView={{opacity:1,y:0, transition:{type:"spring", duration:3.0}}}
            className="flex flex-wrap flex-col md:flex-row mx-12 my-16 md:my-24 md:mx-24 ">
                <div className="w-full md:w-1/2 md:pl-12 pl-0">
                    <h1 className="text-Primary text-3xl md:text-5xl text-center md:text-left">
                    Frequently asked questions
                    </h1>
                </div>
                <div>
                    
                </div>
                <div className="accordion w-full md:w-1/2 md:pr-12 pr-0 my-10 md:my-0" id="accordionFlushExample">
                    <div className="border-t-0 border-l-0 border-r-0 rounded-none bg-white border">
                        <h2 className="mb-0" id="flush-headingOne">
                        <button className="
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            rounded-none
                            transition
                            font-bold
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                Is Popeye's a vegan-friendly beverage?
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="border-0 collapse show"
                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="py-4 px-5">Of course, Popeye's is 100% vegan friendly!</div>
                        </div>
                    </div>     
                    
                    <div className="border-t-0 border-l-0 border-r-0 rounded-none bg-white border">
                        <h2 className="mb-0" id="flush-headingTwo">
                        <button className="
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            rounded-none
                            transition
                            font-bold
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                Would it feel weird to use organic ingredients?
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="border-0 collapse"
                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="py-4 px-5">Don't worry, we guarantee Popeye is not an ordinary drink that is refreshing with its unique taste.</div>
                        </div>
                    </div> 

                    <div className="border-t-0 border-l-0 border-r-0 rounded-none bg-white border">
                        <h2 className="mb-0" id="flush-headingThree">
                        <button className="
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            rounded-none
                            transition
                            font-bold
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                Does Popeye's contain allergens?
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="border-0 collapse"
                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="py-4 px-5">Popeyes is safe and contains absolutely no allergens.</div>
                        </div>
                    </div>  

                    <div className="border-t-0 border-l-0 border-r-0 rounded-none bg-white border">
                        <h2 className="mb-0" id="flush-headingFour">
                        <button className="
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            rounded-none
                            transition
                            font-bold
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                aria-expanded="false" aria-controls="flush-collapseFour">
                                Can Popeye be drunk by pregnant and lactating women?
                        </button>
                        </h2>
                        <div id="flush-collapseFour" className="border-0 collapse"
                        aria-labelledby="flush-headingFour " data-bs-parent="#accordionFlushExample">
                        <div className="py-4 px-5">Even though Popeyes contains organic ingredients, Popeye's is still not recommended for pregnant women and breastfeeding mothers.</div>
                        </div>
                    </div>  

                    <div className="border-t-0 border-l-0 border-r-0 rounded-none bg-white border">
                        <h2 className="mb-0" id="flush-headingFive">
                        <button className="
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            rounded-none
                            transition
                            font-bold
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                aria-expanded="false" aria-controls="flush-collapseFive">
                               Does Popeyes contain alcohol?
                        </button>
                        </h2>
                        <div id="flush-collapseFive" className="border-0 collapse"
                        aria-labelledby="flush-headingFive " data-bs-parent="#accordionFlushExample">
                        <div className="py-4 px-5">Popeye's is Halal and does not contain alcohol.</div>
                        </div>
                    </div>       
                </div>             
            </motion.div>
            <Footer/>
        </>
        
    )
}
export default Home;