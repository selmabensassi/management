import React from 'react';

const TicketDescription = ({ claim }) => {
  if (!claim) return null;

  return (
    <div className="card-body p-4">
      <h6 className="fw-semibold text-uppercase mb-3">Ticket Description</h6>
      <p className="text-muted">
      <ul className="text-muted vstack gap-2 mb-4">
  {claim.messages.length > 0 && (
    <li key={0}>
      <strong>{claim.messages[0].from_syndic ? "" : ""}</strong> {claim.messages[0].message}
    </li>
  )}
</ul>
      </p>
      
    </div>
  );
};

export default TicketDescription;
