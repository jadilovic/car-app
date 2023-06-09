import './register.css';

const Register = () => {
	return (
		<div className="registration form">
			<header>Signup</header>
			<form action="#">
				<input type="text" placeholder="Enter your email" />
				<input type="password" placeholder="Create a password" />
				<input type="password" placeholder="Confirm your password" />
				<input type="button" className="button" value="Signup" />
			</form>
			<div className="signup">
				<span className="signup">
					Already have an account?
					<label htmlFor="check">Login</label>
				</span>
			</div>
		</div>
	);
};
export default Register;
