import PropertiesByCategory from "../components/property/property-4/PropertiesByCategory";
import React, { useState } from "react";
import axios from "axios";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  AdvancedSearch,
  CTA,
  HeadeFilters,
  Pagination,
  PriceRange,
  TopRated,
  PropertyFullWidth,
  Type,
} from "../components/common/page-componets";
import { closeFilterMenu, uiStore } from "../features/uiSlice";
import { PropertyList } from "../components/property";
import { property } from "../data/dummyData";
import PropertyAdvancedSearch from "../components/property/property-4/PropertyAdvancedSearch";
import PropertyByPrice from "../components/property/property-4/PropertyByPrice";
import HeaderPrice from "../components/common/page-componets/property-filters/HeaderPrice";

const PropertySix = ({basis}) => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const [showPropertyByPrice, setShowPropertyByPrice] = useState(false);

  const dispatch = useDispatch();
  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };

  const [layout, setLayout] = useState("list");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState("");

  const [properties, setProperties] = useState([]);


  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const handleServiceChange = (serviceId) => {
    setSelectedServiceId(serviceId);
  };

  const handleSearchResults = (searchProperties) => {
    setProperties(searchProperties);
    setSelectedCategoryId(null); // Clear selected category when new search results are displayed
  };

  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const handlePriceRangeChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };
  

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <HeaderPrice onPriceRangeChange={handlePriceRangeChange} />
      <br/>
      <HeadeFilters layout={layout} setLayout={setLayout} />
      <div className="grid mt-5 md:grid-cols-4 gap-x-14">
      <div className="top-0 mt-5 md:col-span-3 md:mt-0 h-fit md:sticky">
      {minPrice !== null && maxPrice !== null  ? ((
<PropertyByPrice basis={basis} minPrice={minPrice} maxPrice={maxPrice} />
      )      ) : selectedCategoryId && selectedServiceId ? ( 
            <PropertyAdvancedSearch categoryId={selectedCategoryId} serviceId={selectedServiceId} />
          ) : selectedCategoryId ? (
            <PropertiesByCategory categoryId={selectedCategoryId} />
          ) : layout === "grid" ? (
            <PropertyList />
  ) : (
    <PropertyFullWidth />
  )}
  <Pagination itemsPerPage={4} pageData={property} /> 
</div>

        <div className="top-0 row-start-3  md:col-span-1 md:row-start-auto h-fit md:sticky ">
          <div
            className={`filter-modal ${isFilterMenuOpen && "open"}`}
            onClick={handleCloseFiltermenu}
          >
            <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
              <div className="border-b flex-center-between dark:border-dark md:hidden">
                <div
                  className="icon-box md:hidden"
                  onClick={() => dispatch(closeFilterMenu())}
                >
                  <FiDelete />
                </div>
                <p className="uppercase">Filters</p>
              </div>
              <AdvancedSearch onCategoryChange={handleCategoryChange} onServiceChange={handleServiceChange} />
              <div>
                <Type onCategoryChange={handleCategoryChange} />
              </div>
              <TopRated />
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySix;
