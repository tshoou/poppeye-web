import React from "react"
import { Link } from "react-router-dom";

const Card = ({link, title, description, textButton}) => {
    return(
        <>
            <div className="my-20  max-w-3/4 lg:max-w-1/4">
                <div className="mx-2 lg:mx-0 text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl text-Primary ">{title}</h1>
                    <h2 className="text-sm my-6 max-w-2xl">{description}</h2>
                </div>
                <Link
                        to={link}
                        className="flex mx-auto px-auto items-center w-[14vh] text-center lg:mx-0 text-[2vh] font-normal bg-gradient-to-r from-Gradient to-Primary text-white py-3 px-8 lg:px-6 2xl:px-10 rounded-full"
                    > {textButton}
                    </Link>
            </div>
        </>
        
    )
}
export default Card