import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleProductCard from "../../common/page-componets/SingleProductCard";

const PropertyAdvancedSearch = ({ basis, categoryId, serviceId }) => {
  const [properties, setProperties] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/userAuth/properties-by-category-and-service/${categoryId}/${serviceId}/`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    if (categoryId && serviceId) {
      fetchProperties();
    }
  }, [categoryId, serviceId]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center mb-7"></div>
      <div className="flex flex-wrap gap-4">
        {properties.map((property) => (
          <SingleProductCard key={property.id} {...property} basis={basis} />
        ))}
      </div>
    </div>
  );
};

export default PropertyAdvancedSearch;
