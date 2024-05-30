import React from 'react';

const Comment = ({ imgSrc, name, date, message, replies }) => (
  <div className="d-flex mb-4">
    <div className="flex-shrink-0">
      <img src={imgSrc} alt="" className="avatar-xs rounded-circle" />
    </div>
    <div className="flex-grow-1 ms-3">
      <h5 className="fs-15">{name} <small className="text-muted">{date}</small></h5>
      <p className="text-muted">{message}</p>
      <a href="javascript: void(0);" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</a>
      {replies && replies.length > 0 && (
        <div className="d-flex mt-4">
          {replies.map((reply, index) => (
            <Comment key={index} {...reply} />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Comment;
