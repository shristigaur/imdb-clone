import './App.css';
import Search from './Pages/Search';
import MovieCard from './Componants/MovieCard';


function App() {
  const movies = [
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      Poster: "shawshank.jpeg",
      Rating: "9.3"
    },
    {
      Title: "The Godfather",
      Year: "1972",
      Poster: "godfather.jpeg",
      Rating: "9.2"
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      Poster: "dark knight.jpeg",
      Rating: "9.0"
    },
    {
      Title: "Pulp Fiction",
      Year: "1994",
      Poster: "pulp fiction.jpeg",
      Rating: "8.9"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>searching words</h1>
        <Search />
      </header>
      <main>
        <div className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard key={index} title={movie.Title} year={movie.Year} poster={movie.Poster} rating={movie.Rating}  />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
