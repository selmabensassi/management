import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import axiosInstance from '../../../../config/axiosConfig';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export default function AddSyndicateModal({ show, handleClose }) {
  const [syndicate, setSyndicate] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    type: 'co-owner',
    phone_number: {
      country_code: '',
      number: ''
    },
    buildings: [],
    apartments: [],
    onesignal_tokens: []
  });

  const handlePhoneNumberChange = (value) => {
    if (value) {
      const phoneNumber = parsePhoneNumberFromString(value);
      if (phoneNumber) {
        setSyndicate(prevState => ({
          ...prevState,
          phone_number: {
            country_code: phoneNumber.countryCallingCode,
            number: phoneNumber.nationalNumber
          }
        }));
      }
    } else {
      setSyndicate(prevState => ({
        ...prevState,
        phone_number: {
          country_code: '',
          number: ''
        }
      }));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSyndicate(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/Syndic', syndicate);
      console.log('Syndicate Added:', syndicate);
      handleClose();
    } catch (error) {
      console.error('Error adding syndicate:', error);
    }
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-light p-3">
            <h5 className="modal-title">Add Syndicate</h5>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
<div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" name="first_name" value={syndicate.first_name} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" name="last_name" value={syndicate.last_name} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={syndicate.email} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={syndicate.password} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Type</label>
                <select className="form-control" name="type" value={syndicate.type} onChange={handleInputChange} required>
                  <option value="co-owner">Co-Owner</option>
                  <option value="pro">Pro</option>
                </select>
              </div>              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={`+${syndicate.phone_number.country_code}${syndicate.phone_number.number}`}
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" onClick={handleClose}>Close</button>
              <button type="submit" className="btn btn-success">Add Syndicate</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
