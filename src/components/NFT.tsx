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
      PANGCAH Genesis NFT
    </h1>
    <div className={`w-full`}>
      <div className={`h-1 mx-auto bg-black w-64 my-3 py-0 rounded-3xl`} style={{background: 'radial-gradient(circle, rgba(255,255,255,1) 50%, rgba(121,154,100,0.8) 100%)'}}></div>
    </div>
    <h4 className={`w-full text-3xl font-TaipeiBold leading-tight text-center text-white space-y-3 my-10`}>
      <h5 className="md:text-[28px] text-[15px] text-center mx-5 font-bold my-10 text-primaryLight">
        我們至今仍活在由神話建構的世界裡
      </h5>
      <div className="flex w-full flex-col items-center border-[0.5px] border-green-100 rounded-[4px]">
      <h4 className="text-[24px] font-bold m-3">
        2022 活動實體賦能
      </h4>
          <h3 className="md:text-[23px] text-xl text-left content-center md:tracking-wider tracking-tight m-3 text-gray-100 ">持有本次發行之 PANGCAH Genesis NFT ，可獲得以下賦能
            <div className="list-decimal md:text-[20px] text-[15px] pt-1">
                <li>野營營位優先購買權(9/12~9/14，限定三天購買)</li>
                <li>丘丘森旅 住宿85折(限量五間)</li>
                <li>六芒星天幕豪華 VIP 休息區</li>
                <li>免費兌換微醺酒飲 1份</li>
                <li>植樹工作坊體驗 1位</li>
                <li>三款NFT限定體驗，請見後續公告</li>
            </div>
          </h3>
      </div>
      <div className="flex flex-col items-center">
          <h5 className="text-left text-lg md:mx-28 mx-5 md:tracking-wider tracking-tight pt-5 md:pt-10">
          由 Capsule Vault 團隊打造的 111 枚 PANGCAH Genesis NFT，如同 VIP 與數位身份證的綜合性票券，不僅可民眾收藏外，更由現實世界與活動現場的賦能，提供持有者多元的應用權利。
          <br/>
          在建構未來的元宇宙同時，不只有科幻與先進的元素，也將那些如同空氣一樣重要的無形文化資產，透過當代科技與藝術再現，儲存於元宇宙之中。
          </h5>
          <div className="md:mx-28 mx-5 pt-16">
            <div className="grid md:grid-cols-3 grid-cols-1">
              <img className="md:w-[300px] w-[200px] mx-auto mb-3 rounded-[120px] hover:scale-90" src="/assets/NFT/盲盒設計.jpg"></img>
              <div className="flex flex-col text-left col-span-2 md:space-y-16 space-y-5">
                <div>
                  <li className="font-bold md:text-xl text-[15px] text-primaryGreen">燒破盲盒，獲得你的獨特體驗</li>
                  <h1 className="md:text-lg text-[13px] text-left tracking-tight md:mx-3 mx-1 mt-1 md:mt-0 text-gray-100">這次的NFT共有三款，設計發想源於太巴塱地方信仰，分別是太巴塱部落守護圖騰的白螃蟹 Afalong、代表萬物有靈信仰的守護靈 Kakacawan，以及太陽神的化身：至高神 Malataw。
                  </h1>
                </div>
                <div>
                  <li className="font-bold md:text-xl text-[15px] text-primaryGreen">成為花蓮數位國民</li>
                  <h1 className="md:text-lg text-[13px] text-left tracking-tight md:mx-3 mx-1 mt-1 md:mt-0 text-gray-100">持有Genesis NFT ，即代表你已擁有花蓮國民數位身份證，在未來的各式大型活動中，擁有特殊權利的身份資格。
                  </h1>
                </div>
              </div>
            </div>
          </div>
      </div>
    </h4>
    <div className="grid md:grid-cols-3 sm:grid-cols-1 place-items-center">
        <div className="text-center">
            {/* <iframe src="https://giphy.com/embed/II6srLddMbfMmhWqiF" width="340" height="340" className="giphy-embed" allowFullScreen></iframe> */}
            <img className="rounded-[12px] blur-[28px] hover:blur-none hover:scale-90" src="/assets/icon/SP_kakacawa.jpg" style={{width: 400}}></img>
            <h2 className="lg:text-xl text-md font-bold font-TaipeiBold text-white my-3">守護靈 Kakacawan</h2>
        </div>
        <div className="text-center">
            {/* <iframe src="https://giphy.com/embed/UIJ8vS4IONvseWqItl" width="340" height="340" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */}
            <img className="rounded-[12px] blur-[28px] hover:blur-none hover:scale-90" src="/assets/icon/SP_malataw.jpg" style={{width: 400}}></img>
            <h2 className="lg:text-xl text-md font-bold font-TaipeiBold text-white my-3">至高神 Malataw</h2>
        </div>
        <div className="text-center">
            {/* <iframe src="https://giphy.com/embed/v0EWbGXihieGKbjyYS" width="340" height="340" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */}
            <img className="rounded-[12px] blur-[28px] hover:blur-none hover:scale-90" src="/assets/icon/SP_afalong.jpg" style={{width: 400}}></img>
            <h2 className="lg:text-xl text-md font-bold font-TaipeiBold text-white my-3">守護圖騰 Afalong</h2>
        </div>
    </div>
    <div className="flex flex-col items-center pt-5 mx-1">
      <div className="grid grid-cols-2 gap-x-10">
        <a target="_blank" rel="noopener noreferrer" href="https://www.kkday.com/zh-tw/product/133056?qs=pangcah">
          <button type="button" className="fill w-full">BUY</button>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://opensea.io/collection/pangcahgenesis">
          <button type="button" className="filltwo w-full">OpenSea</button>
        </a>
      </div>
      <h5 className="text-white text-[10px] md:text-xs pt-10 tracking-tight text-left">
        購買後將分別於 9/15、9/25、10/5 進行空投。<br/>
        第一次開盲盒時間為 9/20，後續購買將可直接解盲。
      </h5>
    </div>
  </div>
</section>
);
}

export default NFT;