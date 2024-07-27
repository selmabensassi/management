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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = async (data) => {
    setAuth(true);
    setError(null);
    setIsLoading(true);
    try {
      let response = await axiosInstance.post('/auth/login', data);
      const token = response.data.token;

      if (rememberMe) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }

      const userType = response.data.userType;
      setAuth(true);
      setUser(response.data.user);
      setUserType(userType);

      if (userType === 'admin') {
        navigate('/syndic-dashboard');
      }
    } catch (e) {
      setError(e.response?.data?.message || 'An error occurred. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="col-lg-6" style={{ backgroundColor: "#f6f7fc" }}>
      <div className="card" style={{ width: 500, marginLeft: "auto" }}>
        <div className="p-lg-5 p-4">
          <div>
            <h5 className="text-primary">Welcome Back !</h5>
            <p className="text-muted">Sign in to continue.</p>
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
                  <a href="/auth/forget" className="text-muted">Forgot password?</a>
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
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="auth-remember-check"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="auth-remember-check">
                  Remember me
                </label>
              </div>
              <div className='mt-4'>
                <button disabled={isLoading} className='btn btn-success w-100' style={{ backgroundColor: "#6f787f", color: "#ffffff", borderColor: "#6f787f" }}>
                  {isLoading && <i className='fas fa-spinner fa-spin'></i>} Sign In
                </button>
              </div>
            </form>
          </div>
          <div className='mt-4 text-center'>
            <p className='mb-0'>
              Don't have an account ? <Link to='/auth/signup/syndic' className='fw-semibold text-primary text-decoration-underline'>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
