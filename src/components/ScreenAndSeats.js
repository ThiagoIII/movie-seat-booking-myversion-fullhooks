import React, { useContext } from 'react'
import { SelectedSeatsContext } from '../context/selectedSeatContext/selectedSeatsContext'
import { handleSelectSeat , handleDeselectSeat } from '../context/actions'

const ScreenAndSeats = () => {
	const { dispatch } = useContext(SelectedSeatsContext)

	let numberOfRows = Array.from({ length: 6 }, (_, i) => i+1)
	let numberOfSeatsPerRow = Array.from({ length: 8 }, (_, i) => i+1)
	
	const handleSelect = (e) => {
		e.target.classList.toggle('selected')
		e.target.classList.contains('selected') ? handleSelectSeat(dispatch, parseFloat(e.target.innerText)) : handleDeselectSeat(dispatch, parseFloat(e.target.innerText))
	}

	return (
		<div className='container'>
			<div className="screen"></div>
			{
				numberOfRows.map( item => (
					<ul className='row' key={item}>
						{
							numberOfSeatsPerRow.map(item2 => <li onClick={(e) => handleSelect(e)} className='seat' key={`${item}${item2}`}>{item}{item2}</li>)
						}
					</ul>
				))
			}
		</div>
	)
}

export default ScreenAndSeats
