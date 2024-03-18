import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import {  Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { CiLogin } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from "react";
import {  ContextProvider } from "../../Context/AuthProvider";

// import "./header.css"
const Header = () => {
  const { user, logOut } = useContext(ContextProvider);
  

  const handleLogout = () => {
    console.log("logout");
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navItem = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#bc0024] font-bold menu   " : "text-black"
        }
      >
        Home
      </NavLink>
     
     
    </>
  );

  return (
    <div>
      <Navbar fluid rounded className=" z-10 bg-opacity-10  bg-transparent  w-full shadow-lg">
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-10 " alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-bold text-[#000] italic font-serif">
            <span className="text-[#bc0024]">A</span>partment<span className="text-[#bc0024]">H</span>ub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? 
            <>
            <Dropdown
            arrowIcon={false}
            inline
            label={
                <Avatar alt="User settings" img={user?.photoURL} rounded />
            }
        >
            <Dropdown.Header>
                <span className="block text-sm">{ user?.displayName}</span>
                <span className="block truncate text-sm font-medium">{user?.email}</span>
            </Dropdown.Header>
            <Dropdown.Item>
                <Link to="/dashboard">Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
            <Button color="" className=''  onClick={handleLogout}>
            <span className='mr-2 text-xl'><IoIosLogOut></IoIosLogOut></span> LogOut
        </Button>
            </Dropdown.Item>
        </Dropdown> 
            </>
           : (
            <>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#348f54]"
                    : "text-black"
                }
              >
                <div className="flex items-center gap-1 font-semibold">
                  <CiLogin className="text-xl"></CiLogin><p className="text-xl">Login</p>
                </div>
              </NavLink>
            </>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{navItem}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
