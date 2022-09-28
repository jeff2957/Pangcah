import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;
  const [firstPlan, secondPlan, thirdPlan, forthPlan] = items;

  return (
    <section className={`py-8 mx-5 rounded-3xl `} id="pricing" style={{background: 'linear-gradient(193deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,1) 56%)'}} 
    // style={{backgroundImage: 'url(/assets/images/poster3.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width:'100vw', maxWidth: '100%'}}
    >
      <div className={` mx-auto px-2 pt-4 pb-12`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-gray-900`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64  my-0 py-0 rounded-full`} style={{background: 'radial-gradient(circle, rgba(121,154,125,1) 80%, rgba(220,251,208,1) 100%)'}}
          ></div>
        </div>
        <div
          className={`flex flex-row flex-shrink justify-center pt-12 my-auto space-x-2 md:space-x-10`}
        >
          <div
            className={`flex flex-col md:w-1/5 mx-0 rounded-lg bg-background mt-0 shadow-lg z-10 `}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`w-full py-8 whitespace-nowrap text-md md:text-5xl font-bold text-center text-primaryGreen`}>
                {firstPlan?.name}
              </div>
              <div
                className={`h-1 w-full bg-secondary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-1 md:py-4 text-gray-700 text-[8px] md:text-md lg:text-[18px]`}
                    key={`${firstPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow py-6`}
            >
              <div className={`w-full pt-6 text-lg font-bold flex justify-center text-center text-gray-700 md:text-4xl`}>
                {firstPlan?.price}
                {/* <span className={`text-base`}> {secondPlan?.priceDetails}</span> */}
                <a className='w-4 md:w-8 mt-1 hover:cursor-pointer' target="_blank" rel="noopener noreferrer" href='https://www.kkday.com/zh-tw/product/133104'>
                  <img src='/assets/icon/buy-button.png'></img>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col md:w-1/5 mx-0 rounded-lg bg-background mt-0 shadow-lg z-10 `}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`w-full py-8 whitespace-nowrap text-md md:text-5xl font-bold text-center text-primaryGreen`}>
                {secondPlan?.name}
              </div>
              <div
                className={`h-1 w-full bg-secondary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {secondPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-1 md:py-4 text-gray-700 text-[8px] md:text-md lg:text-[18px]`}
                    key={`${secondPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow py-6`}
            >
              <div className={`w-full pt-6 text-lg font-bold flex justify-center text-gray-700 md:text-4xl`}>
                {secondPlan?.price}
                {/* <span className={`text-base`}> {secondPlan?.priceDetails}</span> */}
                <a className='w-4 md:w-8 mt-1 hover:cursor-pointer' target="_blank" rel="noopener noreferrer" href='https://www.kkday.com/zh-tw/product/133056'>
                  <img src='/assets/icon/buy-button.png'></img>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col md:w-1/5 mx-0 rounded-lg bg-background mt-0 shadow-lg z-10 `}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`w-full py-8 whitespace-nowrap text-md md:text-5xl font-bold text-center text-primaryGreen`}>
                {thirdPlan?.name}
              </div>
              <div
                className={`h-1 w-full bg-secondary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {thirdPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-1 md:py-4 text-gray-700 text-[8px] md:text-md lg:text-[18px]`}
                    key={`${thirdPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow py-6`}
            >
              <div className={`w-full pt-6 text-lg font-bold flex justify-center text-center text-gray-700 md:text-4xl`}>
                {thirdPlan?.price}
                {/* <span className={`text-base`}> {secondPlan?.priceDetails}</span> */}
                <a className='w-4 md:w-8 mt-1 hover:cursor-pointer' target="_blank" rel="noopener noreferrer" href='https://www.kkday.com/zh-tw/product/133056'>
                  <img src='/assets/icon/buy-button.png'></img>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col md:w-1/5 mx-0 rounded-lg bg-background mt-0 shadow-lg z-10 `}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`w-full py-8 whitespace-nowrap text-md md:text-5xl font-bold text-center text-primaryGreen`}>
                {forthPlan?.name}
              </div>
              <div
                className={`h-1 w-full bg-secondary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {forthPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-1 md:py-4 text-gray-700 text-[8px] md:text-md lg:text-[18px]`}
                    key={`${forthPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow py-6`}
            >
              <div className={`w-full pt-6 text-lg font-bold flex justify-center text-center text-gray-700 md:text-4xl`}>
                {forthPlan?.price}
                {/* <span className={`text-base`}> {secondPlan?.priceDetails}</span> */}
                <a className='w-4 md:w-8 mt-1 hover:cursor-pointer' target="_blank" rel="noopener noreferrer" href='https://www.kkday.com/zh-tw/product/133056'>
                  <img src='/assets/icon/buy-button.png'></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
