import "./App.css";

import Hero from "./components/Hero/Hero";
import useFetch from "./hooks/useFetch";

function App() {
  const { data: bandData, error } = useFetch(
    "/artists/NEEDTOBREATHE?app_id=bands_in_town"
  );

  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <main>
        <Hero band={bandData} />
      </main>
    </div>
  );
}

export default App;
