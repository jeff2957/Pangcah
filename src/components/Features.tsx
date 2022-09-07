import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { subtitle, description, items: featuresList } = features;
  return (
    <div className={`py-8 bg-opacity-30 backdrop-blur-md mx-5 lg:rounded-full md: rounded-3xl`} style={{height: '100vh', background: 'linear-gradient(257deg, rgba(127,152,112,1) 2%, rgba(82,117,102,1) 61%, rgba(69,99,86,0.83) 81%, rgba(125,215,192,0.44441526610644255) 96%)'}} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <h2 className={`text-base text-primary font-semibold tracking-wide uppercase text-center`}>
            {title}
          </h2> */}
          <p className="text-5xl pt-5 font-extrabold tracking-tight text-gray-200 text-center font-TaipeiBold">
            {subtitle}
          </p>
          <div className={`w-full mb-4`}>
            <div className={`h-1 mx-auto bg-black w-64 opacity-30 my-3 py-0 rounded-t`}></div>
          </div>
          <p className="py-6 mt-1 max-w-2xl text-xl text-gray-100 text-opacity-80 mx-auto text-center font-TaipeiRegular">
            {description}
          </p>
        </div>

        <div className="mt-1">
          <dl className="grid md:grid-cols-4 md:gap-x-8 grid-cols-2 gap-x-3 ">
            {featuresList.map((feature) => (
            <div key={feature.name} className="relative m-auto">
              <dt className={'items-center'}>
                <div className={`relative grid justify-center rounded-3xl bg-background
                  text-tertiary  bg-clip-padding bg-opacity-40 hover:scale-105 md:pb-20 md:h-4/5 md:rounded-full`}>
                  <img className={`inline pb-8 drop-shadow-md hover:drop-shadow-none hover:scale-110`}
                    src={feature.icon} alt={feature.name} 
                    style={{height: '30vh', width: '30vw'}}
                    />
                  <p className="mx-auto text-lg leading-5 font-medium text-gray-900 font-TaipeiBold">
                    {feature.name}
                  </p>
                  <dd className="mx-5 text-center text-black text-opacity-40 text-sm font-TaipeiRegular max-h-32">
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
