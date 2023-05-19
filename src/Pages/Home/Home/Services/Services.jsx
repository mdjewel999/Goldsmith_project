// import React from 'react';

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toyService")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <h1 className="text-center mt-8 font-bold text-5xl">All Categorys</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-1 mt-8 mb-8">
        {services.map((service) => (
          <ServiceCard 
          key={service._id} 
          service={service}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default Services;
