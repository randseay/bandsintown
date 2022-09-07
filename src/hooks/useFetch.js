import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setLoading(false);
    }

    fetchData().catch((e) => {
      setError(e);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return {
    data,
    error,
    loading,
  };
}

export default useFetch;
