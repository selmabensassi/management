import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axiosInstance from '../../config/axiosConfig';
import InvoiceList from './invoiceList';

const InvoiceCards = ({ InvoiceData }) => {
  return (
    <div className="row">
      { InvoiceData.map((item, index) => (
        <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="card h-100">
            <div className="card-body ">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="text-muted mb-2">{item.title}</h6>
                  <h2 className="fw-bold mb-0">{item.count}</h2>
                  <small className="text-muted">{item.changeType}</small>
                </div>
                <div className="icon-circle bg-light text-primary">
                  <i className={`bx ${item.icon} bx-sm`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default function InvoiceManagement  ()  {
    const InvoiceData = [
  {
    title: "INVOICES SENT ", count: 1, changeType: " ", icon: "ri-file-text-line"
  },
  {
    title: "PAID INVOICES",count: 0,changeType: " ",icon: "ri-check-square-line"
  },
  {
    title: "UNPAID INVOICES", count:0, changeType: " ",  icon: "ri-time-line",
  },
  { title: "CANCELLED INVOICES", count: 0, changeType: " ",  icon: "ri-close-circle-line",
  }
];

    return (
        <div className="main-content">
      <div className="container-fluid">
        <div className="row mb-4">
          <InvoiceCards  InvoiceData={ InvoiceData} />
        </div>
        < InvoiceList />
      </div>
    </div>
    );
}

