import React, {useContext} from 'react'
import { MovieContext } from '../context/movieContext/movieContext'
import { handleAddMovie } from '../context/actions'

const AddMovie = () => {
	const { dispatch } = useContext(MovieContext)

	const handleAddMovieInfo = () => {
		let movieInfoName = document.querySelector('#addmovie')
		let movieTicketValue = document.querySelector('#ticketvalue')
		if(movieInfoName.value === '' || movieTicketValue.value === ''){
			return alert('Please fill out both fields')
		}
		handleAddMovie(dispatch, {
			movieName: movieInfoName.value,
			ticketPrice: parseFloat(movieTicketValue.value)
		})

		movieInfoName.value = ''
		movieTicketValue.value = ''
	}

	return (
		<>
			<label htmlFor='addmovie'>Please add a movie: </label>
			<input id='addmovie' type="text"/>
			<label htmlFor="ticketvalue">Please enter the ticket value</label>
			<input id='ticketvalue' type="number"/>
			<button onClick={() => handleAddMovieInfo()}>Add info</button>
		</>
	)
}

export default AddMovie
