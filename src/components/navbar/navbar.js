import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logoipsum-273 1.png";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const headerScrolled = () => {
	const header = document.querySelector("#header");
	if (window.scrollY > 100) {
		header.classList.add("shadow-md");
	} else {
		header.classList.remove("shadow-md");
	}
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
	const location = useLocation().hash;
	const toggleHamburger = (el) => {
		el.classList.toggle("bi-list");
		el.classList.toggle("bi-x");
		setOpen(!isOpen);
	};
	window.addEventListener("scroll", headerScrolled);
  return (
		<div
			className={`${
        isOpen 
          ? "header sticky py-3 z-[100] transition-all bg-Primary"
          : "header sticky py-3 z-[100] transition-all rounded-b-2xl"
      } font-semibold`}
			id="header"
		>
				<div className="">
					<nav className="p-0" id="nav-menu">
            <div className="flex justify-end items-center mx-10 md:hidden">
              {/* <Link
                smooth
                to="#"
                className="text-2xl text-white font-normal"
              >
                POPPEYE ENERGY DRINK
              </Link> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-list text-7xl text-white cursor-pointer md:hidden block z-50 " viewBox="0 0 16 16" onClick={(e) => toggleHamburger(e.target)}>
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>
          
          <div className="mx-20">
            
            <ul className="hidden md:flex flex-col md:flex-row justify-between items-center">
							<li>
								<NavLink
									to="/About"
									className={`${
										location === ""
											? "text-white text-sm font-light"
											: "text-white text-sm font-light"
									}  font-semibold`}
								>
									ABOUT US
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/Product"
									className={`${
										location === ""
											? "text-white text-sm font-light"
											: "text-white text-sm font-light"
									}  font-semibold`}
								>
									PRODUCT
								</NavLink>
							</li>
							<li>
              <Link
                smooth
                to="/"
                className="text-2xl text-white font-normal"
              >
                <img src={Logo} className="w-20 animate-spin-slow"/>
              </Link> 
                
							</li>
							<li>
                <a href="/https://www.instagram.com/tfshoou/"
                  target="_blank"
                  rel=" noreferrer"
                  className={`${
										location === ""
											? "text-white text-sm font-light"
											: "text-white text-sm font-light"
									} font-semibold`}
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
              <a href="/https://www.tiktok.com/"
                  target="_blank"
                  rel=" noreferrer"
                  className={`${
										location === ""
											? "text-white text-sm font-light"
											: "text-white text-sm font-light"
									} font-semibold`}
                >
                  TIKTOK
                </a>
							</li>
						</ul>
          </div>
						
					</nav>
				</div>

				{isOpen && (
					<div className="flex  mt-3 px-2 gap-y-3 md:hidden text-lg bg-Primary">
            <ul className="list-none flex flex-col items-center justify-center mx-auto">
              <li className="my-6">  
              <NavLink
                    to="/"
                    className={`${
                      location === ""
                        ? "text-white text-sm font-light border-teal-50"
                        : "text-white text-sm font-light"
                    }  font-semibold`}
                  >
                    Home
                </NavLink>
                <NavLink
                    to="/About"
                    className={`${
                      location === ""
                        ? "text-white text-sm font-light border-teal-50"
                        : "text-white text-sm font-light"
                    }  font-semibold`}
                  >
                    ABOUT US
                </NavLink>
              </li>
              <li className="my-6">
                <NavLink
                    to="/Product"
                    className={`${
                      location === ""
                        ? "text-white text-sm font-light border-teal-50"
                        : "text-white text-sm font-light"
                    }  font-semibold`}
                >
                    PRODUCT
                </NavLink>
              </li>
              {/* <li>
                <img src={Logo} className="w-20 animate-spin-slow"/>
              </li> */}
              <li className="my-6">
                <a href="/https://www.tiktok.com/"
                    target="_blank"
                    rel=" noreferrer"
                    className={`${
                      location === ""
                        ? "text-white text-sm font-light"
                        : "text-white text-sm font-light"
                    } font-semibold`}
                  >
                    INSTAGRAM
                  </a>
              </li>
              <li className="my-6">
                <a href="/https://www.tiktok.com/"
                    target="_blank"
                    rel=" noreferrer"
                    className={`${
                      location === ""
                        ? "text-white text-sm font-light"
                        : "text-white text-sm font-light"
                    } font-semibold`}
                  >
                    TIKTOK
                  </a>
              </li>
            </ul>
						
					</div>
				)}
		</div>
	);
};


export default Navbar;