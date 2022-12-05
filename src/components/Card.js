import React from "react"
import { Link } from "react-router-dom";

const Card = ({title, description, textButton}) => {
    return(
        <>
            <div className="my-20 md:my-0 w-2/4">
                <div className="mx-8 lg:mx-0 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl text-Primary ">{title}</h1>
                    <h2 className="text-sm my-6">{description}</h2>
                </div>
                <Link
                        to="/"
                        className="flex mx-auto px-auto items-center w-[14vh] text-center md:mx-0 text-[2vh] font-normal bg-gradient-to-r from-Gradient to-Primary text-white py-3 px-8 md:px-6 2xl:px-10 rounded-full"
                    > {textButton}
                    </Link>
            </div>
        </>
        
    )
}
export default Card