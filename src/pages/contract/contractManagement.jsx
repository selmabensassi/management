import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosConfig';
import ReactApexChart from 'react-apexcharts';

const UserCards = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-3 me-3">
          <div className="card h-100">
            <div className="card-body">
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

function RevenueHistory({ data }) {
  const chartData = {
    series: [{
      name: "Revenue",
      data: data 
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

function ActiveContractsByType({ data }) {
  const contractTypes = Array.from(new Set(data.flatMap(contract => contract.subscription.map(sub => sub.subscriptionType))));
  const contractCounts = contractTypes.map(type => data.filter(contract => 
    contract.subscription.some(sub => sub.subscriptionType === type)
  ).length);

  const chartData = {
    series: [{
      name: 'Contracts',
      data: contractCounts
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
          endingShape: 'rounded'
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
        categories: contractTypes,
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


function ContractList({ contracts, onDelete }) {
  const handleAutoRenewToggle = (contractId, currentStatus) => {
    axiosInstance.patch(`/payment/${contractId}`, { autoRenew: !currentStatus })
      .then(response => {
        console.log('Auto-renew status updated');
        setContracts(prevContracts =>
          prevContracts.map(contract =>
            contract._id === contractId ? { ...contract, autoRenew: !currentStatus } : contract
          )
        );
      })
      .catch(error => console.error('Error updating auto-renew status:', error));
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
            {Array.isArray(contracts) && contracts.map((contract) => (
              <tr key={contract._id}>
                <td>{contract._id}</td>
                <td>{contract.syndic[0]?.first_name} {contract.syndic[0]?.last_name}</td>
                <td>{contract.amount}</td>
                <td>{new Date(contract.createdAt).toLocaleDateString()}</td>
                <td>{new Date(contract.createdAt).toLocaleDateString()}</td>
                <td>
                  <span className={`badge ${contract.status === 'paid' ? 'bg-success' : 'bg-warning'}`}>
                    {contract.status}
                  </span>
                </td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={contract.autoRenew}
                      onChange={() => handleAutoRenewToggle(contract._id, contract.autoRenew)}
                    />
                  </div>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={() => alert('Edit function not implemented')}>
                    Edit
                  </button>
                  {' '}
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(contract._id)}>
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
  const [userCardsData, setUserCardsData] = useState([
  ]);
  const [revenueHistoryData, setRevenueHistoryData] = useState([]);
  const [activeContractsData, setActiveContractsData] = useState([]);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
     axiosInstance.get('/payment/payments')
    .then(response => {
      const payments = response.data.payments; 
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const totalCreditCardPayments = payments.length;
      const currentMonthRevenue = payments
        .filter(payment => {
          const paymentDate = new Date(payment.createdAt);
          return paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear;
        })
        .reduce((acc, payment) => acc + payment.amount, 0);

      setRevenueHistoryData(payments.map(payment => payment.amount)); 
      setUserCardsData([
        { name: `${new Date().toLocaleString('default', { month: 'long' })} Revenue`, count: currentMonthRevenue },
         { name: "Credit Card Payments", count: totalCreditCardPayments }, 
        
      ]);
    })
    .catch(error => console.error('Error fetching revenue data:', error));


  axiosInstance.get('/payment/payments')
    .then(async response => {
      const payments = response.data.payments; 
      console.log('payments data:', payments[0].syndic);
      const contractsData = await Promise.all(payments);
      console.log('contracts Data:', contractsData);
        setActiveContractsData(contractsData); 
        setContracts(contractsData);
    })
    .catch(error => console.error('Error fetching payments data:', error));
}, []);

  const handleDelete = (contractId) => {
    setContracts(contracts.filter(contract => contract.id !== contractId));
  };

  return (
    <div className="main-content">
      <div className="container-fluid" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <div className="row mb-4">
          <div className="col-md-9">
            <div className="page-title-box">
              <h4 className="mb-0">Contract Management</h4>
            </div>
          </div>
        </div>
        
        <div className="row">
          <UserCards data={userCardsData} />
        </div>
        <div className="row gx-5">
          <div className="col-lg-9 pe-lg-3">
            <RevenueHistory data={revenueHistoryData} />
          </div>
          <div className="col-lg-3">
            <ActiveContractsByType data={activeContractsData} />
          </div>
        </div>
        <div className="row">
          <ContractList contracts={contracts} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
