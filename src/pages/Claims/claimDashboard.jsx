import React, { useState, useEffect, useRef } from 'react';
import ClaimList from './claimList';
import AddClaim from './Add_claim';
import ReactApexChart from 'react-apexcharts';
import axiosInstance from '../../config/axiosConfig';

const UserCards = ({ stats }) => {
  return (
    <div className="row">
      {stats.map((card, index) => (
        <div className="col-xxl-3 col-sm-6" key={index}>
          <div className="card card-animate">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-medium text-muted mb-0">{card.title}</p>
                  <h2 className="mt-4 ff-secondary fw-semibold">
                    <span className="counter-value" data-target={card.count}>{card.count}</span>
                  </h2>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className={`avatar-title bg-soft-info text-info rounded-circle fs-4`}>
                      <i className={card.icon}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const NumberOfTickets = ({ series, total }) => {
  const chartRef = useRef(null);

  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: () => `${total}`,
          },
        },
      },
    },
    labels: ['Open', 'Inprogress', 'Closed', 'New'],
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.updateOptions({
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                formatter: () => `${total}`,
              },
            },
          },
        },
      });
    }
  }, [total]);

  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title mb-0">Number of Tickets</h4>
        </div>
        <div className="card-body">
          <ReactApexChart ref={chartRef} options={options} series={series} type="radialBar" height={350} />
        </div>
      </div>
    </div>
  );
};

const Claim = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [stats, setStats] = useState([]);
  const [ticketCounts, setTicketCounts] = useState([0, 0, 0, 0]);
  const [totalTickets, setTotalTickets] = useState(0);
  const [deletedTickets, setDeletedTickets] = useState(() => {
    const savedCount = localStorage.getItem('deletedTickets');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const handleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const handleDelete = () => {
    setDeletedTickets(prevDeleted => {
      const newCount = prevDeleted + 1;
      localStorage.setItem('deletedTickets', newCount);
      return newCount;
    });
  };

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await axiosInstance.get(`/all`);
        const claims = response.data.claims;

        const totalTickets = claims.length;
        const openTickets = claims.filter(claim => claim.status === 'opened').length;
        const closedTickets = claims.filter(claim => claim.status === 'closed').length;
        const newTickets = claims.filter(claim => claim.status === 'new').length;
        const inprogressTickets = claims.filter(claim => claim.status === 'inprogress').length;

        setStats([
          { title: "Total Tickets", count: totalTickets, icon: "ri-ticket-2-line", },
          { title: "Pending Tickets", count: openTickets,  icon: "mdi mdi-timer-sand",  },
          { title: "Closed Tickets", count: closedTickets,  icon: "ri-shopping-bag-line",  },
          { title: "Deleted Tickets", count: deletedTickets, icon: "ri-delete-bin-line", },
        ]);

        setTicketCounts([openTickets, inprogressTickets, closedTickets, newTickets]); 
        setTotalTickets(totalTickets);
      } catch (error) {
        console.error('Error fetching claims:', error.response ? error.response.data : error.message);
      }
    };

    fetchClaims();
  }, [deletedTickets]); // Add deletedTickets as a dependency to re-fetch when a ticket is deleted

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Support Tickets</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="javascript: void(0);">Navigation</a></li>
                    <li className="breadcrumb-item active">Support Tickets</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <UserCards stats={stats} />
            <NumberOfTickets series={ticketCounts} total={totalTickets} />
          </div>
          <ClaimList onDelete={handleDelete} />
          {showAddModal && <AddClaim handleClose={handleAddModal} />}
        </div>
      </div>
    </div>
  );
};

export default Claim;
