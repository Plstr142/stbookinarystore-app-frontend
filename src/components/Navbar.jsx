import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { href, Link } from "react-router-dom";
// import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoSearchOutline, IoTimeSharp } from "react-icons/io5";
// import { HiOutlineUser } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
// import { HiOutlineHeart } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import avatarImg from "../assets/avatar_user.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
// import { NavLink } from "react-router-dom";
// import { routeDefs } from "../routers/showRoutes";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems)

  // console.log(isDropdownOpen)


  const {currentUser, logout} = useAuth()

  const handleLogOut = () => {
    logout()
  }


  // false = disable profile (profile user dropdown)
  // const currentUser = false;

  return (
    <header className="max-w-screen px-4 sm:px-6 lg:px-8 py-6 bg-[#bcc4a1]">
      {/* navbar + icon + label */}
      {/* <nav className="flex flex-col gap-2 p-4">
        {routeDefs.map((r) => (
          <NavLink>
            key={r.path}
            to={r.path}
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-gray-800"
            }
          >
            {r.icon} {r.label}
          </NavLink>
        ))}
      </nav> */}

      <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        {/* LEFT: LOGO + SEARCH */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <span className="text-xl sm:text-2xl font-bold whitespace-nowrap">
            {/* <a href="/">
              <link
                rel="icon"
                type="image/svg+xml"
                href="/book-svgrepo-com.svg"
              />
            </a> */}

            <Link href="/" className="flex items-center">
              <img src="/logoipsum-custom-logo.svg" alt="Logo" className="w-full h-6" />
            </Link>

          </span>

          <div className="relative w-full sm:w-72">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none" />
            <input
              type="text"
              maxLength={100}
              placeholder="Search here for any book"
              className="pl-10 pr-4 py-1.5 w-full text-sm sm:text-base rounded-md border-[#808570] shadow-lg truncate overflow-hidden whitespace-nowrap focus:outline-none"
            />
          </div>
        </div>

        {/* RIGHT: ICONS + DROPDOWN + TOGGLE */}
        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Avatar + Dropdown */}
          <div className="relative">
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt="avatar"
                    className="w-7 h-7 rounded-full ring-2 ring-black dark:ring-white cursor-pointer"
                  />
                </button>
                {isDropdownOpen && (
                  // absolute xs:right-2 md:right-1 mt-2 w-48 bg-white shadow-lg rounded-md z-40  
                  <div className="absolute lg:block md:hidden mt-4 bg-black dark:bg-white shadow-md rounded-lg p-4 w-50 md:right-2 xs:right-1 z-45">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            // block px-4 py-2 text-sm hover:bg-gray-100
                            className="block px-4 py-2 text-gray-100 hover:bg-[#808570] rounded dark:text-black"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}

                      <li>
                        <Link onClick={handleLogOut} className="block px-4 py-2 text-gray-100 hover:bg-[#808570] rounded dark:text-black">Logout</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaRegCircleUser className="w-6 h-6 cursor-pointer" />
              </Link>
            )}
          </div>

          {/* Favorite */}
          <button>
            <FiHeart className="w-6 h-6 cursor-pointer" />
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 bg-[#808570] px-3 py-1 rounded text-black dark:text-white"
          >
            <FiShoppingCart className="w-5 h-5" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold">{cartItems.length}</span>
            ) : null}
            <span className="text-sm font-semibold">Cart</span>
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            title="Toggle theme"
            className="p-2 rounded hover:bg-[#808570] transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile menu icon */}
          {/* sm:hidden */}
          <button
            onClick={toggleMenu}
            className="block lg:block md:hidden p-2 rounded hover:bg-[#808570]"
          >
            {isOpen ? <X size={24} /> : <HiMiniBars3BottomRight size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}

      {isOpen && (
        <div className="lg:block md:hidden mt-4 bg-black dark:bg-white shadow-md rounded-lg p-4 w-50 absolute md:right-2 xs:right-1 z-45">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  // #adadad87
                  className="block px-4 py-2 text-gray-100 hover:bg-[#808570] rounded dark:text-black"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
