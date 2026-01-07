import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Signup from "./auth/Signup/Signup";
import SignIn from "./auth/SignIn/SignIn";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";
import VerifyEmail from "./auth/VerifyEmail/VerifyEmail";
import CheckEmail from "./auth/CheckEmail/CheckEmail";
import ResetPassword from "./auth/ResetPassword/ResetPassword";
import PasswordSuccess from "./auth/PasswordSuccess/PasswordSuccess";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-success" element={<PasswordSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
