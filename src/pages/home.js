import React from "react";
import Navbar from "../components/navbar/navbar"
import Product from "../assets/product1.png";
import Company from "../assets/company1.png";
import leftPattern from "../assets/leftPattern.png";
import rightPattern from "../assets/rightPattern.png";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card";
const Home = () => {
    return(
        <>
            <div className="h-screen bg-leaves bg-no-repeat bg-cover flex flex-col">
                <Navbar/>
                <div className="h-3/4 flex items-center">
                    <div className="flex flex-col w-full text-center">
                        <div className="bg-white w-full py-6 flex flex-col">
                            <h2 className="py-4 text-xl text-slate-500">DISCOVER THE TASTE OF FRESH ENERGY DRINK WITH</h2>
                            <h1 className="text-5xl">POPEYE ENERGY DRINK</h1>
                        </div>
                        <h1 className="text-white mt-6">EST 2022</h1> 
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-evenly my-24">
                <img src={Product} className="w-[70vh]"/>
                <Card
                    title="Popeye Energy Drink"
                    description="Popeye Soft Drinks is produced by Popeye, the only company that produces vegetarian soft drinks"
                    textButton="MORE"
                />
            </div>

            <div className="flex items-center justify-evenly my-24">
                <Card
                    title="Popeye Energy Drink"
                    description="Popeye Soft Drinks is produced by Popeye, the only company that produces vegetarian soft drinks"
                    textButton="MORE"
                />
                <img src={Company} className="w-[70vh]"/>
                
            </div>

            <div className="h-[30vh] mx-24 bg-white items-center flex justify-between drop-shadow-xl rounded-[50px] shadow-2xl">
                <img src={leftPattern} className="h-[30vh] rounded-bl-[50px]"/>
                <img src={rightPattern} className="w-auto h-[30vh]"/>
                <h1 className="text-5xl z-50 absolute ml-16 align-middle text-Primary">ORGANIC 
                        <span className="text-black">
                            , TASTEFUL, &nbsp;
                        </span>
                        <span className="text-Secondary">
                            ENERGIZED
                        </span>
                </h1>
            </div>

            <div className="flex justify-center my-24">
                <h1 className="text-Primary text-4xl">
                Frequently asked questions
                </h1>
            </div>
            <Footer/>
        </>
        
    )
}
export default Home;