import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;
  const [firstPlan, secondPlan, thirdPlan] = items;

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
          className={`flex flex-row flex-shrink justify-center pt-12 my-auto `}
        >
          <div
            className={`flex flex-col h-1/6 w-1/4 mx-0 rounded-none md:rounded-l-lg bg-background mt-4 `}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-sm whitespace-nowrap md:text-3xl font-bold text-center border-b-4`}>
                {firstPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-1 md:py-4`}
                    key={`${firstPlan.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 md:text-2xl text-md text-gray-600 font-bold text-center`}
              >
                {firstPlan?.price}
                <span className={`text-base`}> {firstPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-1/3 mx-0 rounded-lg bg-background mt-0 shadow-lg z-10 `}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`w-full p-8 whitespace-nowrap text-md md:text-5xl font-bold text-center text-primary`}>
                {secondPlan?.name}
              </div>
              <div
                className={`h-1 w-full bg-secondary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {secondPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-1 md:py-4 text-gray-700`}
                    key={`${secondPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div className={`w-full pt-6 text-xl font-bold text-center text-gray-700 md:text-4xl`}>
                {secondPlan?.price}
                <span className={`text-base`}> {secondPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col h-1/6 w-1/4 mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 whitespace-nowrap text-sm md:text-3xl font-bold text-center border-b-4`}>
                {thirdPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {thirdPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-1 md:py-4`}
                    key={`${thirdPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 md:text-2xl text-md text-gray-600 font-bold text-center`}
              >
                {thirdPlan?.price}
                <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
