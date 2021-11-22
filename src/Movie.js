import React, { useState } from 'react'
import Checkbox from './Checkbox'
import axios from 'axios';

const Movie = ({ movie }) => {

    const [movieName, setMovieName] = useState(movie.name)

    const upsertMovie = (movie) => {
        console.log('upsert...');
        console.log(movie)
        axios.post('https://rewatchablesapi.azurewebsites.net/upsert', {},
        {
          params: movie
        })
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }

    const handleNameChange = (event) => {
        console.log('change...');
        setMovieName(event.target.value)
    }

    const handleNameBlur = (event) => {
        console.log('name blur...');
        upsertMovie({...movie, name: event.target.value})
    }

    return (
        <li>
            <div className="d-flex ps-4 justify-content-between">
                <div className="d-flex align-items-center w-75">
                    <input type="text" value={movieName} onChange={handleNameChange} onBlur={handleNameBlur}/>
                </div>
                <div className="d-flex flex-column w-25">
                    <div className="person d-flex align-items-center">
                        <Checkbox
                            movie={movie}
                            name={'Caleb'}
                            value={movie.caleb}
                            upsertMovie={upsertMovie}
                         />
                    </div>
                    <div className="person d-flex align-items-center">
                        <Checkbox
                            movie={movie}
                            name={'Andrew'}
                            value={movie.andrew}
                            upsertMovie={upsertMovie}
                         />
                    </div>
                </div>
            </div>
        </li>
    )
}


export default Movie