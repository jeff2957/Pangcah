import React, { Fragment, useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll, useSpring } from 'framer-motion';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const headerLink = ["video", "about us", "features", "events", "tickets", "contact"];

// const hasWindow = typeof window !== 'undefined';

// function getWindowDimension() {
//   const width = hasWindow ? window.innerWidth : null;
//   const height = hasWindow ? window.innerHeight : null;
//   return {
//     height, width
//   };
// }

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimension());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimension());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }

const Menu = () => {
  // const { height, width } = useWindowDimensions();

  const { navigation, company, callToAction } = config;
  const { name: companyName, logo } = company;

  const { scrollYProgress, scrollY } = useViewportScroll();
  const scaleX = useTransform(scrollYProgress, [0, 0.4, 0.8, 1, 1.5], [0, 0.3, 0.6, 0.8, 1])
  const progressX = useSpring(scaleX, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001
  })
  

  // const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
  
  // function backgroundHue() {
  //     var background = `linear-gradient(306deg, ${hue(80)}, ${hue(160)})`
  // }

  return (
    <>
      {/* <svg
        className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2`}
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg> */}
      <Popover>
        <div 
          className="fixed z-40 md:top-2 top-0 left-2 right-2 rounded-xl pt-4 md:pb-4 sm:px-6 lg:px-8 md:bg-white bg-transparent md:bg-opacity-10 md:backdrop-blur-sm" 
        >
          <nav
            className="relative flex items-center justify-between sm:h-10"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">{companyName}</span>
                  <img alt="logo" className="h-16 w-auto sm:h-16 ml-3" src="/assets/icon/logo_icon.svg" />
                </a>
                <div className="mr-3 flex items-center md:hidden">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  key={item.name}
                  to={item.href}
                  isDynamic={true}
                  hover={headerLink}
                  className="font-medium text-secondary text-opacity-80 hover:text-primaryLight"
                >
                  {item.name}
                </Link>
              ))}
              {/* <a
                href="#"
                className={`font-medium text-primary hover:text-secondary`}
              >
                Call to action
              </a> */}
            </div>
          </nav>
          <motion.div className={`h-0.5 mt-1 opacity-60 py-0 rounded-t-xl`} style={{scaleX: progressX, zIndex: 41, background: 'radial-gradient(circle, rgba(152,219,193,1) 38%, rgba(255,255,255,0.8505996148459384) 100%)'}}/>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100 z-50"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100 z-50"
          leaveTo="opacity-0 scale-95 z-50"
        >
          <Popover.Panel
            focus
            className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/assets/icon/logo_icon.svg" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <a
                href={callToAction.href}
                target="_blank" 
                rel="noopener noreferrer"
                className={`block w-full px-5 py-3 text-center font-medium text-primaryGreen bg-gray-50 hover:bg-gray-100`}
              >
                {callToAction.text}
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Menu;
