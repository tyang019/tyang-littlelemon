import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) {
      setShowOverlay(true);
    }
  };

  return (
    <>
      <input
        id="input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      {query && <p id="searchResult">You searched for: "{query}"</p>}

      {showOverlay && (
        <div id="overlay">
          <div id="message">
            <p>Please enter a search term</p>
            <button onClick={() => setShowOverlay(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBar;
