import React, { useState, useEffect } from "react";
import SingleProductCard from "../../common/page-componets/SingleProductCard";
import axios from "axios";

const PropertyByPrice = ({ basis, minPrice, maxPrice }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Définir une fonction asynchrone pour effectuer la requête
    const fetchPropertiesByPrice = async () => {
      try {
        // Effectuer la requête GET à votre API avec les paramètres minPrice et maxPrice
        const response = await axios.get(`http://localhost:8000/userAuth/properties-by-price-range/?min_price=${minPrice}&max_price=${maxPrice}`);
        // Mettre à jour l'état des propriétés avec les données de la réponse
        setProperties(response.data.properties);
      } catch (error) {
        console.error('Error fetching properties by price:', error);
      }
    };

    // Vérifier si minPrice et maxPrice sont définis avant d'appeler la fonction fetchPropertiesByPrice
    if (minPrice !== null && maxPrice !== null) {
      fetchPropertiesByPrice();
    }
  }, [minPrice, maxPrice]); // Effectuer la requête lorsque minPrice ou maxPrice changent

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

export default PropertyByPrice;
