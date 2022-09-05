import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import config from '../config/index.json';
import { Console } from "console";


const Link = () => {
  return (
    <Link></Link>
  );
}

// function isCardOpened(props: number, props){
//   if (props == index) {
//     return true
//   }
//   return false
// }

const Partner = () => {

  const { partner } = config;
  const { items: partnerList, title } = partner;

  const [isOpen, setIsOpen] = useState(false);

  const [isSame, setIsSame] = useState(false);

  function isCardNumberSame(index: string, partnerName: string) {
    if (index.match(partnerName)) {
      setIsSame(!isSame);
    }
  }

return (
<section className={`py-8 bg-primary`} id="artists">
  <div className={`container mx-auto px-2 pt-4 pb-12 text-white`}>
    <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-black`}>
      {title}
    </h1>
    <div className={`w-full mb-4`}>
            <div className={`h-1 mx-auto bg-black w-64 opacity-30 my-3 py-0 rounded-t`}></div>
          </div>
    <div className={`w-full mb-4`}>
      <div className={`h-1 mx-auto text-white w-64 opacity-25 my-0 py-0 rounded-t`}></div>
    </div>
    <div className="grid md:grid-cols-5 gap-x-8 grid-cols-2">
      {partnerList.map((partner,idx) => (
        <motion.div layout transition={{ layout: {duration: 1}}} onClick={() => {setIsOpen(!isOpen); isCardNumberSame(idx.toString(), partner.name)}} key={partner.name} className="w-50 h-50 rounded hover:scale-110">
            <motion.img className="hover:cursor-pointer" src={partner.image}/>
          {isOpen && isSame && (
          <motion.div>
            {/* <div className="container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{width: "50vw", height: "40vh"}}> */}
                <div className="flex flex-col space-y-5 items-center">
                  <h4 className=" text-3xl">We are {partner.name}</h4>
                  <text className="px-5">{partner.description}</text>
                  {/* {console.log("isSame: " + isSame + ", index: " + idx + ", partnerName: " + partner.name)} */}
                </div>
              {/* </div> */}
            {/* <Popup trigger={
              <a>
                <img className="hover:cursor-pointer" src={partner.image}/>
              </a>
            } modal>
              <div className="container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{width: "50vw", height: "40vh"}}>
                <div className="flex flex-col space-y-5 items-center">
                  <img className="w-1/5 h-1/5" src={partner.image}/>
                  <h4 className=" text-3xl">We are {partner.name}</h4>
                  <text className="px-5">{partner.description}</text>
                </div>
              </div>
            </Popup> */}
            {/* <img className="rounded" src={partner.image} /> */}
            {/* <h2 className="text-xl">{partner.name}</h2> */}
          </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>
);
}

export default Partner;