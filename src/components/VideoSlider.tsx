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
  "https://www.youtube.com/embed/uMFsZXboB5U",
  "https://www.youtube.com/embed/O6MUfVi5C2w",
  "https://www.youtube.com/embed/h9MO0rNWu-E",
  "https://www.youtube.com/embed/_uo00VlBJBU",
  "https://www.youtube.com/embed/ft0Q1lWPj7s",
  "https://www.youtube.com/embed/d8GNh3tuyK4",
  "https://www.youtube.com/embed/XPIAaMrEZ2A",
  "https://www.youtube.com/embed/3WGWEM6bTfY",
  "https://www.youtube.com/embed/6BmlAqD6Q_c",
  "https://www.youtube.com/embed/7oCm9Dbuh5c",
  "https://www.youtube.com/embed/EgUgkGQz8mE",
  "https://www.youtube.com/embed/B3nA7kFDUlA"
];

// const imagePoly = [

// ];

const imageText = [
  "Ponay的原式大樂隊",
  "森淮 Senhuai",
  "台玖線樂團",
  "Sangpuy 桑布伊",
  "太巴塱蝸牛班",
  "Matzka",
  "山產",
  "雷擎",
  "HengJones 大亨",
  "Osay Hongay 簡燕春",
  "Abao 阿爆",
  "2022 PANGCAH 生活節 全記錄"
];

const VideoSlider = () => {

  // const { markets } = config;

  // const { title, items: marketLists } = markets;

  const [[page, direction], setPage] = useState([0, 0]);

  // const imageIndex = wrap(0, imagesS.length, page);
  const imageIndex = wrap(0, images.length, page);


  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  
  const onClick1 = (newID: number) => {
    setPage([newID, 10])
  };

  return (
    <>
    <section className="py-24" id="video">
      <div className={`relative flex justify-center items-center mx-auto px-2 text-white`} >
          <AnimatePresence initial={false} custom={direction}>
            {/* {marketLists.map((market) => ( */}
            {/* <motion.div className="flex flex-col items-center"> */}
            <div className="grid grid-cols-1 text-center">
              {/* <div>
                <motion.h2 className="text-4xl md:text-5xl font-black font-TaipeiBold inline" >{imageText[imageIndex]}</motion.h2>
              </div>
              <div>
                <motion.h2 className="text-sm font-extralight inline text-gray-400">Next: {imageText[wrap(0, images.length, page+1)]}</motion.h2>
              </div> */}
              {/* <div className=" md:mx-64 mx-10 my-3 md:rounded-[40px] rounded-[30px] backdrop-blur-[100px] bg-white bg-opacity-10 shadow-md">
                <motion.h2 className="z-20 text-sm text-white md:text-xl font-TaipeiBold md:mx-14 mx-4 my-5 whitespace-pre-line" >{imageDescrip[imageIndex]}</motion.h2>
              </div> */}
              <div>
              <motion.div className="grid grid-cols-6 gap-2 text-lg mb-4">
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(0)}>Ponay的原式大樂隊</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(1)}>森淮Senhuai</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(2)}>台玖線樂團</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(3)}>Sangpuy 桑布伊</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(4)}>太巴塱蝸牛班</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(5)}>Matzka</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(6)}>山產</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(7)}>雷擎</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(8)}>HengJones 大亨</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(9)}>Osay Hongay 簡燕春</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] px-2 py-2 hover:scale-95" onClick={() => onClick1(10)}>Abao 阿爆</button>
                <button className="bg-primary text-gray-900 bg-opacity-70 rounded-[100px] text-xs px-2 py-2 hover:scale-95" onClick={() => onClick1(11)}>2022 PANGCAH 生活節 全記錄</button>
              </motion.div>
              <motion.iframe
              key={page}
              src={images[imageIndex]}
              width="100%" 
              height="600vh" 
              // className="clip rounded-3xl md:h-[100vh] h-[38vh]"
              // style={{maxWidth: '30vw', minWidth: '30vw', width: 'auto'}}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 40 },
                opacity: { duration: 0.25 }
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


      {/* <div className="next mt-5" onClick={() => paginate(1)} style={{right: '7%', height: '0%'}}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)} style={{left: '7%', transform: 'scale(-1)'}}>
        {"‣"}
      </div> */}
      </div>
    // </section>
    </>
  )
};

export default VideoSlider;
