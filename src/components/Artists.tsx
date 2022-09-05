import React from "react";

import config from '../config/index.json';

const Artists = () => {
const { artists } = config;
const { title } = artists;
// const [ name, image, description ] = items;

return (
<section className={`py-8 bg-opacity-60 backdrop-blur-md mx-5 rounded-3xl`} style={{background: 'linear-gradient(150deg, rgba(125,147,112,1) 2%, rgba(82,117,102,1) 61%, rgba(69,99,86,0.83) 81%, rgba(45,91,79,0.44441526610644255) 96%)'}} id="artists">
  <div className={`container mx-auto px-2 pt-4 pb-12 text-black`}>
    <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-black`}>
      {title}
    </h1>
    <div className={`w-full mb-4`}>
            <div className={`h-1 mx-auto bg-black w-64 opacity-30 my-3 py-0 rounded-t`}></div>
          </div>
    <div className={`w-full mb-4`}>
      <div className={`h-1 mx-auto text-white w-64 opacity-25 my-0 py-0 rounded-t`}></div>
    </div>
    <div className="grid md:grid-cols-4 gap-5 grid-cols-2">
      <div className="bg-white w-50 h-50 bg-opacity-30  rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded" src="/assets/images/aboa.jpg" />
          <h2 className="text-xl">阿爆</h2>
        </div>
      </div>
      <div className="bg-white w-50 h-50 bg-opacity-30  rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded" src="/assets/images/artist2.png" />
          <h2 className="text-xl">HengJones大亨</h2>
        </div>
      </div>
      <div className="bg-white w-50 h-50 bg-opacity-30  rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded" src="/assets/images/詹森淮.jpg" />
          <h2 className="text-xl">詹森淮</h2>
        </div>
      </div>
      <div className="bg-white w-50 h-50 bg-opacity-30  rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded" src="/assets/images/巴督路.jpg" />
          <h2 className="text-xl">巴督路</h2>
        </div>
      </div>
      <div className="bg-white w-50 h-50 bg-opacity-30  rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded" src="/assets/images/台九線.jpg" />
          <h2 className="text-xl">台九線</h2>
        </div>
      </div>
      <div className="bg-white w-50 h-50 bg-opacity-30  rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded" src="/assets/images/雷擎.jpg" />
          <h2 className="text-xl">雷擎</h2>
        </div>
      </div>
      {/* <div className="bg-white w-50 h-50 bg-opacity-30  rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded" src="/assets/images/artist1.png" />
          <h2 className="text-xl">珂拉琪</h2>
        </div>
      </div>
      <div className="bg-white w-50 h-50 bg-opacity-30  rounded hover:shadow-artistBg hover:scale-105 hover:font-bold">
        <div className="scale-90 text-center">
          <img className="rounded" src="/assets/images/artist2.png" />
          <h2 className="text-xl">HengJones大亨</h2>
        </div>
      </div> */}
    </div>
  </div>
</section>
);
}

export default Artists;