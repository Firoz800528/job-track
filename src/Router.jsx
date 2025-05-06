import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CompanyDetails from "./pages/CompanyDetails";
import MyProfile from "./pages/MyProfile";
import UpdateProfile from "./pages/UpdateProfile";
import ForgetPassword from "./pages/ForgetPassword";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
import Companies from "./pages/Companies";
import About from "./pages/about";
import Spinner from "./components/spinner";

const Router = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const getTitle = () => {
    const path = location.pathname;
    if (path === "/") return "JobTrack | Home";
    if (path === "/login") return "JobTrack | Login";
    if (path === "/register") return "JobTrack | Register";
    if (path.includes("/company/")) return "JobTrack | Company Details";
    if (path === "/my-profile") return "JobTrack | My Profile";
    if (path === "/update-profile") return "JobTrack | Update Profile";
    if (path === "/forget-password") return "JobTrack | Reset Password";
    if (path === "/company-details/:id") return "JobTrack | Company Details";
    if (path === "/about") return "JobTrack | About";
  };

  return (
    <>
      <Helmet>
        <title>{getTitle()}</title>
      </Helmet>

      {loading && <Spinner />}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="companies" element={<Companies />} />
          <Route path="/about" element={<About />} />
          <Route path="my-profile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
          <Route path="update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
          <Route path="company-details/:id" element={<PrivateRoute><CompanyDetails /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
