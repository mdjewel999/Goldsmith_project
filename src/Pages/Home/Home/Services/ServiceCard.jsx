// import React from 'react';

import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import { useState } from "react";

const ServiceCard = ({service}) => {
    const { _id, category_title, img, price, ratings} = service;
    const [rating, setRating] = useState(0)

    return (
        <div className="">
            
      <div className="card w-52 bg-base-100 shadow-md ">
        <figure>
          <img
          className="w-52 h-52"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category_title}</h2>
          <p>$ {price}</p>
          <div className="">
            <span>Rating: {ratings}</span>
             <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} />
            </div>
          <div className="card-actions justify-center ">
           <Link to={`/book/${_id}`}>
           <button className="btn btn-primary">View Details</button>
           </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ServiceCard;