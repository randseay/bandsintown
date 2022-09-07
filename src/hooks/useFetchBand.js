import { useEffect, useState } from "react";

function useFetchBand(name) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const clearData = () => setData(null);

  useEffect(() => {
    async function fetchData(bandName) {
      setLoading(true);
      const response = await fetch(`/artists/${bandName}?app_id=bands_in_town`);
      const data = await response.json();

      setData(data);
      setLoading(false);
    }

    if (name && name.length > 0) {
      fetchData(name).catch(setError);
    }

    setLoading(false);
  }, [name]);

  return {
    data,
    error,
    loading,
    clearData,
  };
}

export default useFetchBand;
