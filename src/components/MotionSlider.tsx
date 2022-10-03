import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Popup from "reactjs-popup";


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
  "/assets/market/WonderAdam.png",
  "/assets/market/wonderland.png",
  "/assets/market/今日工事.png",
  "/assets/market/平和飯店.png",
  "/assets/market/JimmyFoodPlace.png",
  "/assets/market/臺虎精釀.png",
  "/assets/market/路邊烤肉.png",
  "/assets/market/魚刺人.png",
  "/assets/market/Q-Tace.png",
  "/assets/market/TapayawTribeGrill.png",
  "/assets/market/慢一點.png",
  "/assets/market/芢苒.png",
  "/assets/market/Kawa.png",
  "/assets/market/Madman.png",
  "/assets/market/Nature.png",
  "/assets/market/outdoorCafe.png",
  "/assets/market/泰哥.png",
  "/assets/market/王群翔.png",
  "/assets/market/福町檸檬.png",
  "/assets/market/花子好食.png",
  "/assets/market/迷霧山谷.png"
];

// const imagePoly = [

// ];

const imageText = [
  "WonderAdam",
  "奇幻地咖啡館",
  "今日工事",
  "平和飯店",
  "擠米 掰掰飯",
  "臺虎精釀",
  "路邊烤肉",
  "魚刺人",
  "芢苒質感手作藝廊"
];

const newMotionSlider = () => {

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
    <section className="py-8" id="markets">
      <div className={`relative flex justify-center items-center mx-auto px-2 text-white`} style={{maxHeight: '100vh', minHeight: '80vh', height: 'auto'}}>
          <AnimatePresence initial={false} custom={direction}>
            {/* {marketLists.map((market) => ( */}
            {/* <motion.div className="flex flex-col items-center"> */}
            <div className="grid grid-cols-1 place-items-center">
              {/* <div>
                <motion.h2 className="z-20 text-4xl md:text-5xl font-black font-TaipeiBold whitespace-pre-line" >{imageText[imageIndex]}</motion.h2>
              </div> */}
              {/* <div className=" md:mx-64 mx-10 my-3 md:rounded-[40px] rounded-[30px] backdrop-blur-[100px] bg-white bg-opacity-10 shadow-md">
                <motion.h2 className="z-20 text-sm text-white md:text-xl font-TaipeiBold md:mx-14 mx-4 my-5 whitespace-pre-line" >{imageDescrip[imageIndex]}</motion.h2>
              </div> */}
              <div>
              <motion.img
              key={page}
              src={images[imageIndex]}
              className="clip rounded-3xl md:h-[100vh] h-[38vh]"
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
              </div>
            {/* </motion.div> */}
            {/* ))} */}
            </div>
          </AnimatePresence>


      <div className="next mt-5" onClick={() => paginate(1)} style={{right: '7%', height: '0%'}}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)} style={{left: '7%', transform: 'scale(-1)'}}>
        {"‣"}
      </div>
      </div>
    // </section>
    </>
  )
};

export default newMotionSlider;
