import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axiosInstance from '../../../../config/axiosConfig';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MeetingOverviewCards = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className={`card card-animate ${item.name === 'Finished Meeting' ? 'bg-primary' : ''}`}>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <p className="text-uppercase fw-medium mb-0">{item.name}</p>
                </div>
                <div className="flex-shrink-0">
                  <h5 className={`text-${item.changeType === 'increase' ? 'success' : 'danger'} fs-14 mb-0`}>
                    <i className={`ri-arrow-right-${item.changeType === 'increase' ? 'up' : 'down'}-line align-middle`}></i> {item.percentageChange}%
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-end justify-content-between mt-4">
                <div>
                  <h4 className="fs-22 fw-semibold ff-secondary mb-4">{item.count} <small className="text-muted">this month</small></h4>
                </div>
                <div className="avatar-sm flex-shrink-0">
                  <span className="avatar-title bg-soft-primary rounded fs-3">
                    <i className={`bx ${item.icon} text-black`}></i> 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const MeetingsHistory = ({ meetings }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(meetings.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMeetings = meetings.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="card card-height-50">
      <div className="card-header align-items-center d-flex">
        <h4 className="card-title mb-0 flex-grow-1">Meeting's History</h4>
        <div className="flex-shrink-0">
          <div className="dropdown card-header-dropdown">
            <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical"></i></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#">Edit</a>
              <a className="dropdown-item" href="#">Remove</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body pt-0">
        <ul className="list-group list-group-flush border-dashed">
          {currentMeetings.map((meeting, index) => (
            <li key={index} className="list-group-item ps-0">
              <Link to={`/syndic-dashboard/syndicate/meetDetails/${meeting.id}`} className="text-primary">
                <div className="row align-items-center g-3">
                  <div className="col-auto">
                    <div className="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                      <div className="text-center">
                        <h5 className="mb-0">{meeting.day}</h5>
                        <div className="text-muted">{meeting.month}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <h5 className="text-muted mt-0 mb-1 fs-13">{meeting.time}</h5>
                    <span className="text-reset fs-14 mb-0">{meeting.description}</span>
                  </div>
                  <div className="col-sm-auto">
                    <div className="avatar-group">
                      {meeting.avatars.map((avatar, i) => (
                        <div key={i} className="avatar-group-item">
                          <img src={`assets/images/users/${avatar}`} alt="" className="rounded-circle avatar-xxs" />
                        </div>
                      ))}
                      <div className="avatar-group-item">
                        <span className="avatar-title rounded-circle bg-info text-white">{meeting.participantCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="align-items-center mt-2 row text-center text-sm-start">
          <div className="col-sm">
            <div className="text-muted">
              Showing {indexOfFirstItem + 1} to {indexOfLastItem > meetings.length ? meetings.length : indexOfLastItem} of {meetings.length} Results
            </div>
          </div>
          <div className="col-sm-auto">
            <ul className="pagination pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0">
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}>{i + 1}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


const AllMeetingsBySubscription = ({ PieData }) => {
  const chartOptions = {
    chart: {
      type: 'pie',
    },
    labels: PieData.map(item => item.label),
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    }
  };

  const series = PieData.map(item => item.value);

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title mb-0">All meetings (by subscription Plan)</h4>
      </div>
      <div className="card-body">
        <ReactApexChart options={chartOptions} series={series} type="pie" height={350} />
      </div>
    </div>
  );
};

const MeetingsVolumeTrend = ({ chartSeries, chartOptions }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title mb-0">Meetings volume trend</h4>
      </div>
      <div className="card-body">
        <ReactApexChart options={chartOptions} series={chartSeries} type="area" height={300} />
      </div>
    </div>
  );
};

const SyndicateActivity = ({ activityData }) => {
  return (
    <div className="card card-height-100">
      <div className="card-header border-bottom-dashed align-items-center d-flex">
        <h4 className="card-title mb-0 flex-grow-1">Syndicate Activity</h4>
        <div className="flex-shrink-0">
          <button type="button" className="btn btn-soft-primary btn-sm">
            View All Activity
          </button>
        </div>
      </div>
      <div className="card-body p-0">
        <div data-simplebar style={{ maxHeight: '364px' }} className="p-3">
          <div className="activity-timeline activity-main">
            {activityData.map((item, index) => (
              <div key={index} className="activity-item d-flex">
                <div className="flex-shrink-0 avatar-xs activity-avatar">
                  <div className="avatar-title rounded-circle bg-secondary">
                    <i className={item.icon}></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="mb-1">{item.title}</h6>
                  <p className="text-muted mb-1">{item.requests} requests</p>
                  <small className="mb-0 text-muted">{item.time}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


 const MeetingManagement = () => {
  const { syndicateId } = useParams();
  const [meetData, setmeetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chartSeries, setChartSeries] = useState([{ name: 'Meetings', data: [] }]);

const fetchSyndicateAdmin = async () => {
  setIsLoading(true);
  try {
    const adminResponse = await axiosInstance.get(`/Syndic/${syndicateId}`);
    const buildings = adminResponse.data?.data?.syndic?.buildings || [];
    console.log("Buildings Data:", buildings);

    const meetingsArrays = await Promise.all(
      buildings.map(buildingId =>
        axiosInstance.get(`/${buildingId}/meets`).then(res => {
          console.log(`Meetings for building ${buildingId}:`, res.data.meets);
          return res.data.meets;
        }).catch(error => {
          console.error(`Error fetching meetings for building ${buildingId}:`, error);
          return []; 
        })
      )
    );

    const allMeetings = meetingsArrays.flat();
    console.log("All Meetings:", allMeetings);

    if (allMeetings.length > 0) {
      setmeetData(allMeetings);
      const monthlyData = aggregateMeetingsByMonth(allMeetings);
      console.log("Monthly Data:", monthlyData);
      setChartSeries([{ name: 'Meetings', data: monthlyData }]);
    } else {
      console.log("No meetings found");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    setError('Failed to fetch data. Please try again later.');
  } finally {
    setIsLoading(false);
  }
};


  const aggregateMeetingsByMonth = (meetings) => {
    const counts = {
        1: 0, 2: 0, 3: 0, 4: 0,
        5: 0, 6: 0, 7: 0, 8: 0,
        9: 0, 10: 0, 11: 0, 12: 0
    };

    meetings.forEach(meeting => {
      const month = new Date(meeting.startDate).getMonth() + 1;
      counts[month]++;
    });
    return Object.entries(counts).map(([month, count]) => ({
      x: month, 
      y: count  
    }));
};

  useEffect(() => {
    fetchSyndicateAdmin();
  }, [syndicateId]);


  const calculateMeetingCounts = () => {
    const counts = {
      upcoming: 0,
      finished: 0,
      canceled: 0
    };
console.log ("meet data :",meetData);
    meetData.forEach(meeting => {
      switch (meeting.status) {
        case 'upcoming':
          counts.upcoming++;
          console.log("upcoming count :",counts.upcoming);
          break;
        case 'finished':
          counts.finished++;
          console.log("finished count :",counts.finished);
          break;
        case 'canceled':
          counts.canceled++;
          console.log("cancelled count :",counts.canceled);
          break;
        default:
          break;
      }
    });

    return counts;
  };

  const data = [
    { name: "Scheduled Meeting", count: calculateMeetingCounts().upcoming, percentageChange: "", changeType: "", icon: "bx-calendar-event" },
    { name: "Finished Meeting", count: calculateMeetingCounts().finished, percentageChange: "", changeType: "", icon: "bx-calendar-check" },
    { name: "Cancelled Meeting", count: calculateMeetingCounts().canceled, percentageChange: "", changeType: "", icon: "bx-block" }
  ];

const meetings = meetData.map(meeting => ({
  id: meeting._id,
  day: new Date(meeting.startDate).getDate(),  
  month: new Date(meeting.startDate).toLocaleString('en-US', { weekday: 'short' }),  
  time: `${new Date(meeting.startDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} - ${new Date(meeting.endDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`,
  description: meeting.description,
  participantCount: meeting.participants ? meeting.participants.length : 0,
  avatars: meeting.participants ? meeting.participants.map(part => part.avatar) : []
}));

  const PieData = [
    { label: "Great", value: 50 },
    { label: "Good", value: 30 },
    { label: "Okay", value: 10 },
    { label: "Poor", value: 7 },
    { label: "Bad", value: 3 }
  ];
 const chartOptions = {
  chart: {
    height: 350,
    type: 'area',
    zoom: {
      enabled: false
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    tickPlacement: 'on'
  },
  yaxis: {
    title: {
      text: 'Number of Meetings'
    }
  },
  tooltip: {
    x: {
      format: 'MMM'
    }
  },
  colors: ['#2E93fA'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  }
};


  const activityData = [
    { icon: 'ri-video-chat-line', title: 'Meeting for campaign', requests: 20, time: '02:14 PM Today' },
  ];

  return (
    <div className="main-content">
      <div className="container-fluid" style={{  paddingLeft: '15px', paddingRight: '15px' }}>
        <div className="row mb-4">
          <div className="col-md-9">
            <div className="page-title-box">
              <h4 className="mb-0">Syndicate Management</h4>
            </div>
          </div>
        </div>
        
        <div className="row">
          <MeetingOverviewCards data={data} />
        </div>
        <div className="row gx-5">
          <div className="col-lg-9 pe-lg-3">
            <MeetingsHistory meetings={meetings} />
          </div>
          <div className="col-lg-3">
            <AllMeetingsBySubscription PieData={PieData} />
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-lg-9 pe-lg-3">
            <MeetingsVolumeTrend chartSeries={chartSeries} chartOptions={chartOptions} />
          </div>
          <div className="col-lg-3">
            <SyndicateActivity activityData={activityData} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MeetingManagement;
