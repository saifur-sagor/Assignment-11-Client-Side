import React from "react";

import { Link } from "react-router";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
  const { role, isLoading } = useRole();
  if (isLoading) {
    <p>Loading...</p>;
  }
  if (role !== "Admin") {
    return (
      <div>
        <p>You are not Access this page</p>
        <Link to="/">Back To Home</Link>
      </div>
    );
  }
  return children;
};

export default AdminRoute;
