import React from 'react';
import { motion, useTransform, useViewportScroll, useSpring } from 'framer-motion';

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
import NFT from '../components/NFT';



const App = () => {

  const { scrollYProgress } = useViewportScroll();
  // const opacity = useTransform(scrollY, [0, 100, 200], [0.3, 0, 0.6])
  const overScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.6]);
  const blurScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 4, 12]);
  const opaRange = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0.01, 0]);
  const opacity = useSpring(opaRange, { stiffness: 400, damping: 40 });
  const filter = useTransform(blurScale, b => `blur(${b}px)`);

  return (
    <>
    <motion.video id="vidBlur" className='overscroll-none' src="https://res.cloudinary.com/projectartichoke/video/upload/v1662961126/BackgroundVid_0.6x_mtcrfy.mp4" autoPlay loop muted layout 
    style={{objectFit: 'cover', width: '100vw', minHeight: '100vh' ,position: 'fixed', top: 0, zIndex: 0, filter, scale: overScale}}
    >
      your browser does not support the video format
    </motion.video>
    <div >
      <Header /> 
    </div>
    <div className={`grid gap-y-20`} 
    style={{height: '200vw'}}
    // style={{backgroundImage: 'url(/assets/images/mainHeroImg.png)', backgroundSize: 'center', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100vw', height: '100vh'}}
    >
      <motion.div className={`relative m-3 rounded-3xl`} 
      style={{zIndex: 20, backgroundImage: 'url(https://res.cloudinary.com/projectartichoke/image/upload/v1662938512/mainHeroImg_vrqe8z.png)', backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'fill', opacity: opacity}}
      >
        <div className="max-w-8xl mx-auto">
          <div
            className={`relative pb-16 sm:pb-16 md:pb-20 lg:max-w-8xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <MainHero />
          </div>
        </div>
      </motion.div>
      <LazyShow>
        <>
        <LoopSlide />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Artists />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
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
          <NFT />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Partner />
          <About />
        </>
      </LazyShow>
    </div>
    </>
  );
};

export default App;
