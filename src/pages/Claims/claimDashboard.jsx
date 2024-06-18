import ClaimList from './claimList';
import AddClaim from './Add_claim';
import React, {useRef, useState, useEffect } from 'react';
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
                  <p className="mb-0 text-muted">
                    <span className={`badge ${card.badgeClass} mb-0`}>
                      <i className={`${card.arrowClass} align-middle`}></i> {card.change}
                    </span> vs. previous month
                  </p>
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

// const UnresolvedTicketsByPriority = () => {
//   const series = [
//     { name: 'PRODUCT A', data: [44, 55, 41, 67, 22, 43, 21] },
//     { name: 'PRODUCT B', data: [13, 23, 20, 8, 13, 27, 22] },
//     { name: 'PRODUCT C', data: [11, 17, 15, 15, 21, 14, 13] },
//     { name: 'PRODUCT D', data: [21, 7, 25, 13, 22, 8, 13] },
//   ];

//   const options = {
//     chart: {
//       type: 'bar',
//       height: 350,
//       stacked: true,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//       },
//     },
//     xaxis: {
//       type: 'datetime',
//       categories: ['01/01/2021', '02/01/2021', '03/01/2021', '04/01/2021', '05/01/2021', '06/01/2021', '07/01/2021'],
//     },
//     legend: {
//       position: 'top',
//     },
//     fill: {
//       opacity: 1,
//     },
//   };

//   return (
//     <div className="col-xl-6">
//       <div className="card">
//         <div className="card-header">
//           <h4 className="card-title mb-0">Unresolved Tickets by Priority</h4>
//         </div>
//         <div className="card-body">
//           <ReactApexChart options={options} series={series} type="bar" height={350} />
//         </div>
//       </div>
//     </div>
//   );
// };

const NumberOfTickets = ({ series, total }) => {
  console.log('Series data:', series);
  console.log('Total:', total);

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

  const handleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const building_id = '65e8c16b40b8b3418ee6a075';
        const response = await axiosInstance.get(`/${building_id}/claims`);
        console.log("claim data:", response);
        const claims = response.data.claims;

        const totalTickets = claims.length;
        const openTickets = claims.filter(claim => claim.status === 'opened').length;
        const closedTickets = claims.filter(claim => claim.status === 'closed').length;
        const newTickets = claims.filter(claim => claim.status === 'new').length;
        const inprogressTickets = claims.filter(claim => claim.status === 'inprogress').length;
        const deletedTickets = 0; 

        setStats([
          { title: "Total Tickets", count: totalTickets, change: "17.32%", icon: "ri-ticket-2-line", badgeClass: "bg-light text-success", arrowClass: "ri-arrow-up-line" },
          { title: "Pending Tickets", count: openTickets, change: "0.96%", icon: "mdi mdi-timer-sand", badgeClass: "bg-light text-danger", arrowClass: "ri-arrow-down-line" },
          { title: "Closed Tickets", count: closedTickets, change: "3.87%", icon: "ri-shopping-bag-line", badgeClass: "bg-light text-danger", arrowClass: "ri-arrow-down-line" },
          { title: "Deleted Tickets", count: deletedTickets, change: "1.09%", icon: "ri-delete-bin-line", badgeClass: "bg-light text-success", arrowClass: "ri-arrow-up-line" },
        ]);

        setTicketCounts([openTickets, inprogressTickets, closedTickets, newTickets]); 
        setTotalTickets(totalTickets);
      } catch (error) {
        console.error('Error fetching claims:', error.response ? error.response.data : error.message);
      }
    };

    fetchClaims();
  }, []);

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
            {/* <UnresolvedTicketsByPriority /> */}
            <NumberOfTickets series={ticketCounts} total={totalTickets} />
          </div>
          <ClaimList onAddClick={handleAddModal} />
          {showAddModal && <AddClaim handleClose={handleAddModal} />}
        </div>
      </div>
    </div>
  );
};
export default Claim;