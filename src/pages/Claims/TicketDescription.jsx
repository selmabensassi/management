import React from 'react';

const TicketDescription = ({ claim }) => {
  if (!claim) return null;

  return (
    <div className="card-body p-4">
      <h6 className="fw-semibold text-uppercase mb-3">Ticket Description</h6>
      <p className="text-muted">
        {claim.description}
      </p>
      <h6 className="fw-semibold text-uppercase mb-3">Messages</h6>
      <ul className="text-muted vstack gap-2 mb"/>
      <ul className="text-muted vstack gap-2 mb-4">
        {claim.messages.map((message, index) => (
          <li key={index}>
            <strong>{message.from_syndic ? "Syndic" : "CoOwner"}:</strong> {message.message}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h6 className="fw-semibold text-uppercase mb-3">Images</h6>
        <div>
          {claim.messages.flatMap(msg => msg.images).map((image, index) => (
            <img key={index} src={image.path} alt={image.name} style={{ maxWidth: '100%', marginBottom: '10px' }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketDescription;
