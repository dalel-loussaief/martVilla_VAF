// PropertyList.jsx
import React, { useState, useEffect } from "react";
import SingleProductCard from "../../common/page-componets/SingleProductCard";
import axios from "axios";


const PropertiesByCategory = ({ basis , categoryId  }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchPropertiesByCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/userAuth/properties-by-category/${categoryId}/`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchPropertiesByCategory();
  }, [categoryId]);


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

export default PropertiesByCategory;
