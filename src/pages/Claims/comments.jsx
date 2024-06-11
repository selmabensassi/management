import React, { useState, useRef, useEffect } from 'react';
import axiosInstance from '../../config/axiosConfig';
import { useParams } from 'react-router-dom';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaPhotoVideo } from 'react-icons/fa';
import { FiCamera } from 'react-icons/fi';

const Comments = ({ claim }) => {
  const { building_id, claim_id } = useParams();
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(claim?.messages || []);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  // Function to fetch comments from the backend
  const fetchComments = async () => {
    try {
            const building_id = '65e8c16b40b8b3418ee6a075';

      const response = await axiosInstance.get(`/${building_id}/claims/${claim_id}`);
      if (response.data.success) {
        setComments(response.data.claim.messages);
      } else {
        console.error('Failed to fetch comments: Unexpected response format');
      }
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    }
  };

  // Fetch comments periodically
  useEffect(() => {
    const interval = setInterval(fetchComments, 5000); // Fetch comments every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [building_id, claim_id]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('message', newComment);
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const building_id = '65e8c16b40b8b3418ee6a075';
      const response = await axiosInstance.post(`/${building_id}/claims/${claim_id}`, formData);
      if (response.data.success) {
        await fetchComments();
        setNewComment('');
        setImages([]);
      } else {
        console.error('Failed to post comment: Unexpected response format');
      }
    } catch (error) {
      console.error('Failed to post comment:', error);
    }
  };

  return (
    <div className="card-body">
      <h5 className="card-title">Comments</h5>
      <ul className="list-unstyled">
        {comments.map((comment, index) => (
          <li key={index} className="media mb-3">
            <div className="media-body">
              <div>
                <strong>{comment.from_syndic ? 'Syndic' : 'CoOwner'}</strong>
                <small className="text-muted"> - {new Date().toLocaleString()}</small>
              </div>
              <p>{comment.message}</p>
              {comment.images.map((image, imgIndex) => (
                <img key={imgIndex} src={image.path} alt={image.name} style={{ maxWidth: '100px', margin: '5px' }} />
              ))}
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Enter comments"
            value={newComment}
            onChange={handleCommentChange}
            required
          />
        </div>
        <div className="d-flex align-items-center my-2">
          <input
            type="file"
            ref={fileInputRef}
            multiple
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button type="button" className="btn btn-light me-2" onClick={() => fileInputRef.current.click()}>
            <FaPhotoVideo />
          </button>
          <button type="button" className="btn btn-light me-2" onClick={() => fileInputRef.current.click()}>
            <FiCamera />
          </button>
        </div>
        {images.length > 0 && (
          <div className="mb-3">
            {images.map((image, index) => (
              <div key={index} className="d-inline-block position-relative me-2 mb-2">
                <img src={URL.createObjectURL(image)} alt={image.name} style={{ maxWidth: '100px' }} />
                <button
                  type="button"
                  className="btn btn-sm btn-danger position-absolute top-0 end-0"
                  onClick={() => setImages(images.filter((img, imgIndex) => imgIndex !== index))}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          <RiSendPlaneFill /> Post Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
