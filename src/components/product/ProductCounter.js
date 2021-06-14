import React from "react";

const ProductCounter = ({ decrement, increment, onQty, qty }) => {
  return (
    <div className="flex items-center mt-1">
      <button
        className="border border-gray-300 h-6 w-5 inline-block leading-6 bg-gray-200 text-gray-500 text-center font-bold font-roboto cursor-pointer focus:bg-gray-300 border-r-0 rounded-l-md focus:outline-none"
        onClick={decrement}
        disabled={qty === 1}>
        -
      </button>
      <input
        className="w-12 px-3 align-top text-center outline-none border border-gray-300 h-6 text-gray-500 text-sm"
        type="text"
        value={qty}
        onChange={(e) => onQty(e.target.value)}
      />
      <button
        className="border border-gray-300 h-6 w-5 inline-block leading-6 bg-gray-200 text-gray-500 text-center font-bold font-roboto cursor-pointer focus:bg-gray-300 border-l-0 rounded-r-md focus:outline-none"
        onClick={increment}>
        +
      </button>
    </div>
  );
};

export default ProductCounter;
