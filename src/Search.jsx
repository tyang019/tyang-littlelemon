import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [result, setResult] = useState("");

  const handleSearch = () => {
    if (!query.trim()) {
      setShowOverlay(true);
    } else {
      setResult(`You searched for: "${query}"`);
    }
  };

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>

      {result && <p>{result}</p>}

      {showOverlay && (
        <div className="overlay">
          <p>Please enter a search term</p>
          <button onClick={() => setShowOverlay(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default Search;
