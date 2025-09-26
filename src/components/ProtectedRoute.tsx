import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const ageVerified = sessionStorage.getItem("ageVerified");
    if (!ageVerified) {
      navigate("/");
    }
  }, [navigate]);

  const ageVerified = sessionStorage.getItem("ageVerified");
  
  if (!ageVerified) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;