import { NavLink } from "react-router-dom"; 
import useAuthContext from "../context/Authcontext"; 
import "../styles/Home.css"
import logo from "../images/Logo.png"
import frame from "../images/frame.png"
import "@fontsource/Poppins";
import { useState } from "react";  
import shop from "../images/panier.png" // Shopping cart icon
import Search from "../pages/Home/Search";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for managing dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative h-20 flex items-center justify-between bg-[#F5FFFF] px-4">
      {/* Logo Section */}
      <div className="flex px-16 items-center space-x-4 mr-36"> {/* Add margin-right here to create space */}
        <img src={logo} alt="Logo" className="h-12" />
        <img src={frame} alt="Frame" className="h-12" />
      </div>

      {/* Navbar Links */}
      <nav className="flex flex-grow justify-center items-center space-x-8">
        <NavLink
          className={({ isActive }) =>
            `relative group text-black text-lg font-semibold tracking-wide transition-colors h-fit ${isActive ? 'text-customRed' : ''}`
          }
          style={{ fontFamily: 'Poppins, sans-serif' }}
          to="/home"
        >
          Home
          <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-gray-300 transition-all group-hover:w-full"></span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `relative group text-black text-lg font-semibold tracking-wide transition-colors h-fit ${isActive ? 'text-customRed' : ''}`
          }
          style={{ fontFamily: 'Poppins, sans-serif' }}
          to="/books"
        >
          Books
          <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-gray-300 transition-all group-hover:w-full"></span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `relative group text-black text-lg font-semibold tracking-wide transition-colors h-fit ${isActive ? 'text-customRed' : ''}`
          }
          style={{ fontFamily: 'Poppins, sans-serif' }}
          to="/categories"
        >
          Categories
          <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-gray-300 transition-all group-hover:w-full"></span>
        </NavLink>

        {/* Account Link (Profile) */}
        {user && (
          <NavLink
            className={({ isActive }) =>
              `relative group text-black text-lg font-semibold tracking-wide transition-colors h-fit ${isActive ? 'text-customRed' : ''}`
            }
            style={{ fontFamily: 'Poppins, sans-serif' }}
            to="/account"
          >
            Account
            <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-gray-300 transition-all group-hover:w-full"></span>
          </NavLink>
        )}
      </nav>

      <div className="flex items-center space-x-4">

        {/* User Dropdown */}
        {user ? (
          <div className="relative flex items-center space-x-4">
            {/* Displaying Username instead of Avatar */}
            <span 
              className="cursor-pointer text-lg font-semibold"
              onClick={toggleDropdown} // Toggle the dropdown when clicked
            >
              {user.name}
            </span>

            {/* Dropdown Menu for Logout and Profile */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                <NavLink
                  to="/profile" // Navigate to the user's profile
                  className="w-full text-black text-lg font-semibold py-2 px-4 hover:bg-gray-100 text-left"
                >
                  Profile
                </NavLink>
                <button
                  onClick={logout} // Logout action
                  className="w-full text-black text-lg font-semibold py-2 px-4 hover:bg-gray-100 text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <NavLink
              className={({ isActive }) =>
                `relative group text-black text-lg font-semibold tracking-wide transition-colors h-fit ${isActive ? 'text-customRed' : ''}`
              }
              style={{ fontFamily: 'Poppins, sans-serif' }}
              to="/register"
            >
              Register
              <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-gray-300 transition-all group-hover:w-full"></span>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `relative group text-black text-lg font-semibold tracking-wide transition-colors h-fit ${isActive ? 'text-customRed' : ''}`
              }
              style={{ fontFamily: 'Poppins, sans-serif' }}
              to="/login"
            >
              Login
              <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-gray-300 transition-all group-hover:w-full"></span>
            </NavLink>
          </div>
        )}

        {/* Search Component */}
        <div className="mx-20">
          <Search />
        </div>

        {/* Shopping Cart Icon */}
        <NavLink className="px-6" to="/cart">
          <img src={shop} alt="Cart" className="h-8 w-8 text-black" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
