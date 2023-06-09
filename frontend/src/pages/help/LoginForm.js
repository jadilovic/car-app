import { useState, useEffect } from 'react';
import axios from 'axios';
import { login } from '../util';
import Count from './Count';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [isDisabled, setIsDisabled] = useState(true);

	useEffect(() => {
		setIsDisabled(!email || password.length < 6);
		setError(null);
	}, [email, password]);

	const handleLogin = async (e) => {
		e.preventDefault();
		setError(null);
		setIsDisabled(true);
		try {
			const token = await axios.post('http://localhost:5000/api/v1/login', {
				email,
				password,
			});
			/// await login({ email, password });
			setIsDisabled(false);
			console.log(token);
			alert('Login was successful');
		} catch (error) {
			console.log(error);
			setError(error.msg);
		}
	};

	return (
		<div className="wrapper">
			<h2>Login</h2>
			<div className="row">
				<label htmlFor="email">Email</label>
				<input
					type="text"
					id="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="row">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button onClick={handleLogin} disabled={isDisabled}>
				Log in
			</button>
			{error ? <p className="error">{error}</p> : null}
			<div>
				<Count />
			</div>
		</div>
	);
};
export default LoginForm;
