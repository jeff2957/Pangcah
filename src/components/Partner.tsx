import React from "react";
import Popup from "reactjs-popup";

import config from '../config/index.json';

const Link = () => {
  return (
    <Link></Link>
  );
}

const Partner = () => {

  const { partner } = config;
  const { items: partnerList, title } = partner;

return (
<section className={`py-8 mx-3 bg-primary lg:rounded-br-[100px] lg:rounded-bl-[100px] rounded-bl-[80px] rounded-br-[80px]`} id="partner">
  <div className={`container mx-auto px-2 pt-4 pb-12 text-white`}>
    <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-black`}>
      {title}
    </h1>
    <div className={`w-full mb-4`}>
            <div className={`h-1 mx-auto bg-black w-64 my-3 py-0 rounded-3xl`} style={{background: 'radial-gradient(circle, rgba(255,255,255,1) 50%, rgba(121,154,100,0.8) 100%)'}}></div>
          </div>
    <div className={`w-full mb-4`}>
      <div className={`h-1 mx-auto text-white w-64 opacity-25 my-0 py-0 rounded-t`}></div>
    </div>
    <div className="grid md:grid-cols-6 gap-x-6 grid-cols-2 place-items-center">
      {partnerList.map((partner) => (
        <div key={partner.name} className="md:w-28 md:h-28 w-16 h-16 mx-2 my-2 rounded hover:scale-110">
          <div  className="text-center">
            <Popup trigger={
              <a>
                <img className="hover:cursor-pointer" src={partner.image}/>
              </a>
            } modal>
              <div className="popup-content container mx-auto rounded-3xl backdrop-blur-[150px] bg-gray-200 bg-opacity-10 shadow-sm" style={{maxWidth: "70vw", minWidth: "60vw", width: 'auto', minHeight: '50vh'}}>
                <div className="flex flex-col space-y-5 items-center">
                  {/* <div> */}
                  <img className="w-1/5 h-1/5 mt-5" src={partner.image}/>
                  <h4 className=" text-xl md:text-3xl font-bold font-TaipeiBold">{partner.name}</h4>
                  <text className="px-5 md:px-24 font-TaipeiLight pb-5 whitespace-pre-line">{partner.description}</text>
                  {/* </div> */}
                </div>
              </div>
            </Popup>
            {/* <img className="rounded" src={partner.image} /> */}
            {/* <h2 className="text-xl">{partner.name}</h2> */}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
);
}

export default Partner;