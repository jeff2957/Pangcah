import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { subtitle, description, items: featuresList } = features;
  return (
    <div className={`py-8 bg-opacity-30 backdrop-blur-md mx-5 lg:rounded-tr-[750px] lg:rounded-tl-[750px] md:rounded-tr-3xl rounded-3xl`} style={{objectFit: 'fill', background: 'radial-gradient(circle, rgba(245,242,242,0.93) 40%, rgba(255,255,255,0.60) 75%)'}} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <h2 className={`text-base text-primary font-semibold tracking-wide uppercase text-center`}>
            {title}
          </h2> */}
          <p className="text-5xl pt-5 font-extrabold tracking-tight text-gray-900 text-center font-TaipeiBold">
            {subtitle}
          </p>
          <div className={`w-full mb-4`}>
            <div className={`h-1 mx-auto bg-primary w-64 my-3 py-0 rounded-3xl`} style={{background: 'radial-gradient(circle, rgba(121,154,125,1) 80%, rgba(220,251,208,1) 100%)'}}></div>
          </div>
          <p className="py-6 mt-1 max-w-2xl text-xl text-gray-700 mx-auto text-left font-TaipeiRegular">
            {description}
          </p>
        </div>

        <div className="mt-1">
          <dl className="grid md:grid-cols-4 md:gap-x-8 grid-cols-2 gap-x-3 gap-y-3">
            {featuresList.map((feature) => (
            <div key={feature.name} className="relative m-auto">
              <dt className={'items-center'}>
                <div className={`relative grid justify-center rounded-3xl bg-primary
                  text-tertiary  bg-clip-padding bg-opacity-70 hover:scale-105 md:pb-20 md:h-4/5 lg:rounded-full`}>
                  <img className={`inline pb-8 mx-auto drop-shadow-md hover:drop-shadow-none hover:scale-110 `}
                    src={feature.icon} alt={feature.name} 
                    style={{width: '30vw'}}
                    />
                  <p className="mx-auto text-lg leading-6 font-medium text-gray-900 font-TaipeiBold">
                    {feature.name}
                  </p>
                  <dd className="mx-5 pb-3 text-left leading-5 text-black text-opacity-40 text-sm font-TaipeiRegular max-h-32">
                    {feature.description}
                  </dd>
                </div>
            {/* <p className="ml-16 text-lg leading-6 font-medium text-gray-900 font-KozHeavy">
              {feature.name}
            </p> */}
              </dt>
            {/* <dd className="mt-2 ml-16 text-base text-gray-500 font-KozRegular">
              {feature.description}
            </dd> */}
            </div>
            ))}
          </dl>
        </div>
    </div>
    </div>
  );
};

export default Features;
