import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosConfig';
import InputGroup from '../../components/Form/InputGroup';
import Alert from '../../components/Alert';

const ResetPasswordPage = () => {
  const { token } = useParams(); 
  console.log("Fetched token:", token); 

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError(null);
    setMessage(null);
    setIsLoading(true);
    try {
      console.log("Submitting request with password:", password); 
      const response = await axiosInstance.patch(`/auth/resetPassword/${token}`, { password });
      setMessage('Your password has been reset successfully.');
      setTimeout(() => {
        navigate('/auth/login');
      }, 3000);
    } catch (e) {
      console.error('Error resetting password:', e);
      setError(e.response?.data?.message || 'An error occurred. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="col-lg-6" style={{ backgroundColor: "#f6f7fc" }}>
      <div className="card" style={{ width: 500, marginLeft: "auto" }}>
        <div className="p-lg-5 p-4">
          <div>
            <h5 className="text-primary">Reset Password</h5>
            <p className="text-muted">Enter your new password below.</p>
          </div>

          <div className="mt-4">
            {message && <Alert type='success'>{message}</Alert>}
            {error && <Alert type='error'>{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <InputGroup
                label='New Password'
                name='password'
                type='password'
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <InputGroup
                label='Confirm New Password'
                name='confirmPassword'
                type='password'
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className='mt-4'>
                <button disabled={isLoading} className='btn btn-success w-100' style={{ backgroundColor: "#6f787f", color: "#ffffff", borderColor: "#6f787f" }}>
                  {isLoading && <i className='fas fa-spinner fa-spin'></i>} Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
