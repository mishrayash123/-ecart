import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Home() {


  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/product-offers',
    params: {
      asin: 'B0BXV2XKVF',
      country: 'US',
      limit: '100'
    },
    headers: {
      'X-RapidAPI-Key': 'e8d49997e3mshc19c5745cb99d78p1bb5a1jsnedfa2627415c',
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    
    fetchData();
  }, []);
 

    return (
      <div>
      <h1 className="text-red-800 font-bold text-center text-2xl mt-56">Welcome to E-Cart</h1>
      </div>
    );
  }
  
  export default Home;
  