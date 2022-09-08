import React from 'react';

type DividerProps = {
  width?: string;
};
const Divider = ({ width = 'w-64' }: DividerProps) => {
  return (
    <div className={`w-full mb-4`}>
      <div
        className={`h-1 mx-auto ${width} my-0 py-0 rounded-3xl mb-10`} style={{background: 'radial-gradient(circle, rgba(121,154,125,1) 80%, rgba(220,251,208,1) 100%)'}}
      ></div>
    </div>
  );
};

export default Divider;
