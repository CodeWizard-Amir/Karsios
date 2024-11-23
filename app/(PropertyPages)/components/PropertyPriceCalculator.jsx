"use client";
import { useState } from "react";
import RentPriceCalculator from "./RentPriceCalculator";
import MortgagePriceCalculator from "./MortgagePriceCalculator";
const PropertyPriceCalculator = () => {
  const [pricecalculatorStatus, setPricecalculatorSatatus] = useState("Rent");
  return (
    <section>
      <div className='flex justify-between items-center'>
        <button
          onClick={() => setPricecalculatorSatatus("Rent")}
          className={`text-center w-1/3 mx-[2px] p-3 bg-gray-50 border-b border-gray-200  hover:bg-purple-50 hover:text-purple-500 hover:border-purple-500 duration-500 ${
            pricecalculatorStatus == "Rent" && "!border-purple-500"
          } ${pricecalculatorStatus == "Rent" && "!text-purple-500 "} ${
            pricecalculatorStatus == "Rent" && "!bg-purple-50"
          } `}
        >
          اجاره
        </button>
        <button
          onClick={() => setPricecalculatorSatatus("Mortgage")}
          className={`text-center w-1/3 mx-[2px] hover:bg-purple-50 hover:text-purple-500 hover:border-purple-500 duration-500 p-3 bg-gray-50 border-b border-gray-200 ${
            pricecalculatorStatus == "Mortgage" && "!border-purple-500"
          } ${pricecalculatorStatus == "Mortgage" && "!text-purple-500 "} ${
            pricecalculatorStatus == "Mortgage" && "!bg-purple-50"
          } `}
        >
          رهن
        </button>
        <button
          onClick={() => setPricecalculatorSatatus("Buy")}
          className={`text-center w-1/3 mx-[2px] hover:bg-purple-50 hover:text-purple-500 hover:border-purple-500 duration-500 p-3 bg-gray-50 border-b border-gray-200 ${
            pricecalculatorStatus == "Buy" && "!border-purple-500"
          } ${pricecalculatorStatus == "Buy" && "!text-purple-500 "} ${
            pricecalculatorStatus == "Buy" && "!bg-purple-50"
          } `}
        >
          خرید
        </button>
      </div>
      <div className='flex my-5 flex-wrap'>
        {pricecalculatorStatus == "Rent" && <RentPriceCalculator />}
        {pricecalculatorStatus == "Mortgage" && <MortgagePriceCalculator />}
        {pricecalculatorStatus == "Buy" && <RentPriceCalculator />}
      </div>
    </section>
  );
};

export default PropertyPriceCalculator;
