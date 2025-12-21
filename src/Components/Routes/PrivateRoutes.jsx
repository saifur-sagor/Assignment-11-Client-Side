import React from "react";
import { Form, Navigate, useLocation } from "react-router";
import UseAuth from "../Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={{ from: location }}replace to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
