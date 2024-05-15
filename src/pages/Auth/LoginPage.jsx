import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosConfig';
import InputGroup from '../../components/Form/InputGroup';
import Alert from '../../components/Alert';
import AuthContext from '../../contexts/auth-context';

export default function LoginPage() {
	const { setAuth, setUser, setUserType } = useContext(AuthContext);

	const navigate = useNavigate();

	const form = useForm();

	const { register, handleSubmit, formState } = form;

	const { errors } = formState;

	let [isLoading, setIsLoading] = useState(false);
	let [error, setError] = useState(null);

	let onSubmit = async (data) => {
		setAuth(true);
		setError(null);
		setIsLoading(true);
		try {
			let response = await axiosInstance.post('/auth/login', data);
			localStorage.setItem('token', response.data.token);

			let userType = response.data.userType;

			setAuth(true);
			setUser(response.data.user);
			setUserType(userType);

			if (userType == 'admin') {
				navigate('/syndic-dashboard');
			}
		} catch (e) {
			setError(e);
		}
		setIsLoading(false);
	};
	return (
		<div className="col-lg-6" style={{ backgroundColor: "#f6f7fc" }}>
		<card style={{ width: 500, marginLeft: "auto" }}>
		<div className="p-lg-5 p-4">
			
			<div>
				<h5 className="text-primary">Welcome Back !</h5>
				<p className="text-muted">Sign in to continue.

				</p>
			</div>

			<div className="mt-4">
				{error && <Alert type='error'>{error}</Alert>}
				<form onSubmit={handleSubmit(onSubmit)}>

					<InputGroup
	label='Email'
	name='email'
	type='email'
	placeholder="Enter email"
	register={register('email', {
		required: 'Email is required',
		minLength: {
			value: 3,
			message: 'Email must be at least 3 characters',
		},
		pattern: {
			value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
			message: 'Email is not valid',
		},
	})}
	error={errors.email?.message}
/>

		
<div className="mb-3">
<div className="float-end">
	<a href="auth-pass-reset-cover.html" className="text-muted">Forgot password?</a>
</div>
<InputGroup
label='Password'
name='password'
type='password'
placeholder="Enter password"
register={register('password', {
	required: 'Password is required',
	minLength: {
		value: 3,
		message: 'Password must be at least 3 characters',
	},
	maxLength: {
		value: 20,
		message: 'Password must be at most 20 characters',
	},
})}
error={errors.password?.message}
/></div>

					

<div className="form-check">
<input
  className="form-check-input"
  type="checkbox"
  defaultValue=""
  id="auth-remember-check"
/>
<label className="form-check-label" htmlFor="auth-remember-check">
  Remember me
</label>
</div>

<div className='mt-4'>
<button disabled={isLoading} className='btn btn-success w-100'  style={{ backgroundColor: "#6f787f", color: "#ffffff" , borderColor: "#6f787f" }}>
	{isLoading && <i className='fas fa-spinner fa-spin'></i>} Sign In
</button>
</div>

<div className="mt-4 text-center">
<div className="signin-other-title">
  <h5 className="fs-13 mb-4 title">Sign In with</h5>
</div>
<div>
  <button
	type="button"
	className="btn btn-primary btn-icon waves-effect waves-light"
  >
	<i className="ri-facebook-fill fs-16" />
  </button>
  <button
	type="button"
	className="btn btn-danger btn-icon waves-effect waves-light"
  >
	<i className="ri-google-fill fs-16" />
  </button>
  <button type="button"className="btn btn-dark btn-icon waves-effect waves-light"><i className="ri-github-fill fs-16" />
  </button>
  <button type="button" className="btn btn-info btn-icon waves-effect waves-light"><i className="ri-twitter-fill fs-16" />
  </button>
</div>
</div>
				</form>
			</div>

			<div className='mt-4 text-center'>
				<p className='mb-0'>
					Don't have an account ?
					<Link to='/auth/signup/syndic' className='fw-semibold text-primary text-decoration-underline'>
						Sign Up
					</Link>
				</p>
			</div>
	</div></card>
	</div>




	
	);
}
