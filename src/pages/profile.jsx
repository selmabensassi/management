import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../config/axiosConfig';
import AuthContext from '../contexts/auth-context';
import Button from 'react-bootstrap/Button';
import Alert from '../components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const { register, handleSubmit, setValue, formState } = useForm();

  const { errors } = formState;

  useEffect(() => {
    if (user) {
      Object.keys(user).forEach(field => setValue(field, user[field]));
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);
    setMessage(null);

    try {
      console.log('Data sent:', data); 
      const response = await axiosInstance.put('/auth/update', data);
      setUser(response.data.user);
      setMessage('Profile updated successfully.');
    } catch (e) {
      if (e.response) {
        setError(e.response.data.message || 'An error occurred. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
      console.log('Error:', e.response ? e.response.data : e);
    }
    setIsLoading(false);
  };

  return (
    <div className="container mt-4">
      <div className="bg-primary text-white p-4 rounded mb-4">
        <div className="row align-items-center">
          <div className="col-auto">
            <img src={user?.profilePicture || 'assets/images/users/avatar-1.jpg'} alt="user-img" className="img-thumbnail rounded-circle" width="100" height="100" />
          </div>
          <div className="col">
            <h3>{user?.firstName} {user?.lastName}</h3>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">Edit Profile Information</h5>
          {message && <Alert type='success'>{message}</Alert>}
          {error && <Alert type='error'>{error}</Alert>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                {...register('firstName')}
              />
              {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                {...register('lastName')}
              />
              {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                {...register('email')}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Profile Picture URL</label>
              <input
                type="text"
                className="form-control"
                {...register('profilePicture')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                {...register('password')}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading && <i className="fas fa-spinner fa-spin"></i>} Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
