import axios from 'axios'
import './App.css';
import { useState, useEffect } from 'react'
import Movie from './Movie'

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    getAllMovies()
  }, [])

  const getAllMovies = async () => {
    try {
      const response = await axios.get('http://localhost:7000');
      const movies = response.data.recordset

      console.log(movies);
      setMovies(movies)
      
    } catch (error) {
      console.error(error);
    }
  }

  const handleAddMovieClick = () => {

    const newMovie = {
      id: null,
      name: '',
      caleb: false,
      andrew: false
    }

    setMovies([...movies, newMovie])

  }

  return (
    <div className="App container-fluid d-flex justify-content-start align-items-center flex-column">
      <header className="App-header align-items-center justify-content-center">
        Caleb and Andrew's Rewatchables
      </header>
        <ul className="content p-0">
          {
            movies.map((movie) => 
                <Movie
                  movie={movie}
                  key={movie.id}
                />
            )
          }
        </ul>
      <div className="content d-flex justify-content-center">
        <button onClick={handleAddMovieClick} type="button" className="w-25 m-2">Add Movie</button>
      </div>
    </div>
  );
}

export default App;
