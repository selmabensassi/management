import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import MainLayout from './layouts/MainLayout';
import TestPage from './pages/TestPage';
import AdminsListPage from './pages/Admins/AdminsListPage';
import CreateAdminPage from './pages/Admins/CreateAdminPage';
import EditAdminPage from './pages/Admins/EditAdminPage';
import SyndicSignupPage from './pages/Auth/SyndicSignupPage';

import App from './App';
import LoginPage from './pages/Auth/LoginPage';
import LandingPage from './pages/LandingPage';
import AuthLayout from './layouts/AuthLayout';
import SyndicateManagement  from './pages/Dashboard/Syndic-Dashboard/syndicate/syndicate_overview'; 
import SyndicateList  from './pages/Dashboard/Syndic-Dashboard/syndicate/syndicate_list'; 
import DeleteModal  from './pages/Dashboard/Syndic-Dashboard/syndicate/delete_syndicate'; 
import AddSyndicateModal  from './pages/Dashboard/Syndic-Dashboard/syndicate/add_syndicate'; 
import MeetingManagement from './pages/Dashboard/Syndic-Dashboard/syndicate/Meeting_per_syndicate';
import MeetingDetails from './pages/Dashboard/Syndic-Dashboard/syndicate/meetDetails';
import SubscriptionManagement from './pages/subscription/subscription_plan';
import AddSubscriptionModal from './pages/subscription/add_subscription';
import DeleteSubscriptionModal from './pages/subscription/delete_subscription';
import ContractManagement from './pages/contract/contractManagement';
import Claim from './pages/Claims/claimDashboard';
import ClaimList from './pages/Claims/claimList';
import AddClaim from './pages/Claims/Add_claim';



const router = createBrowserRouter([
	{
		path: '/',
		children: [{ path: '/', element: <LandingPage /> }],
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{ path: '/auth/login', element: <LoginPage /> },
			{ path: '/auth/signup/syndic', element: <SyndicSignupPage /> },
		],
	},
	{
		path: '/dashboard',
		element: <MainLayout />,
		children: [
			{ path: '/dashboard', element: <TestPage /> },
			{ path: '/dashboard/admins', element: <AdminsListPage /> },
			{ path: '/dashboard/admins/create', element: <CreateAdminPage /> },
			{ path: '/dashboard/admins/:id/edit', element: <EditAdminPage /> },

		],
	},
	{
		path: 'syndic-dashboard',
		element: <MainLayout />,
		children: [
			{ path: '/syndic-dashboard/syndicate', element: <SyndicateManagement  /> },
			{ path: '/syndic-dashboard/syndicate/list', element: <SyndicateList /> },
			{ path: '/syndic-dashboard/syndicate/add', element: <AddSyndicateModal/> },
			{ path: '/syndic-dashboard/syndicate/delete', element: <DeleteModal/> },
			{ path: '/syndic-dashboard/syndicate/meetOverview/:syndicateId', element: <MeetingManagement/> },
			{ path: '/syndic-dashboard/syndicate/meetDetails/:meetingId', element: <MeetingDetails/> },

		],
	},
	{
		path: 'subscription-dashboard',
		element: <MainLayout />,
		children: [
			{ path: '/subscription-dashboard/pricing', element: <SubscriptionManagement/> },
			{ path: '/subscription-dashboard/pricing/add', element: <AddSubscriptionModal/> },
			{ path: '/subscription-dashboard/pricing/delete', element: <DeleteSubscriptionModal/> },

		],
	},
	{
		path: 'contract-dashboard',
		element: <MainLayout />,
		children: [
			{ path: '/contract-dashboard/statistic', element: <ContractManagement/> },

		],
	},
	{
    path: 'claim-dashboard',
    element: <MainLayout />,
    children: [
        { path: 'claim', element: <Claim /> },
        { path: 'claim/add', element: <AddClaim /> },
        { path: 'claim/list', element: <ClaimList /> },
    ],
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<App router={router} />,
	// </React.StrictMode>,
);
