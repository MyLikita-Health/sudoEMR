import { useLocation } from "react-router";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default useQuery;
