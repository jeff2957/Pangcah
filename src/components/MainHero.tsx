import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-20 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="text-left">
        {/* <h5 className=" pt-5 text-5xl font-extrabold text-white md:text-6xl font-KozHeavy tracking-wide">
          <span className="block xl:inline" style={{textAlign: 'left'}}>{mainHero.title +' Festival'}</span>{' '}
        </h5> */}
        <img className='pt-5 w-64 md:w-5/12' src='/assets/icon/pangcahNew.png'></img>
        {/* <p className="mt-3 text-lg text-gray-200 opacity-90 sm:max-w-xl md:mt-5 md:text-md mx-0 lg:text-2xl font-KozHeavy font-bold ">
          {mainHero.description}<br/>
          {mainHero.description1}
        </p> */}
        <img className='mt-3 md:w-1/12 w-1/6' src='/assets/icon/dateNew.png'></img>
        <div className="bottom-0 right-0">
          {/* <div className="text-sm text-gray-100 md:text-3xl" 
          style={{ paddingTop: '42vh', paddingLeft: '60vw'}}
          >
            <h1> 大農大富平地森林園區 </h1>
          </div> */}
          <a href='https://maps.app.goo.gl/PgRdJzfcDu23eAit6?g_st=ic' target="_blank" rel="noopener noreferrer" >
            <img src='/assets/icon/locationNew.png' className='md:w-1/5 w-1/3 ml-auto pt-56'></img>
          </a>
          {/* <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:scale-95 hover:text-black md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div> */}
          {/* <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default MainHero;
