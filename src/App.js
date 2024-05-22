import React, { useState } from "react";

function App() {
  const [price, setPrice] = useState(""); // state for price input
  const [productName, setProductName] = useState(""); // state for price input
  const [quantity, setQuantity] = useState(""); // state for quantity input
  const [pricePerKg, setPricePerKg] = useState(0); // state for price per kilogram

  const calculatePricePerKg = () => {
    const costPerGram = price / quantity; // calculating cost per gram
    const pricePerKg = costPerGram * 1000; // converting cost per gram to cost per kilogram
    setPricePerKg(pricePerKg.toFixed(2)); // rounding to 2 decimal places
  };

  return (
    <div className=" border border-black p-10 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 ">
      <div className="bg-white sm:p-8 p-4 text-xs sm:text-base rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl mb-4 text-center font-semibold">
          Price Calculator
        </h2>
        <label className=" mb-4 flex flex-col">
          Product Name (optional):
          <input
            className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-blue-400"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label className=" mb-4 flex flex-col">
          How much did You spend (in rupees):
          <input
            className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-blue-400"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className=" mb-4 flex flex-col">
          How much Quantity did you get (in grams):
          <input
            className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-blue-400"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-500 mx-auto flex sm:mx-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={calculatePricePerKg}
        >
          Calculate
        </button>
        <p className="mt-4">
          Total Price of{" "}
          <span className=" font-bold ">
            {productName.toUpperCase()}
          </span>{" "}
          per kilogram: <span className=" font-bold ">₹ {pricePerKg}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
