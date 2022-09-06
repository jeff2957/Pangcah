import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`py-8 mx-3 rounded-full`} style={{background:'radial-gradient(circle, rgba(102,119,91,1) 2%, rgba(60,81,72,1) 61%, rgba(60,81,72,0.8323704481792717) 81%, rgba(24,39,39,0.1) 96%)'}} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-gray-200' : 'text-gray-200'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-200 font-bold leading-none mb-3 font-TaipeiRegular`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-100 text-opacity-80  font-TaipeiLight text-md`}>{firstItem?.description}</p>
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
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="rounded-full drop-shadow-md"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-200 font-bold leading-none mb-3 font-TaipeiRegular`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-100 text-opacity-80 mb-8 font-TaipeiLight text-md`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
