import React, { useContext } from 'react'
import { MovieContext } from '../context/movieContext/movieContext'
import { SelectedMovieContext } from '../context/selectedMovieContext/selectedMovieContext'
import { handleSelectMovie } from '../context/actions'

const MovieList = () => {
	const { state } = useContext(MovieContext)
	const { dispatch } = useContext(SelectedMovieContext)
	
	const handleMovieChoice = (e) => {
		let movie = e.target.selectedIndex
		handleSelectMovie(dispatch, movie)
	}
	console.log('movie list map: ', state.moviesList, 'just the state: ', state)
	return (
		<div className='movie-container'>
			<label>Pick a movie, please: </label>
			<select id='movie' onChange={(e) => handleMovieChoice(e)}>
				<option value='Please select a movie'> - Please select a movie - </option>
				{
					state.moviesList.map( movie => <option value={movie.ticketPrice}>{movie.movieName} , cost: ${movie.ticketPrice}</option>)
				}
			</select>
		</div>
	)
}

export default MovieList
