import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/useAuth";
import { Navigate } from "react-router-dom";
import verifyToken from "../requestHandlers/users/verify-token";

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    verifyToken(token)
      .then(() => {
        setIsTokenValid(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isTokenValid ? (
        children
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default ProtectedRoute;
