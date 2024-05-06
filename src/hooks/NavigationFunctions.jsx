import { useNavigate } from "react-router";

// para la vista licencia1

export function useGoPersonaL() {
  const navigate = useNavigate();
  return () => navigate("/licencia1/persona");
}

// para la vista de persona

export function useGoPersonaP() {
  const navigate = useNavigate();
  return () => navigate("/licencia1/persona");
}

