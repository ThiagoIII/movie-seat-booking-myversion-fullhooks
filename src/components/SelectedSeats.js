import React, { useContext } from 'react'
import { SelectedSeatsContext } from '../context/selectedSeatContext/selectedSeatsContext'
import { MovieContext } from '../context/movieContext/movieContext'
import { SelectedMovieContext } from '../context/selectedMovieContext/selectedMovieContext'

const SelectedSeats = () => {
	const { state } = useContext(SelectedSeatsContext)
	const { state: state1 } = useContext(MovieContext)
	const { state: state2 } = useContext(SelectedMovieContext)

	return (
		<p className="text">
			You have selected   <span id="count"> {state.length} </span>    
			seats for a price of $<span id="total">{ 
				state2[0] === 0 ? null : state1.moviesList[state2[0]-1].ticketPrice*state.length}</span>
		</p>
	)
}

export default SelectedSeats
