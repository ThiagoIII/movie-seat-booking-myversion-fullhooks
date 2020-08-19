import React, { createContext, useReducer } from 'react'
import { movieInfoReducer } from '../reducers'

const movieInfoContext = { 
	moviesList: [
	{
		movieName: 'Avengers: Endgame',
		ticketPrice: 10
	},
	{
		movieName: 'Avengers: Infinity War',
		ticketPrice: 8
	},
]}

export const MovieContext = createContext(movieInfoContext)

const Movie = ({children}) => {
	const [state, dispatch] = useReducer(movieInfoReducer, movieInfoContext)
	return (
		<MovieContext.Provider value={{
			state,
			dispatch
		}}>
			{children}
		</MovieContext.Provider>
	)
}


export default Movie