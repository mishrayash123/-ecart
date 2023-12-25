import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import '../css/product.css'

interface Products {
  price: number;
  id: number;
  image: string;
  title : string; 
}

function Product3() {
  const [products, setproducts] = useState<Products[]>([]);


  const options = {
    method: 'GET',
  url: `https://fakestoreapi.com/products/category/women's clothing`,
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setproducts(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    
    fetchData();
  }, []);
 

    return (
      <div className='my-3'>
        <h2 className="font-bold text-center text-2xl">Women's clothing</h2>
       <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 pt-3 w-[90%]" role="group">
         {
          products.map(products =>(
            <a href='/product'>
            <Card className="cardwid shadow-lg m-2" placeholder="k">
      <CardHeader floated={false} color="blue-gray" placeholder="k">
        <img
          src={products.image}
          alt="ui/ux review check"
          className='rounded-lg wid'
        />
      </CardHeader>
      <CardBody placeholder="k">
        <div className="mb-3 ">
          <Typography variant="h6" color="blue-gray" className="font-medium" placeholder="k">
           {products.title.slice(0,20)}
          </Typography>
        </div>
        <div className='flex items-center justify-between'>
        <Typography color="gray" className=' text-black font-bold' placeholder="k">
          {products.price} &#8377;
        </Typography>
        <Typography
          placeholder="k"
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            4.5
          </Typography>
        </div>
        {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        </div> */}
      </CardBody>
    </Card>
    </a>
          ))
         }
     </div>
      </div>
    );
  }
  
  export default Product3;
  