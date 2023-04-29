import { useNavigate, useLocation } from "react-router-dom";

const useGoTo = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const directGoTo = (where: string) => {
    navigate(where);
  };

  const addThisToPath = (path: string) => {
    const newPath = location.pathname + path;
    navigate(newPath);
  };

  return { directGoTo, addThisToPath };
};

export default useGoTo;
