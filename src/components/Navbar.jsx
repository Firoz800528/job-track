import React, { useState, useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/jobtrack_logo.jpg";
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <motion.div
      className="bg-base-100 shadow-md shadow-[#fd610765] sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto navbar flex justify-between items-center px-4 py-2">
        <Link to="/">
          <img src={logo} alt="Logo" className="lg:w-[10vw] md:w-[20vw] w-[40vw]" />
        </Link>

        <div className="hidden md:flex gap-4 items-center">
          <NavLink to="/" className="btn btn-ghost hover:bg-[#F7C886]">Home</NavLink>
          <a href="#faq" className="btn btn-ghost hover:bg-[#F7C886]">FAQ</a>
          <NavLink to="/about" className="btn btn-ghost hover:bg-[#F7C886]">About Us</NavLink>

          {user ? (
            <>
              <Link to="/my-profile">
                <img src={user.photoURL || ""} alt="Profile" className="w-10 h-10 rounded-full" />
              </Link>
              <button onClick={handleLogout} className="btn btn-sm btn-outline hover:bg-[#F7C886]">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-outline btn-sm border-[#ED6812] hover:bg-[#F7C886]">Login</NavLink>
              <NavLink to="/register" className="btn btn-outline btn-sm border-[#ED6812] hover:bg-[#F7C886]">Register</NavLink>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
           className="md:hidden bg-[#F1971C] absolute right-4 w-[50vw] -bottom-48 border-t px-4 py-3 space-y-2 text-white"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink to="/" className="block" onClick={toggleMenu}>Home</NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="block">FAQ</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink to="/about" className="block" onClick={toggleMenu}>About Us</NavLink>
            </motion.div>

            {user ? (
              <>
                <Link to="/my-profile" onClick={toggleMenu} className="flex items-center gap-2">
                  <img
                    src={user.photoURL || ""}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <span className="font-semibold">My Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm w-full bg-white text-[#F1971C] hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="btn btn-sm w-full bg-white text-[#F1971C] hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-sm w-full bg-white text-[#F1971C] hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Register
                </NavLink>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
