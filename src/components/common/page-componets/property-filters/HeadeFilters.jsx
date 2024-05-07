// HeaderFilters.jsx
import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { FiFilter, FiGrid } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openFilterMenu } from "../../../../features/uiSlice";
import axios from "axios";
import PropertyByPrice from "../../../property/property-4/PropertyByPrice";

const HeaderFilters = ({basis, layout, setLayout }) => {
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const handlePriceRangeChange = async (e) => {
    const priceRange = e.target.value;
    const [minPriceStr, maxPriceStr] = priceRange.split(' - ');
    const minPrice = parseFloat(minPriceStr.replace('$', '').replace(',', ''));
    const maxPrice = parseFloat(maxPriceStr.replace('$', '').replace(',', ''));
    
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };

  return (
    <div className="flex-col gap-4 flex-center-between md:flex-row">
      <div className="w-full flex-center-between">
        <div className="gap-2 flex-align-center">
          <div
            className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 hover:bg-slate-200 sm:cursor-pointer transition-a dark:bg-card-dark  ${
              layout === "grid" && "!bg-primary text-white"
            }`}
            onClick={() => setLayout("grid")}
          >
            <FiGrid />
          </div>
          <div
            className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark ${
              layout === "list" && "!bg-primary text-white"
            }`}
            onClick={() => setLayout("list")}
          >
            <FaList />
          </div>
          <div
            className="grid w-10 h-10 md:hidden rounded-xl place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark"
            onClick={() => dispatch(openFilterMenu())}
          >
            <FiFilter />
          </div>
        </div>
      </div>
      {/* <div className="w-full gap-4 flex-center-between p-2 ">
        <select
          name=""
          id=""
          className="w-full px-3 py-2 bg-white border outline-none dark:border-dark dark:bg-main-dark"
          onChange={handlePriceRangeChange}
        >
          <option value="">Price Range</option>
          <option value="$40,000 - $80,000">$40,000 - $80,000</option>
          <option value="$80,000 - $120,000">$80,000 - $120,000</option>
        </select>
        <PropertyByPrice basis={basis} minPrice={minPrice} maxPrice={maxPrice} />
      </div> */}
    </div>
  );
};

export default HeaderFilters;
