import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles.js';
import PropertyDetails from '../PropertyDetails/PropertyDetails.jsx';

const List = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get("http://localhost:8000/userAuth/Show/");
        setCategories(categoriesResponse.data);

        // Fetch all properties initially
        const propertiesResponse = await axios.get('http://localhost:8000/userAuth/properties/');
        setProperties(propertiesResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div className={classes.container}>
      <Typography variant="h6">Properties around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <MenuItem key={category.category_id} value={category.category_id}>{category.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        <PropertyDetails properties={properties} categoryId={selectedCategory} />
      </Grid>
    </div>
  );
};

export default List;