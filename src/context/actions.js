export const handleSelectSeat = (dispatch, seatNumber) => {
	dispatch({
			type: 'SELECTED',
			payload: seatNumber
		})
}

export const handleDeselectSeat = (dispatch, seatNumber) => {
	dispatch({
			type: 'DESELECTED',
			payload: seatNumber
		})
}

export const handleAddMovie = (dispatch, movieInfo) => {
	dispatch({
			type: 'ADD',
			payload: movieInfo
})
}

export const handleSelectMovie = (dispatch, movieIndex) => {
	dispatch({
			type: 'MOVIE',
			payload: movieIndex
		})
}

export default handleSelectSeat