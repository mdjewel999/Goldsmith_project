// import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AnimalToys = () => {

    const [categoryes, setCategoryes] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/carhouse")
        .then((res) => res.json())
        .then((data) => setCategoryes(data))
        .catch((error) => console.log(error));
    }, []);


    return (
    <>
    <h1 className="text-center mt-8 font-bold text-5xl">Animals Toys</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-8 mb-8">
      {categoryes.map((category) => (
        <div key={category._id}>
          <div className="card w-52 bg-base-100 shadow-md">
            <figure>
              <img className="w-52 h-52" src={category.img} alt="Category" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{category.category_title}</h2>
              <p>Rating: {category.ratings}</p>
              <p>$ {category.price}</p>
              {/* <p>{category.description}</p> */}
              <div className="card-actions justify-center ">
              <Link to={`/book/${category._id}`}>
           <button className="btn btn-primary">View Details</button>
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


// import { useEffect, useState } from "react";

// const AnimalToys = () => {
//   const [categoryes, setCategoryes] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(null);

//   useEffect(() => {
//     fetch("categoryes.json")
//       .then((res) => res.json())
//       .then((data) => setCategoryes(data))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleDetailsClick = (category) => {
//     setActiveCategory(category);
//   };

//   return (
//     <>
//       <h1 className="text-center mt-8 font-bold text-5xl">Categories</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-8 mb-8">
//         {categoryes.map((category) => (
//           <div key={category._id}>
//             <div className="card w-52 bg-base-100 shadow-md">
//               <figure>
//                 <img src={category.img} alt="Category" />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title">{category.category_title}</h2>
//                 <p>$ {category.price}</p>
//                 <div className="card-actions justify-center">
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleDetailsClick(category)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {activeCategory && (
//         <div className="details-container">
//           <h2>Category Details</h2>
//           <p>Category Title: {activeCategory.category_title}</p>
//           <p>Category description: {activeCategory.description}</p>
//           <p>Price: $ {activeCategory.price}</p>
//           {/* Render additional details as needed */}
//         </div>
//       )}
//     </>
//   );
// };

// export default AnimalToys;
