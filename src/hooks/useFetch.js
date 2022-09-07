import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    }

    fetchData().catch(setError);
    // eslint-disable-next-line
  }, []);

  return {
    data,
    error,
  };
}

export default useFetch;
