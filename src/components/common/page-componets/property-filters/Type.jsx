// Type.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Type = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8000/userAuth/Show/");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Property Type</h1>
      {categories.map((category) => (
        <div key={category.category_id} className="mt-3 filter flex-center-between">
          <div className="input-radio">
            <input
              type="radio"
              name="type"
              id={category.name}
              onChange={() => onCategoryChange(category.category_id)}
            />
            <label htmlFor={category.name} className="capitalize">
              {category.name}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Type;
