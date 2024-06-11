import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosConfig';
import { RiAddCircleFill, RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function InvoiceList() {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axiosInstance.get('/invoices/all');
        console.log('API response:', response.data);
        setInvoices(response.data);
        setFilteredInvoices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching invoices:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/invoices/${id}`);
      const updatedInvoices = invoices.filter(invoice => invoice._id !== id);
      setInvoices(updatedInvoices);
      setFilteredInvoices(updatedInvoices);
    } catch (error) {
      console.error('Error deleting invoice:', error);
    }
  };

  const handleFilter = () => {
    let filtered = invoices;

    if (searchText) {
      filtered = filtered.filter(invoice =>
        invoice.customer.toLowerCase().includes(searchText.toLowerCase()) ||
        invoice.email.toLowerCase().includes(searchText.toLowerCase()) ||
        invoice.country.toLowerCase().includes(searchText.toLowerCase()) ||
        invoice.paymentStatus.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedDate) {
      filtered = filtered.filter(invoice =>
        new Date(invoice.dueDate).toLocaleDateString('en-CA') === selectedDate
      );
    }

    if (selectedStatus) {
      filtered = filtered.filter(invoice =>
        invoice.paymentStatus === selectedStatus
      );
    }

    setFilteredInvoices(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card" style={{ padding: '20px' }}>
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h4 className="card-title mb-0">Invoices</h4>

        <Link
          to="add"
          className="btn btn-primary"
          style={{ marginLeft: 'auto', padding: '8px 16px' }}
        >
          <RiAddCircleFill /> Create Invoice
        </Link>
      </div>
      <div className="card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search for customer, email, country, status or something..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <select
            className="form-control"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            style={{ marginRight: '10px' }}
          >
            <option value="">All</option>
            <option value="PAID">PAID</option>
            <option value="UNPAID">UNPAID</option>
            <option value="REFUND">REFUND</option>
          </select>
          <button type="button" className="btn btn-secondary" onClick={handleFilter}>
            Filters
          </button>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice) => (
              <tr key={invoice._id}>
                <td>{invoice._id}</td>
                <td>{"selma ben sassi"}</td>
                <td>{"selmabensassi987@gmail.com"}</td>
                <td>{new Date(invoice.issueDate).toLocaleDateString()}</td>
                <td>{new Date(invoice.dueDate).toLocaleDateString()}</td>
                <td>{invoice.amount}</td>
                <td>
                  <span className={`badge ${invoice.paymentStatus === 'PAID' ? 'bg-success' : invoice.paymentStatus === 'UNPAID' ? 'bg-warning' : 'bg-info'}`}>
                    {invoice.paymentStatus}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ padding: '4px 8px' }}
                    onClick={() => handleDelete(invoice._id)}
                  >
                    <RiDeleteBin6Line /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <span>Showing 1 to {filteredInvoices.length} of {invoices.length} entries</span>
          <nav>
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
