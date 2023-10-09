import React from 'react'
import {useNavigate} from 'react-router-dom'

const Logout = () => {
	const navigate = useNavigate()
	const handleClick = () =>{
		navigate('/login')
	}

	return (
		<div  >
			<button className="logoutbtn" onClick = { handleClick}>Logout</button>
		</div>
	)
}

export default Logout