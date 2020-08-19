import React, { createContext, useReducer } from 'react'
import { selectedMovieReducer } from '../reducers'

const movieSelected = [0]

export const SelectedMovieContext = createContext(movieSelected)

const SelectedMovie = ({children}) => {
	const [state, dispatch] = useReducer(selectedMovieReducer, movieSelected)
	return (
		<SelectedMovieContext.Provider value={{
			state,
			dispatch
		}}>
			{children}
		</SelectedMovieContext.Provider>
	)
}

export default SelectedMovie