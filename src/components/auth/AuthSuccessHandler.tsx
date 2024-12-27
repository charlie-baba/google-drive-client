import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthSuccessHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract the JWT from the "Authorization" header
    const jwt = new URLSearchParams(window.location.search).get("token");

    if (jwt) {
        sessionStorage.setItem("jwt", jwt); // Save the JWT in sessionStorage
    } else {
        console.error("Authorization header not found in the redirect URL");
    }

    // Redirect to the drive page
    navigate("/drive");
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default AuthSuccessHandler;
