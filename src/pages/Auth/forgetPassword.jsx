import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axiosInstance from '../../config/axiosConfig';
import InputGroup from '../../components/Form/InputGroup';
import Alert from '../../components/Alert';

const ForgetPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    setError(null);
    setMessage(null);
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/auth/forget', data);
      setMessage('Instructions have been sent to your email.');
    } catch (e) {
      setError('An error occurred. Please try again.',e);
    }
    setIsLoading(false);
  };

  return (
    <div className="col-lg-6" style={{ backgroundColor: "#f6f7fc" }}>
      <div className="card" style={{ width: 500, marginLeft: "auto" }}>
        <div className="p-lg-5 p-4">
          <div>
            <h5 className="text-primary">Forgot Password?</h5>
            <p className="text-muted">Reset your password with a click</p>
          </div>

          <div className="mt-4">
            {message && <Alert type='success'>{message}</Alert>}
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
              <div className='mt-4'>
                <button disabled={isLoading} className='btn btn-success w-100' style={{ backgroundColor: "#6f787f", color: "#ffffff", borderColor: "#6f787f" }}>
                  {isLoading && <i className='fas fa-spinner fa-spin'></i>} Send Reset Link
                </button>
              </div>
            </form>
          </div>

          <div className='mt-4 text-center'>
            <p className='mb-0'>
              Remember your password?{' '}
              <Link to='/auth/login' className='fw-semibold text-primary text-decoration-underline'>
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
