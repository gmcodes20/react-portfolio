import React, { Fragment, useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsJustify, BsXLg } from "react-icons/bs";

import { LinkBtn } from "./utilities/Buttons";

function Nav() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    let navList = document.querySelector(".nav-list");
    if (isMenuOpened === true) {
      console.log(navList);
      navList.classList.add("translate-x-0");
      navList.classList.remove("translate-x-full");
    } else {
      navList.classList.remove("translate-x-0");
      navList.classList.add("translate-x-full");
    }
  }, [isMenuOpened]);
  return (
    <Fragment>
      <header className=" sticky top-0 z-20 shadow-lg  bg-white-700 pt-0 md:pt-0">
        <nav
          style={{ maxWidth: "90%" }}
          className="z-20 bg-white  mx-auto flex h-full items-center justify-between py-5 md:pt-0 md:py-5 "
        >
          {" "}
          <a href="./" className="text-lg text-blue-800 font-bold">
            GM
          </a>
          <div className=" z-20 nav-list flex-col-reverse translate-x-full md:translate-x-0  flex md:flex-row  gap-6 absolute  right-0 top-0 bg-white  rounded p-8 md:relative   transition out-expo duration-700 w-full md:w-auto">
            <div className="nav-list flex flex-col md:flex-row">
              <a href="./" className="nav-links m-2 font-semibold">
                Home
              </a>
              <a href="#about" className="nav-links m-2 font-semibold">
                About
              </a>
              <a href="#portfolio" className="nav-links  m-2 font-semibold">
                Portfolio
              </a>
              <a href="#contact" className="nav-links  m-2 font-semibold">
                Contact
              </a>
              <a href="blog" className="nav-links  m-2 font-semibold">
                Blog
              </a>
            </div>
            <div className=" flex gap-7 items-center">
              <BsFillMoonStarsFill className=" -z-50 menu-icon cursor-pointer" />
              <LinkBtn to={"#"} name="Resume" type={"primary"} />
            </div>
          </div>
          {isMenuOpened ? (
            <BsXLg
              onClick={openMenu}
              className={` cursor-pointer z-50 text-2xl md:hidden `}
            />
          ) : (
            <BsJustify
              onClick={openMenu}
              className={` cursor-pointer z-10 text-2xl md:hidden `}
            />
          )}
        </nav>
      </header>
    </Fragment>
  );
}

export default Nav;
