// React
import React, { useState, useEffect } from 'react';

const App = () => {
	const ORIGINAL_TITLE = "W4S4P34'S PORTFOLIO";

	const [title, setTitle] = useState(ORIGINAL_TITLE);
	const [titleHovering, setHoverTitle] = useState(false);

	const onMouseEnter = () => {
		setHoverTitle(true);
	};
	const onMouseLeave = () => {
		setHoverTitle(false);
	};

	useEffect(() => {
		if (titleHovering) {
			setTitle(ORIGINAL_TITLE);
		} else {
			const interval = setInterval(() => {
				const shuffledCharacters = title
					.split('')
					.sort(() => 0.5 - Math.random())
					.join('');
				setTitle(shuffledCharacters);
			}, 10);
			return () => clearInterval(interval);
		}
	}, [title, titleHovering]);

	return (
		<div className='flex flex-col w-screen self-center justify-self-center font-mono font-bold text-3xl text-center select-none'>
			<h3
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}>
				{title}
			</h3>
			<h3>
				This website is currently under maintenance, please comeback
				later
			</h3>
		</div>
	);
};

export default App;
