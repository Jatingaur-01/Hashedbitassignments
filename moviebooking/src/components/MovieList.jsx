// src/components/MovieList.jsx
import { Link } from 'react-router-dom';
import movies from '../data/movies';
import '../styles/MovieList.css';

const MovieList = () => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
          <img src={movie.image} alt={movie.title} />
          <h4>{movie.title}</h4>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
