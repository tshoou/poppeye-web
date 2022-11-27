import React from "react"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <NavLink
            to="/"
            className={({ isActive }) =>
              `2xl:mr-7 lg:px-4 md:mr-2 xsm:mt-4 hover:text-customRed ${
                isActive ? "text-customRed" : ""
              }`
            }
          >
            Beranda
          </NavLink>
        </nav>
    )
}
export default Navbar;