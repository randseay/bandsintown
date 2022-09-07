import "./App.css";

import Hero from "./components/Hero";
import Loader from "./components/Loader";
import useFetch from "./hooks/useFetch";

function App() {
  const { data: bandData, loading } = useFetch(
    "/artists/NEEDTOBREATHE?app_id=bands_in_town"
  );

  return (
    <div>
      <main>{loading ? <Loader /> : <Hero band={bandData} />}</main>
    </div>
  );
}

export default App;
