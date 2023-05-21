// import React from 'react';

import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const { _id, category_title, img, price, ratings} = service;

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
          <p>Rating: {ratings}</p>
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