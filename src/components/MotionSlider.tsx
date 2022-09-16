import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

// import config from '../config/index.json';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 10 : -10,
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
      x: direction < 0 ? 10 : -10,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const images = [
  "https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png",
  "https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png",
  "https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png",
  "https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png",
  "https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png"
];

// const imagePoly = [

// ];

const imageText = [
  "WonderAdam",
  "奇幻地咖啡館",
  "今日工事",
  "臺虎精釀",
  "芢苒手作藝廊"
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
      <div className={`relative flex justify-center items-center mx-auto my-auto px-2 pt-4 pb-14 text-white`} style={{maxHeight: '100vh', minHeight: '80vh', height: 'auto'}}>
      <AnimatePresence initial={false} custom={direction}>
        {/* {marketLists.map((market) => ( */}
        {/* <motion.div className="flex flex-col items-center"> */}
          <motion.h2 className="z-20 text-4xl md:text-5xl font-black font-TaipeiBold" style={{maxHeight: '76vh', minHeight: '75vh', height:'auto'}}>{imageText[imageIndex]}</motion.h2>
          <motion.img
          key={page}
          src={images[imageIndex]}
          className="absolute clip rounded-3xl lg:h-4/6 md:h-2/6 h-1/3"
          // style={{maxWidth: '30vw', minWidth: '30vw', width: 'auto'}}
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
      <div className="next" onClick={() => paginate(1)} style={{right: '10%', height: '0%'}}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)} style={{left: '10%', transform: 'scale(-1)', height: '1%'}}>
        {"‣"}
      </div>
      </div>
    {/* // </section> */}
    </>
  )
};

export default MotionSlider;
