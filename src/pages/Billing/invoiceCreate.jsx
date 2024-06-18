import React, { useState } from 'react';
import axiosInstance from '../../config/axiosConfig';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { RiAddFill, RiPrinterLine, RiDownload2Line, RiSendPlaneFill } from 'react-icons/ri';

function CreateInvoice() {
  const [invoiceData, setInvoiceData] = useState({
    syndicateID: '',
    amount: '',
    issueDate: '',
    dueDate: '',
    paymentStatus: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInvoiceData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/invoices', invoiceData);
      console.log('Invoice created successfully', response.data);

      // Show success message
      setShowSuccessMessage(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error('Error creating invoice', error);
    }
  };

  const handleSendInvoice = async () => {
    const email = prompt('Enter email address:');
    try {
      console.log('invoice data :',invoiceData)
      const response = await axiosInstance.post('/invoices/send', { email, invoiceData });
      
      console.log('Invoice sent successfully', response.data);
    } catch (error) {
      console.error('Error sending invoice', error);
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add logo
    doc.addImage('/images/logo.png', 'PNG', 10, 10, 50, 20);

    // Add invoice title
    doc.setFontSize(20);
    doc.text('Invoice', 105, 20, null, null, 'center');

    // Add company details
    doc.setFontSize(12);
    doc.text('Data-Era', 10, 40);
    doc.text('Address: Tunis, Tunisia ', 10, 50);
    doc.text('Email: info@data-era.com', 10, 70);
    doc.text('Website: www.data-era.com', 10, 80);
    doc.text('Contact No: 0123456789', 10, 90);

    // Add invoice details
    doc.text(`Invoice No: ${invoiceData.syndicateID}`, 150, 40);
    doc.text(`Date: ${invoiceData.issueDate}`, 150, 50);
    doc.text(`Payment Status: ${invoiceData.paymentStatus}`, 150, 60);
    doc.text(`Total Amount: $${invoiceData.amount}`, 150, 70);

    // Add billing and shipping address
    doc.text('Billing Address:', 10, 100);

    // Add table
    doc.autoTable({
      startY: 120,
      head: [['#', 'Product Details', 'Rate', 'Quantity', 'Amount']],
      body: [
        [1, 'Subscription Plan', `$${invoiceData.amount}`, 1, `$${invoiceData.amount}`],
      ],
    });

    doc.save(`invoice-${invoiceData.syndicateID}.pdf`);
  };

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Create Invoice</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="#">Invoices</a></li>
                    <li className="breadcrumb-item active">Create Invoice</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-9">
              <div className="card">
                <form className="needs-validation" noValidate id="invoice_form" onSubmit={handleSubmit}>
                  <div className="card-body border-bottom border-bottom-dashed p-4">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="profile-user mx-auto mb-3">
                          <label htmlFor="profile-img-file-input" className="d-block" tabIndex="0">
                            <span className="overflow-hidden border border-dashed d-flex align-items-center justify-content-center rounded" style={{ height: '60px', width: '256px' }}>
                              <img src="/images/logo.png" className="card-logo card-logo-dark user-profile-image img-fluid" alt="logo dark" />
                            </span>
                          </label>
                        </div>
                        <div className="mb-2">
                          <label htmlFor="syndicateID" className="form-label">Syndicate ID</label>
                          <input type="text" className="form-control bg-light border-0" id="syndicateID" placeholder="Syndicate ID" value={invoiceData.syndicateID} onChange={handleChange} required />
                          <div className="invalid-feedback">Please enter a syndicate ID</div>
                        </div>
                        <div className="mb-2">
                          <label htmlFor="amount" className="form-label">Amount</label>
                          <input type="number" className="form-control bg-light border-0" id="amount" placeholder="Amount" value={invoiceData.amount} onChange={handleChange} required />
                          <div className="invalid-feedback">Please enter the amount</div>
                        </div>
                      </div>
                      <div className="col-lg-4 ms-auto">
                        <div className="mb-2">
                          <label htmlFor="issueDate" className="form-label">Issue Date</label>
                          <input type="date" className="form-control bg-light border-0" id="issueDate" value={invoiceData.issueDate} onChange={handleChange} required />
                          <div className="invalid-feedback">Please enter the issue date</div>
                        </div>
                        <div className="mb-2">
                          <label htmlFor="dueDate" className="form-label">Due Date</label>
                          <input type="date" className="form-control bg-light border-0" id="dueDate" value={invoiceData.dueDate} onChange={handleChange} required />
                          <div className="invalid-feedback">Please enter the due date</div>
                        </div>
                        <div className="mb-2">
                          <label htmlFor="paymentStatus" className="form-label">Payment Status</label>
                          <select className="form-control bg-light border-0" id="paymentStatus" value={invoiceData.paymentStatus} onChange={handleChange} required>
                            <option value="">Select Payment Status</option>
                            <option value="Paid">Paid</option>
                            <option value="Unpaid">Unpaid</option>
                            <option value="Refund">Refund</option>
                          </select>
                          <div className="invalid-feedback">Please select the payment status</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                      <button type="submit" className="btn btn-success"><RiPrinterLine /> Save</button>
                      <button type="button" className="btn btn-primary" onClick={handleDownloadPDF}><RiDownload2Line /> Download Invoice</button>
                      <button type="button" className="btn btn-danger" onClick={handleSendInvoice}><RiSendPlaneFill /> Send Invoice</button>
                    </div>
                  </div>
                </form>
                {showSuccessMessage && (
                  <div className="alert alert-success mt-4" role="alert">
                    Invoice created successfully!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateInvoice;
