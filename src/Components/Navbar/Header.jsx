import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { CiLogin } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useContext, useState, useEffect } from "react";
import { ContextProvider } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import useUserRole from "../../Hooks/useUserRole";
import "./header.css";

const Header = () => {
  const { logOutUser, user } = useContext(ContextProvider);
  const { userRole } = useUserRole();
  const role = userRole?.role;

  const [changeBg, setChangeBg] = useState(false);

  const handleLogout = () => {
    logOutUser().then(() => {
      toast.success("sign out successfully");
    });
  };

  const navItem = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#bc0024] font-bold menu" : "text-black"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/apartment"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#bc0024] font-bold menu"
            : changeBg
            ? "text-black"
            : "text-white"
        }
      >
        Apartment
      </NavLink>
      <NavLink
        to="/localview"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#bc0024] font-bold menu" : changeBg
          ? "text-black"
          : "text-white"
        }
      >
        About Us
      </NavLink>
      {user && role && (
        <NavLink
          to={`/dashboard/${
            role === "admin" ? "admin-dashboard" : role === "member" ? "member-profile" : "user-profile"
          }`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#bc0024] font-bold menu"  : changeBg ? "text-black" : "text-white"
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 56) {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 -mx-[2px]">
      <Navbar fluid rounded className={changeBg ? "navbar " : "navbar active"}>
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-10" alt="Logo" />
          <span className={`text-xl font-bold ${changeBg ? 'text-black' : 'text-white'} italic font-serif`}>
            <span className={changeBg ? 'text-[#bc0024]':'text-white'} >A</span>partment
            <span className={changeBg ? 'text-[#bc0024]':'text-white'} >H</span>ub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">{user?.email}</span>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Button color="" className="" onClick={handleLogout}>
                    <span className="mr-2 text-xl">
                      <IoIosLogOut />
                    </span>
                    LogOut
                  </Button>
                </Dropdown.Item>
              </Dropdown>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-800" : "text-black"
              }
            >
              <div className="flex items-center gap-1 font-semibold">
                <CiLogin className="text-xl" />
                <p className="text-xl">Login</p>
              </div>
            </NavLink>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{navItem}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
