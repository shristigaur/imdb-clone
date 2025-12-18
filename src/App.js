import './App.css';
import Search from './Pages/Search';
import MovieCard from './Componants/MovieCard';
import { useEffect, useState} from "react";
import { getPopularMovies } from './Serivces/api';


function App() {
  const [movies, setMovies]=useState([]);
  useEffect(()=>{
    getPopularMovies().then((data)=>{
      setMovies(data);
    });
  }, []);
  
  return (
    <div className="App">
      <Search />
      {movies.map((movie)=>(
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          year={movie.realease_date?.slice(0,4)}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default App;
