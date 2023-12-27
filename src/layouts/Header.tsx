import logoImg from "../assets/images/logo.png";
import icoSearch from "../assets/images/ico-search.png";
import icoCart from "../assets/images/ico-cart.png";
import { useEffect, useState } from "react";

interface NavData {
  text: string;
  link: string;
  active: boolean;
}

const navData: NavData[] = [
  {
    text: "Home",
    link: "",
    active: true,
  },
  {
    text: "Products",
    link: "",
    active: false,
  },
  {
    text: "Contact",
    link: "",
    active: false,
  },
];

function Header() {
  const [toTop, setToTop] = useState<boolean>(true);
  const [toggleMenu, setToggle] = useState<boolean>(false);
  useEffect(() => {
    const listenToScroll = () => {
      if (window.innerWidth <= 768) return;
      if (window.scrollY > 50) {
        setToTop(false);
      } else {
        setToTop(true);
      }
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listNav = navData.map((item, index) => {
    return (
      <li className="xl:mr-14 lg:mr-6" key={index}>
        <a href={item.link} className={`navItem ${item.active && "active"}`}>
          {item.text}
        </a>
      </li>
    );
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 ${
        !toTop ? "lg:bg-white" : "lg:bg-transparent"
      } transition-all bg-white`}
    >
      <div className="container mx-auto xl:px-[50px] lg:px-[30px] px-[15px] ">
        <div
          className={`flex justify-between items-center lg:transition-all h-[60px] ${
            !toTop ? "lg:h-[80px]" : "lg:h-[108px]"
          }`}
        >
          <a href="/" className="col-start-1 col-end-3">
            <img
              className={`${
                toTop ? "lg:w-auto" : "lg:w-[200px]"
              } transition-all w-[120px]`}
              src={logoImg}
              alt="Logo"
            />
          </a>
          <div
            className={`lg:bg-transparent bg-white lg:relative absolute lg:top-auto top-full left-0 right-0 lg:w-auto w-full lg:px-0 px-[15px] ${
              !toggleMenu ? "hidden" : "block"
            } lg:block`}
          >
            <ul className={`relative container mx-auto lg:flex`}>
              <li className="my-2 lg:hidden flex relative">
                <img
                  src={icoSearch}
                  className="absolute top-0 left-[10px] bottom-0 my-auto"
                />
                <input className="pl-9 basis-auto w-full grow text-sm px-3 py-2 border-blue-500 border-[1px] rounded-md focus:outline-none text-blue-1000 mr-2" />
                <a className="btn rounded-xl">Search</a>
              </li>
              <li className="lg:hidden">
                <a href="" className="navItem">
                  Cart
                </a>
              </li>
              {listNav}
            </ul>
          </div>
          <div className="flex justify-end items-center col-start-3 col-end-7">
            <div className="flex justify-end items-center">
              <span className="ico mr-7 lg:mr-7 mr-2">
                <img
                  className="w-1/2 h-auto"
                  onClick={() => setToggle(!toggleMenu)}
                  src={icoSearch}
                />
              </span>
              <span className="ico  hidden lg:flex">
                <img className="w-1/2 h-auto" src={icoCart} />
              </span>
            </div>
            <a className="btn rounded-3xl">Get started</a>
            <button className="lg:hidden ml-2" onClick={() => setToggle(!toggleMenu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className={`w-8 h-8 stroke-blue-1000 cursor-pointer ${
                  toggleMenu && "hidden"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-8 h-8 stroke-blue-1000 cursor-pointer ${
                  !toggleMenu && "hidden"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <hr className="border-white" />
      </div>
    </header>
  );
}

export default Header;
