import { useNavigate } from "react-router";

// para la vista adminIndex

export function useGoAdmin() {
  const navigate = useNavigate();
  return () => navigate("/admin");
}


