// import React from 'react';

const ServiceCard = ({service}) => {
    const { category_title, img, price} = service;

    return (
        <div>
            
      <div className="card w-52 bg-base-100 shadow-md">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category_title}</h2>
          <p>$ {price}</p>
          <div className="card-actions justify-center ">
            <button className="btn btn-primary">All SubCategory Toy</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ServiceCard;