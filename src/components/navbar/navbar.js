import React from "react"
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logoipsum-273 1.png";
const Navbar = () => {
    return(
        <nav className="flex justify-evenly items-center pt-6 relative text-sm">
            <NavLink
            to="/About"
            className="text-white"
          >
            ABOUT US
          </NavLink>

          <NavLink
            to="/"
            className="text-white"
          >
            PRODUCT
          </NavLink>

          <img src={Logo} className="w-20"/>
          <NavLink
            to="/"
            className="text-white"
          >
            INSTAGRAM
          </NavLink>

          <NavLink
            to="/"
            className="text-white"
          >
            TIKTOK
          </NavLink>
        </nav>
    )
}
export default Navbar;