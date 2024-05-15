
import Navbar from "./Navbar"; 
import fimg from "../../assets/images/landing/features/img-1.png"
import fimg2 from "../../assets/images/landing/features/img-2.png"
import fimg3 from "../../assets/images/landing/features/img-3.png"
const Features = () => {
    
  return (
    <div  >
        <Navbar/>

        <section className="section bg-light py-5" id="features">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6 col-sm-7 mx-auto">
                        <div>
                            <img src={fimg} alt="" className="img-fluid mx-auto"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-muted">
                            <div className="avatar-sm icon-effect mb-4">
                                <div className="avatar-title bg-transparent rounded-circle text-success h1">
                                    <i className="ri-collage-line fs-36"></i>
                                </div>
                            </div>
                            <h3 className="mb-3 fs-20">Centralized Building Management</h3>
                            <p className="mb-4 ff-secondary fs-16">Consolidate information and tasks for all your syndicate's buildings in one user-friendly dashboard. This eliminates the need to switch between different apps or spreadsheets for each property.</p>

                            <div className="row pt-3">
                                <div className="col-3">
                                    <div className="text-center">
                                        <h4>5</h4>
                                        <p>Dashboards</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="text-center">
                                        <h4>150+</h4>
                                        <p>Pages</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="text-center">
                                        <h4>7+</h4>
                                        <p>Functional Apps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
                </div>
            
            </div>
   
        </section>
        <section className="section">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="text-muted">
                            <h5 className="fs-12 text-uppercase text-success">Online Meetings</h5>
                            <h4 className="mb-3">Effortless Maintenance and Communication</h4>
                            <p className="mb-4 ff-secondary">Simplify work order management by offering a streamlined system for tenant requests, vendor assignments, and real-time progress tracking. Additionally, facilitate clear communication with co-owners through built-in messaging, Online video meetings and real-time voting, fostering a more transparent and efficient experience.</p>


                            <div className="mt-4">
                                <a href="index.html" className="btn btn-primary">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></a>
                            </div>
                        </div>
                    </div>
               
                    <div className="col-lg-6 col-sm-7 col-10 ms-auto order-1 order-lg-2">
                        <div>
                            <img src={fimg2} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
              

                <div className="row align-items-center mt-5 pt-lg-5 gy-4">
                    <div className="col-lg-6 col-sm-7 col-10 mx-auto">
                        <div>
                            <img src={fimg3} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-muted ps-lg-5">
                            <h5 className="fs-12 text-uppercase text-success">structure</h5>
                            <h4 className="mb-3">Data-Driven Insights</h4>
                            <p className="mb-4">Gain valuable insights with Syndicate's analytics suite. Generate reports on tenant behavior, maintenance trends, and building performance, enabling you to make informed decisions regarding resource allocation and improvement initiatives.</p>

                            <div className="vstack gap-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 me-2">
                                        <div className="avatar-xs icon-effect">
                                            <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                <i className="ri-check-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0">Dynamic Content</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 me-2">
                                        <div className="avatar-xs icon-effect">
                                            <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                <i className="ri-check-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0">Setup plugin's information.</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 me-2">
                                        <div className="avatar-xs icon-effect">
                                            <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                <i className="ri-check-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0">Themes customization information</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
          
            </div>
         
        </section>

    </div>
  )
}

export default Features