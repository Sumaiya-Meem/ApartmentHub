
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UserPrivate from "../privateRoutes/UserPrivate";
import LayoutDA from "../Dashboard/Layout/LayoutDA";
import AdminPrivate from "../privateRoutes/AdminPrivate";
import MemberPrivate from "../privateRoutes/MemberPrivate";
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";
import MakeAnnounce from "../Dashboard/profiles/MakeAnnounce";
import ManegeMember from "../Dashboard/profiles/ManegeMember";
import Agreement from "../Dashboard/profiles/Agreement";
import ManageCoupon from "../Dashboard/profiles/ManageCoupon";
import Profile from "../Dashboard/profiles/Profile";
import Announcement from "../Dashboard/profiles/Announcement";
import Apartment from "../apartment/Apartment";
import MemberProfile from "../Dashboard/profiles/MemberProfile";
import PaymentForm from "../paymentPage/PaymentForm";



  
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
          path: 'apartment',
          element: <Apartment></Apartment>
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
        //member route
        {
          path:'member-profile',
          element: <MemberPrivate><MemberProfile></MemberProfile></MemberPrivate>,
          
      },
      {
        path: 'make-payment',
        element: <UserPrivate><PaymentForm></PaymentForm></UserPrivate>
    },
        // user route
        {     
          path:'user-profile',
          element: <UserPrivate><Profile></Profile></UserPrivate>, 
      },
      {
        path:'/dashboard/',
        element: <UserPrivate><Announcement></Announcement></UserPrivate>,
        
    },
       
        

        // admin route
        {
          path: 'make-announce',
          element: <AdminPrivate><MakeAnnounce></MakeAnnounce></AdminPrivate>
      },
      {
        path: 'manage-member',
        element: <AdminPrivate><ManegeMember></ManegeMember></AdminPrivate>
    },
    {
      path: 'agreement',
      element: <AdminPrivate><Agreement></Agreement></AdminPrivate>
  }, 
  {
    path: 'manage-coupon',
    element: <AdminPrivate><ManageCoupon></ManageCoupon></AdminPrivate>
},
        ]
    }

   
  ]);

export default router ;