// import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
// ..
AOS.init();

const AnimalToys = () => {
  const [categoryes, setCategoryes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/carhouse")
      .then((res) => res.json())
      .then((data) => setCategoryes(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <h1 className="text-center mt-8 font-bold text-5xl">Cars Toys</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-8 mb-8"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        {categoryes.map((category) => (
          <div key={category._id}>
            <div className="card w-52 bg-base-100 shadow-md">
              <figure>
                <img className="w-52 h-52" src={category.img} alt="Category" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category.category_title}</h2>
                <p>Rating: {category.ratings} <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" /></p>
                <p>$ {category.price}</p>
                {/* <p>{category.description}</p> */}
                <div className="card-actions justify-center ">
                  <Link to={`/book/${category._id}`}>
                    <button className="btn btn-primary">Add To Toy</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimalToys;
