import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosConfig';
import Alert from '../../components/Alert';
import Card from '../../components/Card';
import InputGroup from '../../components/Form/InputGroup';

export default function CreateAdminPage() {
	const navigate = useNavigate();

	const form = useForm();

	const { register, handleSubmit, formState } = form;

	const { errors } = formState;

	let [isLoading, setIsLoading] = useState(false);
	let [error, setError] = useState(null);

	let onSubmit = async (data) => {
		setError(null);
		setIsLoading(true);
		try {
			await axiosInstance.post('/admins', data);
			navigate('/dashboard/admins');
		} catch (e) {
			setError(e);
		}
		setIsLoading(false);
	};

	return (
		<Card title='Create a new admin'>
			{error && <Alert type='error' message={error} />}

			<form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup
					label='Name'
					type='text'
					name='name'
					placeholder='John Doe'
					register={register('name', {
						required: 'Name is required',
						minLength: {
							value: 3,
							message: 'Name must be at least 3 characters',
						},
						maxLength: {
							value: 20,
							message: 'Name must be at most 20 characters',
						},
					})}
					error={errors.name?.message}
				/>
				<InputGroup
					label='Email'
					type='text'
					name='email'
					placeholder='john@data-era.co'
					register={register('email', {
						required: {
							value: true,
							message: 'Email is required',
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
					type='password'
					name='password'
					placeholder='********'
					register={register('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Password must be at least 6 characters',
						},
						maxLength: {
							value: 20,
							message: 'Password must be at most 20 characters',
						},
					})}
					error={errors.password?.message}
				/>
				<button disabled={isLoading} className='btn btn-primary'>
					{isLoading && <i className='fas fa-spinner fa-spin'></i>} Save
				</button>
			</form>
		</Card>
	);
}
