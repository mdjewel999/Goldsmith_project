import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
// import Categoryes from "../Pages/Category/Categoryes";
import AnimalToys from "../Pages/Category/AnimalToys";
import Qustion from "../Pages/Qustion/Qustion";
import BookService from "../Pages/BookService/BookService";
import ToyBookings from "../Pages/BookingsToy/ToyBookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
       {
        path:'/animaltoys',
        element: <AnimalToys></AnimalToys>,
        },
        {
        path:'/qustion',
        element:<Qustion></Qustion>
        },
        
        {
          path:'book/:id',
          element:<BookService></BookService>,
          loader: ({params}) => fetch(`http://localhost:5000/carhouse/${params.id}`)
        },
        {
          path:'mytoys',
          element:<ToyBookings></ToyBookings>,
          // loader: ({params}) => fetch(`http://localhost:5000/carhouse/${params.id}`)

        }
        
      ]
    },
  ]);


  export default router;