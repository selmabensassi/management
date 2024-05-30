import React from 'react';

const Avatar = ({ src }) => (
  <div className="avatar-md mb-md-0 mb-4">
    <div className="avatar-title bg-white rounded-circle">
      <img src={src} alt="" className="avatar-sm" />
    </div>
  </div>
);

export default Avatar;
