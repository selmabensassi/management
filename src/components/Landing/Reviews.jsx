
import Navbar from "./Navbar"; 
import process from "../../assets/images/landing/process_arrow_img.png"
import { useEffect } from "react";
const Reviews = () => {
    
  return (
    <div  >
          <Navbar/>
        <section className="section bg-primary" id="reviews">
            <div className="bg-overlay bg-overlay-pattern"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="text-center">
                            <div>
                                <i className="ri-double-quotes-l text-success display-3"></i>
                            </div>
                            <h4 className="text-white mb-5"><span className="text-success">19k</span>+ Satisfied clients</h4>

    
                            <div className="swiper client-review-swiper rounded" dir="ltr">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="row justify-content-center">
                                            <div className="col-10">
                                                <div className="text-white-50">
                                                    <p className="fs-20 ff-secondary mb-4"> "Syndicate has been a game-changer for our property management. Now, everything is centralized, and communication with co-owners is a breeze.  We've saved countless hours and can finally focus on strategic improvements."</p>

                                                    <div>
                                                        <h5 className="text-white">Sarah M.</h5>
                                                        <p>- Property Manager at Elmwood Estates</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                          
                                    <div className="swiper-slide">
                                        <div className="row justify-content-center">
                                            <div className="col-10">
                                                <div className="text-white-50">
                                                    <p className="fs-20 ff-secondary mb-4">"Transparency is key for us, and Syndicate provides the perfect platform.  co-owners can easily submit work orders and track progress, and we can keep them updated with announcements.  It's fostered a sense of trust and collaboration that we didn't have before."</p>

                                                    <div>
                                                        <h5 className="text-white">David L.</h5>
                                                        <p>- President of the Board, Greenhaven Condominiums</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                 
                                    <div className="swiper-slide">
                                        <div className="row justify-content-center">
                                            <div className="col-10">
                                                <div className="text-white-50">
                                                    <p className="fs-20 ff-secondary mb-4"> "Syndicate's data analytics have been invaluable.  We can now identify trends in maintenance requests and proactively address potential issues.  This has helped us reduce costs and improve the overall experience for our co-owners."</p>

                                                    <div>
                                                        <h5 className="text-white">Emily C.</h5>
                                                        <p>- CFO at Sunstone Properties</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                          
                                </div>
                                <div className="swiper-button-next bg-white rounded-circle"></div>
                                <div className="swiper-button-prev bg-white rounded-circle"></div>
                                <div className="swiper-pagination position-relative mt-2"></div>
                            </div>
                      
                        </div>
                    </div>
                
                </div>
         
            </div>
         
        </section>
        <section className="py-5 position-relative bg-light">
            <div className="container">
                <div className="row text-center gy-4">
                    <div className="col-lg-3 col-6">
                        <div>
                            <h2 className="mb-2"><span className="counter-value" data-target="100">0</span>+</h2>
                            <div className="text-muted">Projects Completed</div>
                        </div>
                    </div>
       

                    <div className="col-lg-3 col-6">
                        <div>
                            <h2 className="mb-2"><span className="counter-value" data-target="24">0</span></h2>
                            <div className="text-muted">Win Awards</div>
                        </div>
                    </div>
        

                    <div className="col-lg-3 col-6">
                        <div>
                            <h2 className="mb-2"><span className="counter-value" data-target="20.3">0</span>k</h2>
                            <div className="text-muted">Satisfied Clients</div>
                        </div>
                    </div>
                  
                    <div className="col-lg-3 col-6">
                        <div>
                            <h2 className="mb-2"><span className="counter-value" data-target="50">0</span></h2>
                            <div className="text-muted">Employees</div>
                        </div>
                    </div>
           
                </div>
  
            </div>
        
        </section>
   

   
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center mb-5">
                            <h3 className="mb-3 fw-semibold">Our Work Process</h3>
                            <p className="text-muted mb-4 ff-secondary">In a perfect world, managing your buildings wouldn't require a separate app. Ideally, everything would flow seamlessly from the start. That's the philosophy behind Syndicate: a streamlined solution built for syndicates who value efficiency. </p>
                        </div>
                    </div>
                </div>
       

                <div className="row text-center">
                    <div className="col-lg-4">
                        <div className="process-card mt-4">
                            <div className="process-arrow-img d-none d-lg-block">
                                <img src={process} alt="" className="img-fluid"/>
                            </div>
                            <div className="avatar-sm icon-effect mx-auto mb-4">
                                <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                    <i className="ri-quill-pen-line"></i>
                                </div>
                            </div>

                            <h5>Tell us what you need</h5>
                            <p className="text-muted ff-secondary">The profession and the employer and your desire to make your mark.</p>
                        </div>
                    </div>
                 
                    <div className="col-lg-4">
                        <div className="process-card mt-4">
                            <div className="process-arrow-img d-none d-lg-block">
                                <img src={process} alt="" className="img-fluid"/>
                            </div>
                            <div className="avatar-sm icon-effect mx-auto mb-4">
                                <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                    <i className="ri-user-follow-line"></i>
                                </div>
                            </div>

                            <h5>Get free quotes</h5>
                            <p className="text-muted ff-secondary">The most important aspect of beauty was, therefore, an inherent part.</p>
                        </div>
                    </div>
          
                    <div className="col-lg-4">
                        <div className="process-card mt-4">
                            <div className="avatar-sm icon-effect mx-auto mb-4">
                                <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                    <i className="ri-book-mark-line"></i>
                                </div>
                            </div>

                            <h5>Deliver high quality product</h5>
                            <p className="text-muted ff-secondary">We quickly learn to fear and thus automatically avoid potentially.</p>
                        </div>
                    </div>
                 
                </div>
       
            </div>
           
        </section>
        
    </div>
  )
}

export default Reviews