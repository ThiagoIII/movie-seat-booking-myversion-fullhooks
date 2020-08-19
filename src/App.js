import React from 'react'
import './App.css'
import Movie from './context/movieContext/movieContext'
import Seats from './context/selectedSeatContext/selectedSeatsContext'
import SelectedMovie from './context/selectedMovieContext/selectedMovieContext'
import AddMovie from './components/AddMovie'
import MovieList from './components/MovieList'
import SeatingTypes from './components/SeatingTypes'
import ScreenAndSeats from './components/ScreenAndSeats'
import SelectedSeats from './components/SelectedSeats'



const App = () => {
	return (
		<>
		<Movie>
			<SelectedMovie>
				<AddMovie />
				<MovieList/>
				<SeatingTypes />
				<Seats>
					<ScreenAndSeats />
					<SelectedSeats />
				</Seats>
			</SelectedMovie>
		</Movie>
		</>
	)
}

export default App;
