import React from "react"
import { Link } from "react-router-dom";

const Card = ({title, description, textButton}) => {
    return(
        <>
            <div>
                <h1 className="text-5xl text-Primary">{title}</h1>
                <h2 className="text-sm my-6">{description}</h2>
                <Link
                    to="/"
                    className="text-[2vh] font-normal bg-gradient-to-r from-Gradient to-Primary text-white py-3 px-6 rounded-full"
                > {textButton}
                </Link>
            </div>
        </>
        
    )
}
export default Card