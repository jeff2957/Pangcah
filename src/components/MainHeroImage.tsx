import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    
    <section className={'relative z-10'} id="video">
      <div className={`container mx-auto`} style={{maxWidth: '95%'}}>
        <div className="">
          <video autoPlay /*muted*/
            className="h-auto w-full object-cover"
            src={mainHero.img}
          />
        </div>
      </div>
    </section>
  );
};

export default MainHeroImage;
