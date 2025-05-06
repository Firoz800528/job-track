import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import banner from '../assets/hero.png';

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleGetStarted = () => {
    if (user) {
      const companiesSection = document.getElementById('companies');
      if (companiesSection) {
        companiesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="hero bg-gradient-to-r rounded-2xl from-[#f0931056] to-[#F09110] min-h-[60vh] py-10 px-4">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center gap-8">
        <img
          src={banner}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg fade-all-except-right"
          alt="Hero"
        />

        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Find Your Dream Job Today
          </h1>
          <p className="py-4 sm:py-6 text-base sm:text-lg">
            Explore jobs from top companies in your area and apply with a click.
            We help you track every opportunity.
          </p>
          <button
            onClick={handleGetStarted}
            className="btn bg-[#ee68099f] hover:bg-[#ee6809dc] text-black mt-2 sm:mt-4"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
