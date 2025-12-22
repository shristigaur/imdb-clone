import { useEffect, useState } from "react";
import { searchMovies } from "../Services/api";
import MovieCard from "../Components/MovieCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);

      searchMovies(query).then((results) => {
        setMovies(results);
        setLoading(false);
      });
    }, 500); // 👈 Debounce delay

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎬 Movie Search</h2>

      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {!loading && movies.length === 0 && query && (
        <p>❌ No Results Found</p>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
