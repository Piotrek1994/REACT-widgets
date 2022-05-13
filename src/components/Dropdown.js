import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ optionsProp, selectedProp, setSelectedProp }) => {
	const [open, setOpen] = useState(false)
    const ref = useRef()

	useEffect(() => {
		document.body.addEventListener(
			'click',
			() => {
				setOpen(false)
			},
			{ capture: true }
		)
	}, [])

	const renderedOptions = optionsProp.map(option => {
		if (option.value === selectedProp.value) {
			return null
		}
		return (
			<div key={option.value} className='item' onClick={() => setSelectedProp(option)}>
				{option.label}
			</div>
		)
	})

	return (
		<div ref={ref} className='ui form'>
			<div className='field'>
				<label className='label'>Select a Color</label>
				<div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
					<i className='dropdown icon'></i>
					<div className='text'>{selectedProp.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
				</div>
			</div>
		</div>
	)
}

export default Dropdown