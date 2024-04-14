
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
import Payment from "../paymentPage/Payment";
import PaymentHistory from "../Dashboard/profiles/PaymentHistory";
import AdminDashboard from "../Dashboard/AdminDashboard/AdminDashboard";
import LocalView from "../LocalView/LocalView";

  
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
        path: 'localview',
        element: <LocalView></LocalView>
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
    {
      path: 'payment/:month',
      element: <UserPrivate><Payment></Payment></UserPrivate>
  },
  {
      path: 'payment-history',
      element: <MemberPrivate><PaymentHistory></PaymentHistory></MemberPrivate>
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
          path:'admin-dashboard',
          element:<AdminPrivate><AdminDashboard></AdminDashboard></AdminPrivate>

      },
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