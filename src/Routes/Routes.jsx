
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UserPrivate from "../privateRoutes/UserPrivate";
import LayoutDA from "../Dashboard/Layout/LayoutDA";
import AdminPrivate from "../privateRoutes/AdminPrivate";
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";
import MakeAnnounce from "../Dashboard/profiles/MakeAnnounce";


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>, 
        },
        {
          path: "/registration",
          element: <Register></Register>, 
        },
      
        
   
      ]
      },
      {   
        path:'/dashboard',
        element:<UserPrivate><LayoutDA></LayoutDA></UserPrivate>,
        children: [
          {
            path:'admin-profile',
            element:<AdminPrivate><AdminProfile></AdminProfile></AdminPrivate>

        },
        {
          path: 'make-announce',
          element: <AdminPrivate><MakeAnnounce></MakeAnnounce></AdminPrivate>
      }
        ]
    }

   
  ]);

export default router ;