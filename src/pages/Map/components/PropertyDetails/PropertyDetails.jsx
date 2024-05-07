import React from 'react';
import SingleProductCard from "../../../../components/common/page-componets/SingleProductCard";

const PropertyDetails = ({ properties, categoryId }) => {
  const filteredProperties = properties.filter(property => property.category === parseInt(categoryId));

  return (
    <div>
      <ul>
        {filteredProperties.map((property) => (
          <SingleProductCard key={property.id} {...property} />
        ))}
      </ul>
    </div>
  );
};

export default PropertyDetails;