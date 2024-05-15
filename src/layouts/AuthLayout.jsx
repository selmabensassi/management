
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
	return (
		<div className="auth-page-wrapper auth-bg-cover   justify-content-center align-items-center min-vh-100 ">
		<div className="bg-overlay" />
		<div className="auth-page-content overflow-hidden pt-lg-5">
		<div className="container">
		<div className="row" style={{ maxWidth: 900, margin: "0 auto" }}>
		<div className="col-lg-12">
		<div className="card overflow-hidden border-0">
		<div className="row g-0">
		<div className="col-lg-6">
		<div className="p-lg-5 p-4 auth-one-bg h-100">
		<div className="position-relative h-100 d-flex flex-column">
		<div className="mb-4">
			<a href="index.html" className="d-block"> <img src="assets/images/logo-light.png" alt="" height={18} /></a>
		</div>
		</div>
		</div>
		</div>
						<Outlet />
		</div>

</div>

</div>


</div>

</div>

</div>




</div>
	);
}
