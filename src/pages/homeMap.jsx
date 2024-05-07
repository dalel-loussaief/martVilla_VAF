import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from "./Map/components/Header/Header";
import List from "./Map/components/List/List";
import Map1 from "./Map1";
import Navbar from '../components/common/Navbar';
import { getPlacesData} from './Map/components/API/PropertyAPI';

const Home =() => {
    const [places, setPlaces] = useState([]);
    const [Coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [type, setType] = useState('villa');
    const [isLoading, setIsLoading] = useState(false);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
    const [rating, setRating] = useState('');
    useEffect(() => {
navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
setCoordinates({lat:latitude,lng:longitude})
})
       })
            
    useEffect(() => {
   console.log(Coordinates,bounds);
   getPlacesData(bounds,bounds)
   .then((data)=>{
    console.log(data);

    setPlaces(data);
   })
        },
       []);
   
    return (
        <>
        <CssBaseline/>
        <Navbar/>
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <List places={places}/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Map1/>
            </Grid>
        </Grid>
        </>
    )
};
export default Home;