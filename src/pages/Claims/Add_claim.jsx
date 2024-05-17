import React, { useState } from 'react';
import axiosInstance from '../../config/axiosConfig';


const AddClaim = ({ handleClose }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);

  const handleImagesChange = (event) => {
    setImages(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('message', message);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]); 
    }

    const building_id = '65e8c16b40b8b3418ee6a075';

    try {
      const response = await axiosInstance.post(`/${building_id}/claims`, formData);

      if (response.data.success) {
        alert('Claim created successfully!');
        handleClose();
      }
    } catch (error) {
      console.error('There was an error creating the claim!', error);
    }
  };

  return (
    <div className="modal fade show d-block" id="showModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0">
          <div className="modal-header p-3 bg-soft-info">
            <h5 className="modal-title" id="exampleModalLabel">Add Claim</h5>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <form className="tablelist-form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-lg-12">
                  <div id="modal-id">
                    <label htmlFor="orderId" className="form-label">ID</label>
                    <input type="text" id="orderId" className="form-control" placeholder="ID" value="#VLZ462" readOnly />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div>
                    <label htmlFor="tasksTitle-field" className="form-label">Title</label>
                    <input type="text" id="tasksTitle-field" className="form-control" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div>
                    <label htmlFor="tasksMessage-field" className="form-label">Message</label>
                    <textarea id="tasksMessage-field" className="form-control" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div>
                    <label htmlFor="tasksFiles-field" className="form-label">Files</label>
                    <input type="file" id="tasksFiles-field" className="form-control" multiple onChange={handleImagesChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="hstack gap-2 justify-content-end">
                <button type="button" className="btn btn-light" onClick={handleClose}>Close</button>
                <button type="submit" className="btn btn-success">Add Ticket</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClaim;