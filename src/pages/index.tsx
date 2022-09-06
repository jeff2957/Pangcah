import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import About from '../components/About';
// import Analytics from '../components/Analytics';
// import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
// import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import LoopSlide from '../components/LoopSlide';
import Artists from '../components/Artists';
import Partner from '../components/Partner';
import MarketSlider from '../components/MotionSlider';
// import NewPartner from '../components/newPartner'



const App = () => {

  const { scrollYProgress } = useViewportScroll();
  // const opacity = useTransform(scrollY, [0, 100, 200], [0.3, 0, 0.6])
  const overScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1.6, 1.2, 2])

  return (
    <>
    <motion.video  className='overscroll-none' src="https://res.cloudinary.com/projectartichoke/video/upload/v1662434830/backgroundVid_new_zqhuoi.mp4" autoPlay loop muted style={{objectFit: 'cover', width: '100vw', position: 'fixed', top: 0, zIndex: 0, scale: overScale}}>
      your browser does not support the video format
    </motion.video>
    <div className={`grid gap-y-20`} style={{height: '200vw'}}
    // style={{backgroundImage: 'url(/assets/video/backgroundVid.mp4)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '200vw', width: '100vw'}}
    >
      <div className={`relative`} style={{zIndex: 21}}>
        <div className="max-w-8xl mx-auto">
          <div
            className={`relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-8xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header /> 
            <MainHero />
          </div>
        </div>
      </div>
      {/* <LazyShow>
        <>
          <Canvas />
        </>
      </LazyShow> */}
      {/* <LazyShow>
        <>
        <MainHeroImage />
        <Canvas />
        </>
      </LazyShow> */}
      <LazyShow>
        <>
        {/* <Canvas /> */}
        <LoopSlide />
        </>
      </LazyShow>
      {/* <Canvas /> */}
      <LazyShow>
        <>
          <Product />
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Artists />
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <>
          <MarketSlider />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Pricing />
        </>
      </LazyShow>
      <LazyShow>
        <>
          {/* <Canvas /> */}
          <Partner />
          {/* <NewPartner /> */}
          <About />
        </>
      </LazyShow>
      {/* <Analytics /> */}
    </div>
    </>
  );
};

export default App;
