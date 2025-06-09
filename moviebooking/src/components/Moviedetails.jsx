// src/components/MovieDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f2f2f2' }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} width="300" />
      <p>Enjoy the movie! Book your seat now.</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
