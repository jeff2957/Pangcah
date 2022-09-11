import React from "react";

import config from '../config/index.json';

const LoopSlide = () => {

  return (
    <div
			className="overflow-hidden overflow-x-hidden py-1 px-1 relative max-w-screen-full" style={{height: '50vw', width: '100vw'}}
		>
    <div className="flex animate relative ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex w-50 justify-around items-center">
					<a href="#"><img className="imgElem" src="https://res.cloudinary.com/projectartichoke/image/upload/v1662937316/SlideImg/slideImg1_tuzrgz.jpg" alt=""/></a>
					<a href=""><img className="imgElem" src="https://res.cloudinary.com/projectartichoke/image/upload/v1662937313/SlideImg/slideImg2_sria0a.jpg" alt="" /></a>
					<a href=""><img className="imgElem" src="https://res.cloudinary.com/projectartichoke/image/upload/v1662937316/SlideImg/slideImg6_h05wmc.jpg" alt="" /></a>
					<a href=""><img className="imgElem" src="https://res.cloudinary.com/projectartichoke/image/upload/v1662937317/SlideImg/slideImg7_poclpl.jpg" alt="" /></a>
					<a href=""><img className="imgElem" src="https://res.cloudinary.com/projectartichoke/image/upload/v1662937316/SlideImg/slideImg5_sgo0aa.jpg" alt="" /></a>

				</div>
				<div className="flex w-2 justify-around items-center">
          			<a href=""><img src="https://res.cloudinary.com/projectartichoke/image/upload/v1662937316/SlideImg/slideImg1_tuzrgz.jpg" alt="" /></a>
					<a href=""><img src="https://res.cloudinary.com/projectartichoke/image/upload/v1662937313/SlideImg/slideImg2_sria0a.jpg" alt="" /></a>
					<a href=""><img src="https://res.cloudinary.com/projectartichoke/image/upload/v1662937316/SlideImg/slideImg6_h05wmc.jpg" alt="" /></a>
					<a href=""><img src="https://res.cloudinary.com/projectartichoke/image/upload/v1662937317/SlideImg/slideImg7_poclpl.jpg" alt="" /></a>
					<a href=""><img src="https://res.cloudinary.com/projectartichoke/image/upload/v1662937316/SlideImg/slideImg5_sgo0aa.jpg" alt="" /></a>

				</div>
			</div>
      </div>
  );
}

export default LoopSlide;