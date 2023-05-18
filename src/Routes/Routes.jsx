import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
// import Categoryes from "../Pages/Category/Categoryes";
import AnimalToys from "../Pages/Category/AnimalToys";
import Qustion from "../Pages/Qustion/Qustion";

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
        // {
        //   path:'/',
        //   element:<Categoryes></Categoryes>,
        //   children:[
        //     {
        //       path:'/animaltoys',
        //       element: <AnimalToys></AnimalToys>
        //     }
        //   ]
        // },
             {
                path:'/animaltoys',
                element: <AnimalToys></AnimalToys>
              },
              {
                path:'/qustion',
                element:<Qustion></Qustion>
              }
        
      ]
    },
  ]);


  export default router;