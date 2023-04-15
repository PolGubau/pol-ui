import { useMemo } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  useMatches,
} from "react-router-dom";

function useRouter() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useMatches();

  return useMemo(() => {
    return {
      push: navigate,
      pathname: location.pathname,
      location,
      history,
      match: matches,
      params,
    };
  }, [params, location, history]);
}

export default useRouter;
