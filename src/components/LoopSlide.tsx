import React from "react";

import config from '../config/index.json';

const LoopSlide = () => {

  return (
    <div
			className="overflow-hidden overflow-x-hidden py-20 px-1 relative max-w-screen-full" style={{height: '50vw', width: '100vw'}}
		>
    <div className="flex animate relative ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex w-50 justify-around items-center">
					<a href="#"><img className="imgElem" src="/assets/images/slideImg1.jpg" alt=""/></a>
					<a href=""><img className="imgElem" src="/assets/images/slideImg2.jpg" alt="" /></a>
					<a href=""><img className="imgElem" src="/assets/images/slideImg6.jpg" alt="" /></a>
					<a href=""><img className="imgElem" src="/assets/images/slideImg7.jpg" alt="" /></a>
					<a href=""><img className="imgElem" src="/assets/images/slideImg5.jpg" alt="" /></a>

				</div>
				<div className="flex w-2 justify-around items-center">
          <a href="#"><img src="/assets/images/slideImg1.jpg" alt="" /></a>
					<a href=""><img src="/assets/images/slideImg2.jpg" alt="" /></a>
					<a href=""><img src="/assets/images/slideImg6.jpg" alt="" /></a>
					<a href=""><img src="/assets/images/slideImg7.jpg" alt="" /></a>
					<a href=""><img src="/assets/images/slideImg5.jpg" alt="" /></a>

				</div>
			</div>
      </div>
  );
}

export default LoopSlide;