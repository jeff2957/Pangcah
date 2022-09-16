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
  "/assets/market/擠米掰掰飯.png",
  "/assets/market/臺虎精釀.png",
  "/assets/market/路邊烤肉.png",
  "/assets/market/魚刺人.png",
  // "https://res.cloudinary.com/projectartichoke/image/upload/v1662936984/Vendor/Wonder_she5gv.png",
  // "https://res.cloudinary.com/projectartichoke/image/upload/v1662936981/Vendor/wonderland_mmfapd.png",
  // "https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E4%BB%8A%E6%97%A5%E5%B7%A5%E4%BA%8B_j1qcdw.png",
  // "https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%87%BA%E8%99%8E%E7%B2%BE%E9%87%80_azvsos.png",
  "https://res.cloudinary.com/projectartichoke/image/upload/v1662936979/Vendor/%E8%8A%A2%E8%8B%92%E6%89%8B%E4%BD%9C%E8%97%9D%E5%BB%8A_kf4zpl.png"
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

const imageDescrip = [
  "氣味的療癒力，讓美好的氣味環繞並將它穿在身上。\nWear essence of wonderadam - by Adam\n運用純天然的植物精油，讓噴香水 wear perfume這件事情，變成fabric perfume，穿在身上，如同曖曖內含光一樣美好。",
  "座落在花蓮市區二樓，有著煙霧花海、精油香氛、以及美味餐點的療癒系咖啡館。\nBehind the Neverland, is Wonderland。\n本次選用在地有機蔬果與野菇，搭配自製醃燻鮭魚、手撕豬，最後淋上清爽莎莎醬而成的蔬果溫沙拉。使用自家栽種的長濱有機米，製作而成的無麩質米吐司，做成米三明治。",
  "今日工事是一個結合雞蛋燒／選物的地方，不管是還吃一顆雞蛋燒或是買買送禮人的禮物或自己喜歡的東西，都可以來今日工事。\n今日工事的雞蛋燒麵糊每日新鮮現打，堅持不使用預拌粉也不加泡打粉，只使用最單純的鮮奶、麵粉、砂糖、雞蛋，每週更換不同的限定口味，來吧，都可以讓這裡成為你的今日工事，每天都有驚喜。",
  "我們是平和飯店", //平和飯店
  "我們是專注在食物真實性的一個新型態餐飲，穿梭在市集、野外、實驗教室與各式各樣真實食物發生的地方；我們將以濃縮生活經驗的方式把食材組合，將腦海中的味道具現化，更重要的是任何人都可以嚐到我們引以為傲的風味光譜。 就讓春日微風與日光做引，笑聲點綴盤中飧，一同體驗擠米主廚的絕妙手藝吧。",
  "臺虎精釀是一間臺灣在地釀酒廠，自2014年起，立志以好喝的啤酒結交朋友、做有趣的事，突破傳統框架，以不甘無聊的品牌精神挑戰各種創意極限。除了持續於國內外拓展品飲市場與空間據點，臺虎精釀始終致力發揚本土文化，探索在地更多可能性，以多元融合的精神，我們敢於冒險，無畏挑戰，只為酒友們帶來豐富繽紛的品飲體驗。",
  "座落於好山好水好chill的花蓮，位處於市中心民國路美食林立的一級戰區，臨近大型停車場與各式旅館民宿，店鋪風格保留老屋特色結合大量金屬與原木元素完美結合，明亮的用餐空間搭配嚴選的音樂，提供最舒適的用餐體驗，全開放式的廚房讓我們為你表演一場出菜秀。", //路邊烤肉
  "我們都深愛著家鄉，與有故事的回憶。\n因為對於兒時記憶中的傳統⾹氣念念不忘，⿎起勇氣 創業、延續這份情感，以復古情懷，搭配創意的巧  思，建⽴起全新的感受。⽤故鄉的英⽂諧⾳-「⿂池⼈」為名，從鄉下來到都 市，向更多⼈介紹⾃⼰的家鄉，原本為默默無聞的街⾓的⼩攤，因為對品質的堅持與真誠待⼈的態度，慢 慢建⽴起知名度，消費者⼝⽿⾹傳、媒體主動採訪之 下，建⽴起品牌獨⼀無⼆的價值。",
  "無論是在地或是從其他城鎮來到這個地方的我們，日日環繞在山林水浚、田野渠流，以及夜裡無涯的星空。經過一段時間的沉澱後不僅僅是看見了美好，更看見了生命的力量。我們各自憑藉著自己的雙手，擷取來自身旁最容易取得的素材，創作著生活中我們喜愛的那份美好。"
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
              <div>
                <motion.h2 className="z-20 text-4xl md:text-5xl font-black font-TaipeiBold whitespace-pre-line" >{imageText[imageIndex]}</motion.h2>
              </div>
              <div className=" md:mx-64 mx-10 my-3 md:rounded-[40px] rounded-[30px] backdrop-blur-[100px] bg-white bg-opacity-10 shadow-md">
                <motion.h2 className="z-20 text-sm text-white md:text-xl font-TaipeiBold md:mx-14 mx-4 my-5 whitespace-pre-line" >{imageDescrip[imageIndex]}</motion.h2>
              </div>
              <div>
              <motion.img
              key={page}
              src={images[imageIndex]}
              className="clip rounded-3xl md:h-96 h-56"
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
