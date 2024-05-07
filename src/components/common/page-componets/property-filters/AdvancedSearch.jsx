import React, { useState, useEffect } from "react";
import axios from "axios";

const AdvancedSearch = ({ onCategoryChange, onServiceChange }) => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/userAuth/Show/');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/userAuth/service-list/');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchCategories();
    fetchServices();
  }, []);

  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  const handleServiceChange = (e) => {
    onServiceChange(e.target.value);
  };

  return (
    <div className="p-3 border dark:border-dark">
      <h1 className="font-semibold">Advanced Search</h1>
      <div className="mt-3">
        <select name="" id="" className="filter" onChange={handleCategoryChange}>
          <option value="">Categories</option>
          {categories.map(category => (
            <option key={category.category_id} value={category.category_id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <select name="" id="" className="filter" onChange={handleServiceChange}>
          <option value="">services</option>
          {services.map(service => (
            <option key={service.id_service} value={service.id_service}>{service.type_service}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AdvancedSearch;
