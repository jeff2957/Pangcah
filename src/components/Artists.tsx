import React from "react";
import Popup from "reactjs-popup";

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
            <div className={`h-1 mx-auto bg-primary w-64 my-3 py-0 rounded-3xl`} style={{background: 'radial-gradient(circle, rgba(121,154,125,1) 80%, rgba(220,251,208,1) 100%)'}}></div>
          </div>
    <div className={`w-full mb-1`}>
      <div className={`h-1 mx-auto text-white w-64 opacity-25 my-0 py-0 rounded-t`}></div>
    </div>
    <h1 className="mx-auto mb-5 w-1/2 text-center font-TaipeiRegular font-bold text-xl">10/8（六）</h1>
    <div className="grid md:grid-cols-4 gap-5 grid-cols-2">
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/Ponay的原式大樂隊.png" />
          <h2 className="lg:text-xl text-md">Ponay的原式大樂隊</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/Ponay的原式大樂隊.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">Ponay的原式大樂隊</h4>
            <text className="px-5 font-TaipeiLight pb-5">來自臺東的Ponay，讀音「補奈」，東海岸阿美族人，來自臺東成功小港部落。Ponay在YouTube頻道推出一系列Cover（翻唱）影片，以原住民卡拉OK唱腔重新詮釋舒米恩、徐懷鈺、蕭亞軒、S.H.E等多首經典歌曲，已在網路上引發一陣陣原式強風。<br/>一臺電子琴、一支麥克風，Ponay用來自東海岸的海派氣口（khuì-kháu）、左轉右轉再迴轉的華麗轉音，以及埋藏無數彩蛋的驚奇編曲。自帶回音與超濃情感的百變詮釋，滿滿的原式 Cover，原力席捲了原唱與無數網友。</text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/詹森淮.png" />
          <h2 className="text-xl">詹森淮</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/詹森淮.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">詹森淮</h4>
            <text className="px-5 font-TaipeiLight pb-5">詹森淮音樂風格清新自然，演唱時多半以一把木吉他伴奏，曾在2013年與星巴克合作200場live演出的她，演出經驗相當豐富。專輯《我想再唱起歌》曾入圍2017第八屆金音獎/最佳民謠專輯獎。<br/>其歌詞創作的靈感來源，多半來自大自然，如大海、星辰、土地等，亦不時反映出世界與社會所帶給她的感觸，歌詞與歌聲深具感性知性，頗富哲學性，如華語樂壇的一處清流。
          </text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/台玖線樂團.png" />
          <h2 className="lg:text-xl text-md">台玖線樂團</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/台玖線樂團.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">台玖線樂團</h4>
            <text className="px-5 font-TaipeiLight pb-5">臺灣的東部，花蓮，是台玖線團員相遇的地方、發跡夢想、創作、表演的地方。當年單純想唱自己的歌為出發，嘗試不同音樂風格將生活中的感動、生命的互動用搖滾、藍調、原民風、輕音樂、和聲、福音音樂或族語創作等等呈現。<br/>以台玖線為團名的原因，就是以臺九線公路諧音為命名，對團員們來說，這是一條臺灣最美、最長的公路，就像人的一生一樣，有起有落，有高山有低谷，有海洋有平原。靠著那加給我們力量的，我們不忘初衷『捍衛夢想，拒絕放棄』。</text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/桑布伊.png" />
          <h2 className="lg:text-xl text-md">桑布伊</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/桑布伊.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">桑布伊</h4>
            <text className="px-5 font-TaipeiLight pb-5">一個在年輕的身體裡住著古老靈魂，來自臺東山與海交界處的一個卑南族古老部落，自幼學習卑南族文化的桑布伊，不僅學會族語和部落歌曲吟唱技巧，更將他對傳統文化的了解，藉由歌唱的方式傳承分享。<br/>桑布伊曾於2013年以專輯《dalan》榮獲第24屆金曲獎最佳原住民語歌手獎，2017年以《椏幹》榮獲第28屆金曲獎最佳原住民語歌手獎、最佳演唱錄音專輯獎，2021年以《得力量 pulu'em》榮獲第32屆金曲獎最佳原住民語歌手獎。</text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/山產.png" />
          <h2 className="lg:text-xl text-md">山產</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/山產.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">山產</h4>
            <text className="px-5 font-TaipeiLight pb-5">歌手介紹</text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/太巴塱蝸牛班.png" />
          <h2 className="lg:text-xl text-md">太巴塱蝸牛班</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/太巴塱蝸牛班.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">太巴塱蝸牛班</h4>
            <text className="px-5 font-TaipeiLight pb-5">歌手介紹</text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/Matzka.png" />
          <h2 className="lg:text-xl text-md">Matzka</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/Matzka.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">Matzka</h4>
            <text className="px-5 font-TaipeiLight pb-5">Matzka為台灣音樂創作人、製作人，其音樂風格以雷鬼為主，並混合爵士樂、民謠、重金屬、Rap和嘻哈等元素，來自台東的原住民，其曲風也帶有濃厚的原住民風格。<br />2011年以專輯《MATZKA》獲得第22屆金曲獎最佳音樂獎，2013年以專輯《089》獲得第24屆金曲獎最佳音樂獎，2016年以首張個人專輯《東南美》入圍第27屆金曲獎最佳國語男歌手、第七屆金音創作獎。</text>
          </div>
        </div>
      </Popup>
    </div>
    <h1 className="mx-auto mt-5 w-1/2 text-center font-TaipeiRegular font-bold text-xl">10/9（日）</h1>
    <div className="mt-5 grid md:grid-cols-4 gap-5 grid-cols-2">
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/雷擎.png" />
          <h2 className="lg:text-xl text-md">雷擎</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/雷擎.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">雷擎</h4>
            <text className="px-5 font-TaipeiLight pb-5">雷擎以鼓手身份闖蕩獨立音樂圈多年，時常搭配不同語言創作，混雜中、英、臺語的歌詞，加上自身是鼓手，自打自唱的澎湃舞臺能量，雷擎迅速的吸引了國內外樂迷的注意。也隨即受邀至西班牙巴賽隆納、日本東京、長野等地的音樂節舞臺，用迷人的舞臺魅力征服世界的觀眾。<br/>發行數張單曲及合作之後，雷擎決定走入自然中找尋心之所向，尋找各式純粹的聲音與靈感，在花蓮擔任駐村藝術家，與多位地方的藝術家交流、一路收集聲響及溫度。2021年，雷擎帶著滿滿的能量重回舞臺，帶來個人首張專輯，分享一路的溫度與感受，並創造更多真誠、有機的音樂。
</text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/大亨.png" />
          <h2 className="lg:text-xl text-md">大亨</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/大亨.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">大亨</h4>
            <text className="px-5 font-TaipeiLight pb-5">饒舌歌手、製作人，來自花蓮的阿美族人，嘗試以生活經驗結合部落文化、族語元素作為創作題材。2020年改編阿美族古謠共同演唱知名饒舌Cypher《我阿姨也癢》， 而後更推出《DACI‘喇季》、《Kaying 改硬》等歌曲以幽默詼諧的歌詞連結自身文化，透過自己的語言唱出屬於自己的故事，更藉由個人鮮明的唱腔與風格詮釋出獨特的饒舌音樂。2022年以《Maliepah 聚》入圍臺灣原創流行音樂大賽。</text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/保卜・巴督路.png" />
          <h2 className="lg:text-xl text-md">保卜・巴督路</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/保卜・巴督路.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">保卜・巴督路</h4>
            <text className="px-5 font-TaipeiLight pb-5">排灣族音樂家，以指彈吉他（finger style）演奏技巧聞名，以行雲流水的彈奏技巧融合豐富的音樂風格，是個擅於用吉他表達情感的音樂人。曾於2013年發行演奏專輯《我愛台坂》，入圍金曲獎演奏類最佳作曲人獎項。<br/>除個人音樂作品外，亦製作多項影視作品配樂，曾於2008年以《Ohaeva.哥哥》入圍第43屆電視金鐘獎音效獎，2010年以《看見天堂》入圍第45屆電視金鐘音效獎，2016年以電影《只要我長大》主題曲《愛不用說話》入圍第53屆金馬獎最佳原創電影歌曲。
</text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/簡燕春.png" />
          <h2 className="lg:text-xl text-md">簡燕春</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/簡燕春.png"/>
            <h4 className=" text-3xl font-TaipeiBold font-bold">簡燕春</h4>
            <text className="px-5 font-TaipeiLight pb-5">古謠之於簡燕春，是自小被母親拎在身邊的她，再自然不過的習得。作為部落祭歌團的一員，簡燕春的身體裡，將古謠內化為太巴塱部落歷史的索引。在每一首歌的吟唱中，不論是祭歌或是日常古謠，隨空氣逸散四處的歌聲，帶領著她回到過去生命的吉光片羽，口述著她與太巴塱部落的關係，也冀望聆聽者可以將故事忠實地傳遞給下個世代。<br/>抱著傳承傳統古調的期待，81歲的簡燕春發行了個人專輯《Ira…a micekor 靜靜地等待著》，並一舉獲得第33屆金曲獎最佳原住民歌手獎。</text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/阿爆.png" />
          <h2 className="lg:text-xl text-md">阿爆</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/阿爆.png"/>
            <h4 className=" text-xl font-bold font-TaipeiBold">阿爆</h4>
            <text className="px-5 font-TaipeiLight pb-5">歌手、詞曲創作人、主持人，臺東排灣族人，曾獲第15屆金曲獎最佳重唱組合獎，第28.31屆最佳原住民語專輯獎。2016年發行全排灣語專輯《vavayan·女人》，並於隔年獲得金曲獎最佳原住民語專輯獎，2020年10月3日以《kinakaian 母親的舌頭》二度獲頒金曲獎最佳原住民語專輯獎、年度專輯獎，並以〈Thank You 感謝〉拿下年度歌曲獎。<br/>阿爆致力將原住民族文化運用不同表演藝術形式呈現，以排灣古調結合流行電音，展現讓人耳目一新的音樂類型，使更多不同族群了解臺灣原住民族傳統價值的美好。</text>
          </div>
        </div>
      </Popup>
      <Popup trigger={
      <div className="bg-primary w-50 h-50 rounded hover:shadow-artistBg hover:scale-105 hover:font-bold hover:cursor-pointer">
        <div className="scale-90 text-center">
          <img className="rounded hover:scale-90 hover:rounded-2xl hover:shadow-md" src="/assets/artists/太巴塱年齡階層.png" />
          <h2 className="lg:text-xl text-md">太巴塱年齡階層</h2>
        </div>
      </div>
      } modal>
        <div className="popup-content container mx-auto bg-gray-100 rounded-3xl bg-opacity-20 backdrop-blur-sm shadow-sm" style={{maxWidth: "80vw", minWidth: "50vw", width: 'auto', minHeight: '50vh'}}>
          <div className="flex flex-col space-y-5 items-center">
            <img className="w-2/3 md:w-1/3 lg:w-1/3 mt-5" src="/assets/artists/太巴塱年齡階層.png"/>
            <h4 className=" text-3xl  font-TaipeiBold font-bold">太巴塱年齡階層</h4>
            <text className="px-5 font-TaipeiLight pb-5">生活有時序，季節有更迭，年齡有排序。在不同的年齡階層裡，合作分工著維持一個部落（國家）的正常運作，每一個階層就像充滿生命力的齒輪，彼此相連緊扣運轉，缺一不可。</text>
          </div>
        </div>
      </Popup>
    </div>
  </div>
</section>
);
}

export default Artists;