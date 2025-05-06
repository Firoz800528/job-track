import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/jobtrack_logo.jpg';
import { AuthContext } from '../context/AuthProvider';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Footer = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#f9d9ac8c] text-base-content mt-10"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <motion.div custom={0} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Link to='/'><h1 className='text-3xl font-bold text-[#0D2B52] mb-2'>Job<span className='text-[#F0650D]'>Track</span></h1></Link>
          <p className="text-sm">
            Helping you find, track, and manage job opportunities from top companies, all in one place.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="hover:text-[#fc782c]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div custom={1} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-lg text-[#fc782c] font-semibold mb-2">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline hover:text-[#E86611]">Home</Link></li>
            {!user && (
              <>
                <li><Link to="/login" className="hover:underline hover:text-[#E86611]">Login</Link></li>
                <li><Link to="/register" className="hover:underline hover:text-[#E86611]">Register</Link></li>
              </>
            )}
            {user && (
              <>
                <li><Link to="/my-profile" className="hover:underline hover:text-[#E86611]">My Profile</Link></li>
                <li>
                  <button onClick={logout} className="hover:underline hover:text-[#E86611]">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </motion.div>

        <motion.div custom={2} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-lg font-semibold text-[#fc782c] mb-2">Contact</h3>
          <p>Email: support@jobtrack.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: Remote, Worldwide</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center py-4 border-t-2 border-[#f1d0a1] text-[#CC722B] font-bold border-dashed text-sm"
      >
        © {new Date().getFullYear()} JobTrack. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
