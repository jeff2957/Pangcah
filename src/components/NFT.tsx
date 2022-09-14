import React from "react";
import Divider from "./Divider";

import config from '../config/index.json';

const NFTLinks = [
    `<iframe src="https://giphy.com/embed/UIJ8vS4IONvseWqItl" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/UIJ8vS4IONvseWqItl">via GIPHY</a></p>`,
    `<iframe src="https://giphy.com/embed/UIJ8vS4IONvseWqItl" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/UIJ8vS4IONvseWqItl">via GIPHY</a></p>`,
    `<iframe src="https://giphy.com/embed/UIJ8vS4IONvseWqItl" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/UIJ8vS4IONvseWqItl">via GIPHY</a></p>`
]

const NFT = () => {
const { NFT } = config;
// const { title, link, imageUrl } = NFT;

return (
<section className={`py-8 backdrop-blur-md mx-5 rounded-3xl bg-black`} 
// style={{background: ''}} 
id="NFT">
  <div className={`mx-auto px-2 pt-4 pb-12`}>
    <h1 className={`w-full my-2 text-5xl font-bold font-TaipeiBold leading-tight text-center text-white`}>
      NFT
    </h1>
    <div className={`w-full mb-20`}>
      <div className={`h-1 mx-auto bg-black w-64 my-3 py-0 rounded-3xl`} style={{background: 'radial-gradient(circle, rgba(255,255,255,1) 50%, rgba(121,154,100,0.8) 100%)'}}></div>
    </div>
    <div className="grid md:grid-cols-3 sm:grid-cols-1 place-items-center">
        <div className="text-center">
            {/* <iframe src="https://giphy.com/embed/II6srLddMbfMmhWqiF" width="340" height="340" className="giphy-embed" allowFullScreen></iframe> */}
            <img className="rounded-[12px] blur-[28px] hover:blur-[1px] hover:scale-90" src="/assets/icon/SP_kakacawa.jpg" style={{width: 400}}></img>
            <h2 className="lg:text-xl text-md font-bold font-TaipeiBold text-white">守護靈 Kakacawan</h2>
        </div>
        <div className="text-center">
            {/* <iframe src="https://giphy.com/embed/UIJ8vS4IONvseWqItl" width="340" height="340" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */}
            <img className="rounded-[12px] blur-[28px] hover:blur-[1px] hover:scale-90" src="/assets/icon/SP_malataw.jpg" style={{width: 400}}></img>
            <h2 className="lg:text-xl text-md font-bold font-TaipeiBold text-white">至高神 Malataw</h2>
        </div>
        <div className="text-center">
            {/* <iframe src="https://giphy.com/embed/v0EWbGXihieGKbjyYS" width="340" height="340" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */}
            <img className="rounded-[12px] blur-[28px] hover:blur-[1px] hover:scale-90" src="/assets/icon/SP_afalong.jpg" style={{width: 400}}></img>
            <h2 className="lg:text-xl text-md font-bold font-TaipeiBold text-white">守護圖騰 Afalong</h2>
        </div>
    </div>
  </div>
</section>
);
}

export default NFT;