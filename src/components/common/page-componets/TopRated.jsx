import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';

const TopRated = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:8000/userAuth/top-rated-properties/');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching top rated properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Top Rated property</h1>
      {properties.map(property => (
        <div key={property.id} className="gap-3 mt-3 flex-align-center">
          <div>
            <img src={`http://localhost:8000/userAuth${property.image}`} alt={property.property_titre} className="object-cover w-40 h-40" />
          
          </div>
          <div>
            <ReactStars
              size={16}
              isHalf={true}
              activeColor="#ffd700"
              value={5}
              edit={false}
            />
            <h1 className="mt-2">{property.property_titre}</h1>
            <h1 className="mt-2 text-lg font-semibold">${property.property_prix}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRated;
