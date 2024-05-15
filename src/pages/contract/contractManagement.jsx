import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const UserCards = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="card h-100">
            <div className="card-body ">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="text-muted mb-2">{item.name}</h6>
                  <h2 className="fw-bold mb-0">{item.count}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
function RevenueHistory() {
    const chartData = {
        series: [{
            name: "Revenue",
            data: [45000, 47000, 50000, 55000, 53000, 58000, 60000, 63000]
        }],
        options: {
            chart: {
                type: 'line',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Monthly Revenue History',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], 
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            }
        },
    };

    return (
        <div className="col-xl-12">
            <div className="card">
                <div className="card-header">
                    <h4>Revenue History</h4>
                </div>
                <div className="card-body">
                    <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
                </div>
            </div>
        </div>
    );
}
function ActiveContractsByType() {
    const chartData = {
        series: [{
            name: 'Contracts',
            data: [44, 55, 41, 64, 22, 43, 21] // Example data for contract types
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded' // Optional for styling
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Type A', 'Type B', 'Type C', 'Type D', 'Type E', 'Type F', 'Type G'], // Example contract types
            },
            yaxis: {
                title: {
                    text: 'Active Contracts'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " contracts"
                    }
                }
            }
        },
    };

    return (
        <div className="col-xl-12">
            <div className="card">
                <div className="card-header">
                    <h4>Active Contracts by Type</h4>
                </div>
                <div className="card-body">
                    <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
                </div>
            </div>
        </div>
    );
}
 function ContractList() {
    const [contracts, setContracts] = useState([
        { id: 'C001', customer: 'Alice Blue', amount: '$5000', startDate: '2023-01-01', nextChargeDate: '2023-12-01', status: 'Active', autoRenew: true },
        { id: 'C002', customer: 'Bob Smith', amount: '$3000', startDate: '2023-02-15', nextChargeDate: '2024-02-15', status: 'Paused', autoRenew: false },
        { id: 'C003', customer: 'Charlie Doe', amount: '$4500', startDate: '2023-03-20', nextChargeDate: '2024-03-20', status: 'Active', autoRenew: true }
    ]);

    const handleDelete = (contractId) => {
        // Implement delete functionality
        setContracts(contracts.filter(contract => contract.id !== contractId));
    };

    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Contracts</h4>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Contract ID</th>
                            <th>Customer Name</th>
                            <th>Amount</th>
                            <th>Start Date</th>
                            <th>Next Charge Date</th>
                            <th>Status</th>
                            <th>Auto Renew</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contracts.map((contract) => (
                            <tr key={contract.id}>
                                <td>{contract.id}</td>
                                <td>{contract.customer}</td>
                                <td>{contract.amount}</td>
                                <td>{new Date(contract.startDate).toLocaleDateString()}</td>
                                <td>{new Date(contract.nextChargeDate).toLocaleDateString()}</td>
                                <td>
                                    <span className={`badge ${contract.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                                        {contract.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" checked={contract.autoRenew} readOnly />
                                    </div>
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-sm" onClick={() => alert('Edit function not implemented')}>
                                        Edit
                                    </button>
                                    {' '}
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(contract.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default function ContractManagement() {

    const data = [
    { name: "October Revenue", count: 0, percentageChange: "", changeType: "", },
    { name: "Credit Card Payments", count: 0, percentageChange: "", changeType: "", },
    { name: "Hired", count:0, percentageChange: "", changeType: "",  }
  ];
  
    return (
    <div className="main-content">
      <div className="container-fluid" style={{  paddingLeft: '15px', paddingRight: '15px' }}>
        <div className="row mb-4">
          <div className="col-md-9">
            <div className="page-title-box">
              <h4 className="mb-0">Contract Management</h4>
            </div>
          </div>
        </div>
        
        <div className="row">
           <UserCards data={data} />
        </div>
        <div className="row gx-5">
          <div className="col-lg-9 pe-lg-3">
            <RevenueHistory />
          </div>
          <div className="col-lg-3">
            <ActiveContractsByType />
          </div>
        </div>
          <div className="row">
           <ContractList />
        </div>
      </div>
    </div>
  );
}

