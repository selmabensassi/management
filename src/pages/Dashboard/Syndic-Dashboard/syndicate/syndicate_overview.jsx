import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { countries } from 'country-data';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'leaflet/dist/leaflet.css';
import SyndicateList from '../syndicate/syndicate_list';
import axiosInstance from '../../../../config/axiosConfig';

const UserCards = ({ categories }) => {
  return (
    <>
      {categories.map((category, idx) => (
        <div key={idx} className="col-xl-3 col-md-6">
          <div className={`card card-animate ${category.name === 'Active USERS' ? 'bg-primary' : ''}`}>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <p className="text-uppercase fw-medium text-muted mb-0">{category.name}</p>
                </div>
                <div className="flex-shrink-0">
                  <h5 className={`text-${category.changeType === 'increase' ? 'success' : 'danger'} fs-14 mb-0`}>
                    <i className={`ri-arrow-right-${category.changeType === 'increase' ? 'up' : 'down'}-line fs-13 align-middle`}></i> {category.percentageChange}%
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-end justify-content-between mt-4">
                <div>
                  <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="341">{category.userCount}</span></h4>
                </div>
                <div className="avatar-sm flex-shrink-0">
                  <span className="avatar-title bg-soft-primary rounded fs-3">
                    <i className={`ri-${category.icon} text-primary`}></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const MapChart = ({ syndicateData }) => {
  const center = [33.8439408, 9.400138];
const zoom = 2;
  const [markers, setMarkers] = useState([]);
  const [countryCounts, setCountryCounts] = useState([]);
  const [totalAdmins, setTotalAdmins] = useState(0);

  const getCountryDetailsFromCode = (countryCode) => {
    const country = countries.all.find(c => c.countryCallingCodes.includes('+' + countryCode));
    return {
      name: country.name,
    };
  };

  const getCountryCoordinates = async (countryName) => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: countryName,
          format: 'json',
          limit: 1,
        },
      });
      return response.data && response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
      console.error('Error fetching coordinates for country:', error);
      return null;
    }
  };

  useEffect(() => {
    const updateMarkersAndData = async () => {
      let tempData = {};
      let total = 0;

      const promises = syndicateData.map(async (syndicate) => {
        const countryCode = syndicate.phone_number?.country_code;
        if (countryCode) {
          const countryDetails = getCountryDetailsFromCode(countryCode);
          if (countryDetails && countryDetails.name) {
            const coordinates = await getCountryCoordinates(countryDetails.name);
            if (coordinates) {
              tempData[countryDetails.name] = (tempData[countryDetails.name] || 0) + 1;
              total += 1;

              return {
                name: countryDetails.name,
                coordinates: [coordinates.lat, coordinates.lon]
              };
            }
          }
        }
        return null;
      });

      const resolvedMarkers = await Promise.all(promises);
      setMarkers(resolvedMarkers.filter(marker => marker !== null));
      setTotalAdmins(total);
      setCountryCounts(Object.keys(tempData).map(key => ({
        name: key,
        count: tempData[key],
        percentage: (tempData[key] / total * 100).toFixed(2)
      })));
    };

    updateMarkersAndData();
  }, [syndicateData]);

  return (
    <div className="card" style={{ height: 'auto', width: '100%' }}>
      <div className="card-header">
        <h4 className="card-title mb-0 flex-grow-1">Top Countries By Users</h4>
        <button type="button" className="btn btn-soft-primary btn-sm">Export Report</button>
      </div>
      <div className="card-body" style={{ overflowY: 'auto', }}>
<MapContainer 
          center={center} 
          zoom={zoom} 
          style={{ height: '400px', width: '100%' }}  
          scrollWheelZoom={false}  
          doubleClickZoom={false}  
          dragAndDrop={false}  
          dragging={false}
          touchZoom={false}  
        >          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.coordinates}>
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
        {countryCounts.map(country => (
          <div key={country.name}>
            <h5>{country.name} - {country.percentage}%</h5>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: `${country.percentage}%` }} aria-valuenow={country.percentage} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const PieChart = ({ syndicateData }) => {
  const [coOwnerCount, setCoOwnerCount] = useState(0);
  const [proCount, setProCount] = useState(0);

  useEffect(() => {
    let coOwner = 0;
    let pro = 0;

    if (syndicateData && syndicateData.length > 0) {
      syndicateData.forEach(syndicate => {
        if (syndicate.type === 'co-owner') {
          coOwner++;
        } else if (syndicate.type === 'pro') {
          pro++;
        }
      });
    }

    setCoOwnerCount(coOwner);
    setProCount(pro);
  }, [syndicateData]);

  const series = [coOwnerCount, proCount];
  const labels = ['Co-Owner', 'Professional'];

  return (
    <div className="card" style={{ height: '500px', width: '100%' }}>
      <div className="card-header">
        <h4 className="card-title mb-0">Syndicate Type</h4>
      </div>
      <div className="card-body">
        <ReactApexChart
          type="donut"
          series={series}
          options={{
            labels,
            legend: {
              show: true,
              position: 'bottom'
            },
            dataLabels: {
              enabled: true
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      label: 'Total'
                    }
                  }
                }
              }
            }
          }}
          height={350}
        />
      </div>
    </div>
  );
};

const UserSubscriptions = () => {
  const [chartData, setChartData] = useState({
    categories: [],
    series: []
  });

  useEffect(() => {
    const fetchSubscriptionData = async () => {
      try {
        const response = await axiosInstance.get('/subscriptions/all'); 
        const data = transformData(response.data);
        setChartData(data);
      } catch (error) {
        console.error('Failed to fetch subscription data:', error);
      }
    };

    fetchSubscriptionData();

  }, []);
   

  const transformData = (subscriptions) => {
    const countsByMonth = {};
    subscriptions.forEach(sub => {
      const month = new Date(sub.joiningDate).toLocaleString('default', { month: 'short', year: 'numeric' });
      countsByMonth[month] = (countsByMonth[month] || 0) + 1;
    });

    const categories = Object.keys(countsByMonth);
    const seriesData = Object.values(countsByMonth);

    return {
      series: [{ name: "Subscriptions", data: seriesData }],
      categories
    };
  };

  return (
    <div className="card" style={{ height: '500px', width: '100%' }}>
      <div className="card-header">
        <h4 className="card-title mb-0">User Subscriptions</h4>
      </div>
      <div className="card-body">
        <ReactApexChart
          options={{
            chart: {
              height: 350,
              type: 'line',
            },
            xaxis: {
              categories: chartData.categories,
            }
          }}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};


const UserActivity = () => {
  return (
    <div className="card card-height-100">
      <div className="card-header border-bottom-dashed align-items-center d-flex">
        <h4 className="card-title mb-0 flex-grow-1">User Activity</h4>
        <div className="flex-shrink-0">
          <button type="button" className="btn btn-soft-primary btn-sm">
            View All Activity
          </button>
        </div>
      </div>
      <div className="card-body p-0">
      </div>
    </div>
  );
};

export default function SyndicateManagement() {
  const [syndicateData, setSyndicateData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSyndicates = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get('/Syndic/all');
        setSyndicateData(response.data.data.syndics);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSyndicates();
  }, []);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const newUsers = syndicateData.filter(syndicate => {
    const joinDate = new Date(syndicate.createdAt);
    const joinMonth = joinDate.getMonth() + 1;
    const joinYear = joinDate.getFullYear();

    return joinMonth === currentMonth && joinYear === currentYear;
  }).length;

  const totalUsers = syndicateData.length;
  const activeUsers = syndicateData.filter(syndicate => syndicate.status === 'active').length;
  const inactiveUsers = syndicateData.filter(syndicate => syndicate.status === 'inactive').length;

  const categories = [
    { name: "Total USERS", percentageChange: "", changeType: "", userCount: totalUsers, icon: "group-line" },
    { name: "Active USERS", percentageChange: "", changeType: "", userCount: activeUsers, icon: "user-follow-line" },
    { name: "Inactive USERS", percentageChange: "", changeType: "", userCount: inactiveUsers, icon: "user-unfollow-line" },
    { name: "New USERS", percentageChange: "", changeType: "", userCount: newUsers, icon: "user-received-line" },
  ];

  return (
    <div className="main-content" style={{ overflowX: 'hidden' }}>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12">
            <div className="page-title-box">
              <h4 className="mb-0">Syndicate Management</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <UserCards categories={categories} />
        </div>
        <div className="row">
          <div className="col-xxl-8">
            <MapChart syndicateData={syndicateData} />
          </div>
          <div className="col-xxl-4">
            <PieChart syndicateData={syndicateData} />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <UserSubscriptions />
          </div>
          <div className="col-xl-4">
            <UserActivity />
          </div>
        </div>
        <SyndicateList />
        <footer className="footer mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                {new Date().getFullYear()} © Velzon.
              </div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design & Develop by Themesbrand
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
