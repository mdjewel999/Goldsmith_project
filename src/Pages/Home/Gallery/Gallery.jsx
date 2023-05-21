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
      <h1 className="text-center mt-8 text-5xl font-bold">Toy Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-8 mb-8"
        
        >
        <div className="card w-52 bg-base-100 shadow-md" 
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200"
        >
          <img
            className="w-52 h-52"
            src="https://m.media-amazon.com/images/I/61cVpXtoQiL._AC_UL320_.jpg"
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
            src="https://m.media-amazon.com/images/I/61C6qc+nmxL._AC_UL320_.jpg"
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
            src="https://m.media-amazon.com/images/I/71hjjVXYWLL._AC_UL320_.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md"data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://m.media-amazon.com/images/I/71wV0evE4OL._AC_UL320_.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://m.media-amazon.com/images/I/61YV2eoLplS._AC_UL320_.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://m.media-amazon.com/images/I/51KFL8Fj04L._AC_UL320_.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://m.media-amazon.com/images/I/51531iAlpnL._AC_UL320_.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://m.media-amazon.com/images/I/81clMrSkSYL._AC_UL320_.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://m.media-amazon.com/images/I/413pZ1P2JVL._AC_UL320_.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://m.media-amazon.com/images/I/61-2MRqOHgL._AC_UL320_.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://m.media-amazon.com/images/I/71j7T2HfK6L._AC_UL320_.jpg"
            alt="Shoes"
          />
        </div>
        <div className="card w-52 bg-base-100 shadow-md" data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="200">
          <img
            className="w-52 h-52"
            src="https://m.media-amazon.com/images/I/71MkkOsVu6L._AC_UL320_.jpg"
            alt="Shoes"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
