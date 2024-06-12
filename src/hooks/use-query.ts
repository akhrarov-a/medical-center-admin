import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

/**
 * Query params
 */
type QueryParams = {
  [key: string]: string;
};

/**
 * Use query
 */
const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => {
    const params: QueryParams = {};

    const queryParams = new URLSearchParams(search);

    queryParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  }, [search]);
};

export { useQuery };
