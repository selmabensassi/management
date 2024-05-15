
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axiosInstance from '../../../../config/axiosConfig';
import { useParams } from 'react-router-dom';

const MeetingOverviewCards = ({ meetingId, attendanceData }) => {
  const [data, setData] = useState([
    { name: "Minutes", count: "Loading...", additionalInfo: "Total minutes spent in meeting", icon: "bx-time-five" },
    { name: "Active Users", count: "Loading...", additionalInfo: "Currently active in meeting", icon: "bx-user" },
    { name: "Total Participants", count: "Loading...", additionalInfo: "Total participants", icon: "bx-group" },
    { name: "Recordings", count: "Loading...", additionalInfo: "Meeting recordings available", icon: "bx-video" }
  ]);

  useEffect(() => {
    if (attendanceData) {
      updateCardData(attendanceData);
    }
  }, [attendanceData]);

const updateCardData = (attendanceData) => {
    let totalSeconds = 0;
    let participantCount = attendanceData.length;

    attendanceData.forEach(attendee => {
        attendee.times.forEach(time => {
            const startDate = new Date(time.startDate);
            console.log("start time :", startDate);
            const endDate = new Date(time.endDate);
            console.log("end time :", endDate);
            const durationInSeconds = Math.max((endDate - startDate) / 1000, 0); 
            console.log("duration In Seconds :", durationInSeconds);
            totalSeconds += durationInSeconds;
        });
    });

    let totalMinutes = Math.floor(totalSeconds / 60);

    setData([
        { name: "Minutes", count: (totalMinutes).toString(), additionalInfo: "Total minutes spent in meeting", icon: "bx-time-five" },
        { name: "Active Users", count: "0", additionalInfo: "Currently active in meeting", icon: "bx-user" },
        { name: "Total Participants", count: participantCount.toString(), additionalInfo: "Total participants", icon: "bx-group" },
        { name: "Recordings", count: "0", additionalInfo: "Meeting recordings available", icon: "bx-video" }
    ]);
};

  return (
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="text-muted mb-2">{item.name}</h6>
                  <h2 className="fw-bold mb-0">{item.count}</h2>
                  <small className="text-muted">{item.additionalInfo}</small>
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


const OrdreDuJour = ({ meetingId }) => {
    const [subjects, setSubjects] = useState([]);
    const [activeSubject, setActiveSubject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const colors = ['#28a745', '#ffc107', '#dc3545', '#007bff']; 

    useEffect(() => {
        setLoading(true);
        const fetchSubjects = async () => {
            try {
                const response = await axiosInstance.get(`/meets/meeting/${meetingId}`);
                if (response.data && response.data.meeting && Array.isArray(response.data.meeting.subjects)) {
                    setSubjects(response.data.meeting.subjects);
                    setActiveSubject(response.data.meeting.subjects[0]); 
                } else {
                    throw new Error('Subjects data is not valid');
                }
            } catch (error) {
                console.error('Error fetching subjects:', error);
                setError(`Failed to load subjects: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchSubjects();
    }, [meetingId]);

    if (loading) return <div>Loading subjects...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleSubjectClick = (subject) => {
        setActiveSubject(subject);
    };

    return (
        <div className="card" style={{ marginTop: '20px' }}>  
            <div className="card-header">
                <h4 className="card-title mb-0">Ordre du Jour</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <div className="nav flex-column nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {subjects.map((subject) => (
                                <button
                                    key={subject._id}
                                    className={`nav-link ${activeSubject?._id === subject._id ? 'active' : ''}`}
                                    onClick={() => handleSubjectClick(subject)}
                                    style={{ background: activeSubject?._id === subject._id ? '#007BFF' : 'transparent', color: activeSubject?._id === subject._id ? 'white' : 'black' }}
                                >
                                    {subject.title}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-9">
                        {activeSubject && (
                            <div className="tab-content text-muted mt-4 mt-md-0">
                                {activeSubject.questions.map((question) => (
                                    <div key={question._id} className="card mb-3" style={{ marginLeft: '10px' }}>  
                                        <div className="card-body">
                                            <h6>{question.title}</h6>
                                            {activeSubject.results.map((result, index) => (
                                                <div key={index} className="mb-3">
                                                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                                                        {result.option} - {result.percentage}%
                                                    </div>
                                                    <div className="progress" style={{ height: '20px', backgroundColor: '#e9ecef', width: '100%' }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: `${result.percentage}%`, backgroundColor: colors[index % colors.length] }} 
                                                            aria-valuenow={result.percentage}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                    <span style={{ float: 'right' }}>{result.votes || ''} votes</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
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

const MeetingDetails = () => {
  const { meetingId } = useParams();
  const [attendanceData, setAttendanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeetingData = async () => {
      setIsLoading(true);
      try {
        const [meetingResponse, attendanceResponse] = await Promise.all([
          axiosInstance.get(`meets/meeting/${meetingId}`),
          axiosInstance.get(`/meets/${meetingId}/attendance`)
        ]);
        console.log("Meeting Data:", meetingResponse.data);
        console.log("Attendance Data:", attendanceResponse.data);
        setAttendanceData(attendanceResponse.data.users);  // Assuming the attendance data is in the users key
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeetingData();
  }, [meetingId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="main-content">
      <div className="container-fluid">
        <div className="row mb-4">
          <MeetingOverviewCards meetingId={meetingId} attendanceData={attendanceData} />
        </div>
        <div className="row">
          <div className="col-md-6">
            <OrdreDuJour meetingId={meetingId} />
          </div>
          <div className="col-md-6">
            <AllMeetingsBySubscription PieData={[
              { label: "Great", value: 50 },
              { label: "Good", value: 30 },
              { label: "Okay", value: 10 },
              { label: "Poor", value: 7 },
              { label: "Bad", value: 3 }
            ]} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeetingDetails ;