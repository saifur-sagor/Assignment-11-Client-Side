import React, { use } from "react";
import { AuthContext } from "../Context/AuthContex";

const UseAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default UseAuth;
