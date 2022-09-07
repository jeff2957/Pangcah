import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

// import config from '../config/index.json';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];

// const imagePoly = [

// ];

const imageText = [
  "市集一",
  "市集二",
  "市集三",
  "市集四",
  "市集五",
  "市集六"
];

const MotionSlider = () => {

  // const { markets } = config;

  // const { title, items: marketLists } = markets;

  const [[page, direction], setPage] = useState([0, 0]);

  // const imageIndex = wrap(0, imagesS.length, page);
  const imageIndex = wrap(0, images.length, page);


  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  

  return (
    <>
    {/* <section className="py-8 bg-black" id="markets"> */}
      <div className={`relative flex justify-center items-center mx-auto my-auto px-2 pt-4 pb-12 text-white`} style={{width: '100vw', height: '100vh'}}>
      <AnimatePresence initial={false} custom={direction}>
        {/* {marketLists.map((market) => ( */}
        {/* <motion.div className="flex flex-col items-center"> */}
          <motion.h2 className="z-20 text-5xl font-black font-TaipeiBold" style={{height: '80%'}}>{imageText[imageIndex]}</motion.h2>
          <motion.img
          key={page}
          src={images[imageIndex]}
          className="absolute clip rounded-full"
          style={{maxWidth: '70vw', maxHeight: '70%', minWidth: '20vw', width: 'auto',}}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 40 },
            opacity: { duration: 0.1 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              console.log(e)
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          />
        {/* </motion.div> */}
        {/* ))} */}
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)} style={{right: '15%', height: '0%'}}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)} style={{left: '15%', transform: 'scale(-1)', height: '1%'}}>
        {"‣"}
      </div>
      </div>
    {/* // </section> */}
    </>
  )
};

export default MotionSlider;
