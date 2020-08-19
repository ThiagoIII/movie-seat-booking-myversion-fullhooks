export const selectedSeatsReducer = (state, action) => {
	switch (action.type){
		case 'SELECTED':
			return state.concat(action.payload)
		case 'DESELECTED':
			return state.filter( seatNumber => seatNumber !== action.payload)
		default:
			return state
	}
}

export const movieInfoReducer = (state, action) => {
	switch (action.type){
		case 'ADD':
			return {...state, moviesList: state.moviesList.concat(action.payload)}
		default:
			return state
	}
}

export const selectedMovieReducer = (state, action) => {
	switch (action.type){
		case 'MOVIE':
			return state = [action.payload]
		default:
			return state
	}
}

