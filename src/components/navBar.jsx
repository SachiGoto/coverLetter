// import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/sachi-logo.png";
import { Link } from "react-scroll";
import { useState } from "react";
import circle from "../assets/quaterCircle2.svg";
import {AiOutlineTwitter} from 'react-icons/ai'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//  navigation.map(page =>{
//   if(page.name === currentPage){
//         page.current = true
//   }else{
//     page.current = false
//   }
//  })

export default function Navbar() {
  // const navigate = useNavigate();
  // navigate("/")

  const [navigation, setNavigation] = useState([
    { name: "About Me", href: "aboutMe", current: true },
    { name: "Projects", href: "projects", current: false },
    { name: "Why Company", href: "whyCompany", current: false },
    { name: "Why Me", href: "whyMe", current: false },
    { name: "Skills", href: "skills", current: false },
    { name: "Preference", href: "references", current: false },
    { name: "Resume", href: "#", current: false },
  ]);

  function isCurrent(currentPage) {
    console.log("isCurrent");
    setNavigation((prevNavigation) => {
      console.log("prevNavigation", prevNavigation, currentPage);
      return prevNavigation.map((page) => {
        return {
          ...page,
          current: page.name === currentPage ? true : false,
        };
      });
    });
  }

  return (
    <Disclosure as="nav" className="absolute navBar z-50">
      {({ open }) => (
        <>
          <div className="top-bar sm:px-6 lg:px-8 bg-backgroundColor">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden width='100'"
                    src={logo}
                    alt="Sachi Logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Sachi Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        smooth={true}
                        duration={1000}
                        offset={-70}
                        to={item.href}
                        key={item.name}
                        onClick={() => isCurrent(item.name)}
                        className={classNames(
                          item.current
                            ? "underline text-black"
                            : "text-primary hover:underline hover:font-bold hover:text-black",
                          "rounded-md px-3 py-2 text-sm font-medium cursor-pointer "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="circle">
            <img src={circle} />
          </div>

          <Disclosure.Panel className="md:hidden mobileNav">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="Link"
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "text-black underline underline-offset-4 "
                      : "hover:underline underline-offset-4",
                    "block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>

          <div className="left-sidebar z-4 bg-backgroundColor">
            <div className="sidebar-links">
              <a
                className="social-link"
                href="https://www.linkedin.com/in/sachi-goto/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="rgb(21, 120, 242)"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
              </a>
              <a
                className="social-link github"
                href="https://github.com/SachiGoto"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="rgb(21, 120, 242)"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <a
                className="social-link twitter"
                href="https://twitter.com/sachi__goto"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="rgb(21, 120, 242)"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="fill-rgb(21, 120, 242)"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
