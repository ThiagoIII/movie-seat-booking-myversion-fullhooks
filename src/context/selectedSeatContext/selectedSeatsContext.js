import React, { createContext, useReducer } from 'react'
import { selectedSeatsReducer } from '../reducers'

const selectedSeats = []

export const SelectedSeatsContext = createContext(selectedSeats)

const Seats = ({children}) => {
	const [state, dispatch] = useReducer(selectedSeatsReducer, selectedSeats)
	return (
		<SelectedSeatsContext.Provider value={{
			state,
			dispatch
		}}>
			{children}
		</SelectedSeatsContext.Provider>
	)
}

export default Seats