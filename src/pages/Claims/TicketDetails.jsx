import React from 'react';

const TicketDetails = ({ claim }) => {
  if (!claim) return null;

  const { _id,title, status, createdAt, updatedAt, coOwner, messages } = claim;

  return (
    <div className="card" style={{ height: '100%' }}>
      <div className="card-header">
        <h5 className="card-title mb-0">Ticket Details</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
          <table className="table table-borderless align-middle mb-0">
            <tbody>
              <tr>
                <td className="fw-medium">Ticket</td>
                <td>{_id}</td>
              </tr>
              <tr>
                <td className="fw-medium">Client</td>
                <td id="t-client">{coOwner?.name}</td>
              </tr>
              <tr>
                <td className="fw-medium">Title</td>
                <td>{title}</td>
              </tr>
              <tr>
                <td className="fw-medium">Status:</td>
                <td>
                  <select className="form-select" id="t-status" aria-label="Default select example">
                    <option value>Status</option>
                    <option value="opened" selected={status === 'opened'}>Opened</option>
                    <option value="closed" selected={status === 'closed'}>Closed</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="fw-medium">Create Date</td>
                <td id="c-date">{new Date(createdAt).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className="fw-medium">Last Update</td>
                <td id="d-date">{new Date(updatedAt).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className="fw-medium">Messages</td>
                <td>
                  {messages.length > 0 ? (
                    messages.map((msg, index) => (
                      <div key={index}>
                        <strong>{msg.from_syndic ? "Syndic" : "CoOwner"}:</strong>
                        <p>{msg.message}</p>
                        {msg.images.map((image, imgIndex) => (
                          <img key={imgIndex} src={image.path} alt={image.name} style={{ maxWidth: '100%' }} />
                        ))}
                      </div>
                    ))
                  ) : (
                    <p>No messages</p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
