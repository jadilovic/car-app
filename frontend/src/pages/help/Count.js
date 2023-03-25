import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Count = () => {
	// useState
	const [count, setCount] = useState(0);
	const [num, setNum] = useState(0);
	const myBtn = useRef(null);
	// let [count, setCount] = React.useState(0);
	const handleClickUpdate = async () => {
		try {
			const user = await axios.get('http://localhost:5000/api/v1/user', {
				headers: {
					'x-token':
						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWNhN2ZjYTRhZTBhNzc0MjFhZmUyOSIsImlhdCI6MTY3OTc2ODQzMiwiZXhwIjoxNjc5ODA0NDMyfQ.XfgO-NmO6PCYGsMUxoxUwa2cdjFDUL_3Ou1UFmJSyEc',
				},
			});
			console.log(user);
		} catch (error) {
			console.log(error);
		}
		setCount((e) => e + 1);
		console.log(count);
		// count = count + 1; // will not update the DOM
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setNum((prev) => prev + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [num]);

	return (
		<>
			{count}
			<button onClick={handleClickUpdate}>Test Token</button>
			<div>
				<p>{num}</p>
			</div>
			<button ref={myBtn}>Ref Button</button>
		</>
	);
};

export default Count;
