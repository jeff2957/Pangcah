import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`py-8 mx-3 rounded-full whitespace-pre-line`} style={{background:'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9346332282913166) 80%)'}} id="product">
      <div className={`container max-w-5xl mx-auto m-8 md:p-10`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center `}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-gray-900' : 'text-gray-900'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-5`}>
            <h3
              className={`text-3xl text-gray-900 font-bold leading-none mb-3 font-TaipeiRegular`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600 font-TaipeiLight text-md`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="rounded-full drop-shadow-md"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6 md:p-10`}>
            <img
              className="rounded-full drop-shadow-md"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-5 lg:mb-20 mb-0`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-900 font-bold leading-none mb-3 font-TaipeiRegular`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8 font-TaipeiLight text-md`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
