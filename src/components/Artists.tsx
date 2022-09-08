import React from "react";

import config from '../config/index.json';

const Artists = () => {
const { artists } = config;
const { title } = artists;
// const [ name, image, description ] = items;

return (
<section className={`py-8 bg-opacity-60 backdrop-blur-md mx-5 rounded-3xl`} style={{background: 'linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.4) 100%)'}} id="artists">
  <div className={`container mx-auto px-2 pt-4 pb-12 text-black`}>
    <h1 className={`w-full my-2 text-5xl font-bold font-TaipeiBold leading-tight text-center text-gray-900`}>
      {title}
    </h1>
    <div className={`w-full mb-4`}>
            <div className={`h-1 mx-auto bg-primary w-64 my-3 py-0 rounded-t`}></div>
          </div>
    <div className={`w-full mb-4`}>
      <div className={`h-1 mx-auto text-white w-64 opacity-25 my-0 py-0 rounded-t`}></div>
    </div>
    <h1 className="mx-auto my-3 w-1/2 text-center font-TaipeiRegular font-bold text-xl">第一天</h1>
    <div className="grid md:grid-cols-4 gap-5 grid-cols-2">
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/Ponay的原式大樂隊.png" />
          <h2 className="text-xl">Ponay的原式大樂隊</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/詹森淮.png" />
          <h2 className="text-xl">詹森淮</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/台玖線樂團.png" />
          <h2 className="text-xl">台玖線樂團</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/桑布伊.png" />
          <h2 className="text-xl">桑布伊</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/太巴塱青年階層.png" />
          <h2 className="text-xl">太巴塱青年階層</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/太巴塱蝸牛班.png" />
          <h2 className="text-xl">太巴塱蝸牛班</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/Matzka.png" />
          <h2 className="text-xl">Matzka</h2>
        </div>
      </div>
    </div>
    <h1 className="mx-auto mt-5 w-1/2 text-center font-TaipeiRegular font-bold text-xl">第二天</h1>
    <div className="mt-5 grid md:grid-cols-4 gap-5 grid-cols-2">
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/雷擎.png" />
          <h2 className="text-xl">雷擎</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/大亨.png" />
          <h2 className="text-xl">大亨</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/保卜・巴督路.png" />
          <h2 className="text-xl">保卜・巴督路</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/簡燕春.png" />
          <h2 className="text-xl">簡燕春</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/阿爆.png" />
          <h2 className="text-xl">阿爆</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/太巴塱年齡階層.png" />
          <h2 className="text-xl">太巴塱年齡階層</h2>
        </div>
      </div>
      {/* <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded" src="/assets/artists/artist1.png" />
          <h2 className="text-xl">珂拉琪</h2>
        </div>
      </div>
      <div className="bg-primary w-50 h-50   rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded" src="/assets/artists/artist2.png" />
          <h2 className="text-xl">HengJones大亨</h2>
        </div>
      </div> */}
    </div>
  </div>
</section>
);
}

export default Artists;