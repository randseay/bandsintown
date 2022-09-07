import { useState } from "react";

import Button from "./components/Button/Button";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

import useFetch from "./hooks/useFetchBand";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [bandName, setBandName] = useState("");

  const { data: bandData, loading } = useFetch(bandName);

  return (
    <main>
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
          setBandName(inputValue);
        }}
      >
        <input
          className="search--input"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Search for artists"
        />

        <div className="search--button">
          <Button type="submit" disabled={inputValue.length === 0}>
            Search
          </Button>
        </div>
      </form>

      {loading ? (
        <Loader />
      ) : !!bandData ? (
        <Hero band={bandData} />
      ) : (
        <div>Please search for a band</div>
      )}
    </main>
  );
}

export default App;
