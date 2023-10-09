import React from 'react'
import Logout from './logout'
import {useState} from 'react'


const Dashboard = () => {
	const query = window.location.search;
	const searchParams = new URLSearchParams(query);
	const user = searchParams.get('userType');
	const [userType] = useState(user);

	return (<>
				<div className='dashContainer'>
					<nav className="navBar">
					
						<h1> {userType.toUpperCase()} </h1>
						<Logout/>
					</nav>
				</div>

				<main className='dashContent'>  
					<h1> Hi, {userType.toUpperCase()} </h1>
				 </main>

			</>
			

	)
}

export default Dashboard