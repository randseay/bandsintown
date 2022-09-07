import { useState } from "react";

import Button from "./components/Button/Button";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

import useFetchBand from "./hooks/useFetchBand";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [bandName, setBandName] = useState("");

  const { data: bandData, loading, clearData } = useFetchBand(bandName);

  const clearBand = () => {
    setBandName("");
    setInputValue("");
    clearData();
  };

  return (
    <main>
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
          setBandName(inputValue);
        }}
      >
        <label htmlFor="search" className="search--label">
          <input
            id="search"
            name="search"
            className="search--input"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Search for artists"
          />
        </label>

        <div className="search--button">
          <Button type="submit" disabled={inputValue.length === 0}>
            Search
          </Button>
        </div>
      </form>

      {loading ? (
        <Loader />
      ) : bandData ? (
        <Hero band={bandData} />
      ) : (
        <p>Please search for a band</p>
      )}

      {bandData && (
        <a className="search--clear" onClick={clearBand}>
          Clear search result
        </a>
      )}
    </main>
  );
}

export default App;
