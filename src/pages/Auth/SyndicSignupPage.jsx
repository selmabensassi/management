import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert';
import InputGroup from '../../components/Form/InputGroup';
import axiosInstance from '../../config/axiosConfig';
import AuthContext from '../../contexts/auth-context';

export default function SyndicSignupPage() {
	const { setAuth, setUser, setUserType } = useContext(AuthContext);
	const navigate = useNavigate();

	const form = useForm();

	const { register, handleSubmit, formState, watch } = form;

	const { errors } = formState;

	let [isLoading, setIsLoading] = useState(false);
	let [error, setError] = useState(null);

	const type = watch('type', 'pro');

	let onSubmit = async (data) => {
		if (type == 'pro') {
			delete data.birth_date;
			delete data.gender;
		}

		setError(null);
		setIsLoading(true);
		try {
			let response = await axiosInstance.post('/signup/syndic', data);
			localStorage.setItem('token', response.data.token);
			setAuth(true);
			setUser(response.data.user);
			setUserType('syndic');
			navigate('/syndic-dashboard');
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
				<p className="text-muted">Sign up to continue.

				</p>
			</div>

			<div className="mt-4">
				{error && <Alert type='error'>{error}</Alert>}
				<form onSubmit={handleSubmit(onSubmit)}>


	
							
							<div className='mb-3'>
								<label className='form-label'>Type : </label>
								<select
									name='type'
									className='form-control'
									{...register('type', {
										value: 'pro',
									})}
								>
									<option value='co-owner'>Co-Owner</option>
									<option value='pro'>Professional</option>
								</select>
								<div className='form-text'>
									* Co-Owner : A co-owner of a property.
									<br />* Professional : You own a company that provides services to properties.
								</div>
							</div>

							<InputGroup
								label='First Name'
								name='first_name'
								type='text'
								placeholder='Enter First Name'
								register={register('first_name', {
									required: 'First Name is required',
									minLength: {
										value: 3,
										message: 'First Name must be at least 3 characters',
									},
									maxLength: {
										value: 20,
										message: 'First Name must be at most 20 characters',
									},
								})}
								error={errors.first_name?.message}
							/>
							<InputGroup
								label='Last Name'
								name='last_name'
								placeholder='Enter Last Name'
								type='text'
								register={register('last_name', {
									required: 'Last Name is required',
									minLength: {
										value: 3,
										message: 'Last Name must be at least 3 characters',
									},
									maxLength: {
										value: 20,
										message: 'Last Name must be at most 20 characters',
									},
								})}
								error={errors.first_name?.message}
							/>

							{type != 'pro' && (
								<>
									<div className='mb-3'>
										<label className='form-label'>Gender : </label>
										<select name='gender' className='form-control' {...register('gender')}>
											<option value='male'>Male</option>
											<option value='female'>Female</option>
										</select>
									</div>

									<InputGroup
										label='Birth Date'
										name='birth_date'
										placeholder='Enter Birth Date'
										type='date'
										register={register('birth_date', {
											required: 'Birth Date is required',
											validate: (value) => {
												let date = new Date(value);
												let now = new Date();
												if (date > now) {
													return 'Birth Date must be in the past';
												}
												return true;
											},
										})}
										error={errors.birth_date?.message}
									/>
								</>
							)}

							<InputGroup
								label='Email'
								name='email'
								placeholder='Enter Email'
								type='email'
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
							<InputGroup
								label='Password'
								name='password'
								placeholder='Enter Password'
								type='password'
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
							/>

<div className='mt-4'>
<button disabled={isLoading} className='btn btn-success w-100'  style={{ backgroundColor: "#6f787f", color: "#ffffff" , borderColor: "#6f787f" }}>
	{isLoading && <i className='fas fa-spinner fa-spin'></i>} Sign Up
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
				</div>
			</card>
			<div className='mt-4 text-center'>
				<p className='mb-0'>
					Already have an account ?
					<Link to='/auth/login' className='fw-semibold text-primary text-decoration-underline'>
						Log in
					</Link>
				</p>
			</div>
		</div>
	);
}
