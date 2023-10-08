// import React from 'react';
// import img1 from '../../../assets/images/services/1.jpg'
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

AOS.init();

const Gallery = () => {

    useEffect(() => {
        AOS.init({
          duration: 8000,
          once: false, 
        });
      }, []);

  return (
    <div>
      <h1 className="text-center mt-8 text-5xl font-bold">Jewelrys Gallerys</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-8 mb-8"
        
        >
        <div className="card w-52 bg-base-100 shadow-md" 
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200"
        >
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/XVWsK2w/4.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" 
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200"
        >
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/sKQ1wKt/9.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" 
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200"
        >
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/XkSDnNq/8.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md"data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/dWnPxN0/4.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/ZX2tmNj/6.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/hM7zpDW/8.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/7bqjLRB/2.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/g7G3xr6/1.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/DCXTXsz/7.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/M9Brqvy/5.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/n11sJ7N/3.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://i.ibb.co/0hQg0LN/7.jpg"
            alt="Shoes"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
