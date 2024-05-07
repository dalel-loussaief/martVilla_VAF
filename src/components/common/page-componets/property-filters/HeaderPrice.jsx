import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { FiFilter, FiGrid } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openFilterMenu } from "../../../../features/uiSlice";
import axios from "axios";
import PropertyByPrice from "../../../property/property-4/PropertyByPrice";

const HeaderPrice = ({ onPriceRangeChange }) => {
    const handlePriceRangeChange = (e) => {
      const priceRange = e.target.value;
      const [minPrice, maxPrice] = priceRange.split(' - ');
      onPriceRangeChange(parseFloat(minPrice.replace('$', '').replace(',', '')), parseFloat(maxPrice.replace('$', '').replace(',', '')));
    };
  const dispatch = useDispatch();

  return (
    <div className="flex-col gap-4 flex-center-between md:flex-row">
      <div className="w-full gap-4 flex-center-between p-2 ">
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
      </div>
    </div>
  );
};

export default HeaderPrice;
