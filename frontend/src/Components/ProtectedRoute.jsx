import React, { useEffect, useState } from "react";
import { Navigate } from "react-router"

const ProtectedRoute = ({ children }) => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/protected", { credentials: "include" })
      .then(res => res.ok ? setAuthorized(true) : setAuthorized(false))
      .catch(() => setAuthorized(false));
  }, []);

  if (authorized === null) return <div>Loading...</div>;
  if (!authorized) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;