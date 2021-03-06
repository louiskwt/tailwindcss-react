import React from 'react';
import './App.css';

function App() {
	return (
		<div className='container p-4'>
			<TailwindCSSButton>TailWind Btn</TailwindCSSButton>
		</div>
	);
}

function TailwindCSSButton(props) {
	return (
		<button className='bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600'>
			{props.children}
		</button>
	);
}

export default App;
