import './App.css';
import Search from './Pages/Search';
import MovieCard from './Componants/MovieCard';
import { useEffect, useState} from "react";
import { getPopularMovies } from './Serivces/api';
import Todo from './Pages/Todo';
import { ThemeContext } from './Theme';
import { useContext } from 'react';
import Header from "./Componants/Header";

function App() {
  const [movies, setMovies]=useState([]);
  useEffect(()=>{
    getPopularMovies().then((data)=>{
      setMovies(data);
    });
  }, []);

  const {theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <>
      <div className="App">
        <Todo />
        <Search />
        {movies.map((movie)=>(
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            year={movie.realease_date?.slice(0,4)}
           rating={movie.rating}
          />
        ))};
      </div>
      <div className={`app-container ${theme}`}>
         <Header />
        <h1>theme switcher app</h1>
        <button onClick={toggleTheme}>switch theme</button>
      </div>
    </>
  );
}

export default App;
