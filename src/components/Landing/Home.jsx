import  {  useEffect } from "react";
import Navbar from "./Navbar";
import  img_pattern from '../../assets/images/landing/img_pattern.png'
import  defaultt from '../../assets/images/demos/default.png'
import  saas from '../../assets/images/demos/saas.png'
import  material from '../../assets/images/demos/material.png'
import  minimal from '../../assets/images/demos/minimal.png'
import  creative from '../../assets/images/demos/creative.png'
import  modern from '../../assets/images/demos/modern.png'
import  interactive from '../../assets/images/demos/interactive.png'
import  amazon from '../../assets/images/clients/amazon.svg'
import  walmart from '../../assets/images/clients/walmart.svg'
import  lenovo from '../../assets/images/clients/lenovo.svg'
import paypal from '../../assets/images/clients/paypal.svg'
import shopify from '../../assets/images/clients/shopify.svg'
import verizon from '../../assets/images/clients/verizon.svg'
import { Link } from "react-router-dom";


const Home = () => {
    
  return (
    <div  >
            <Navbar/>
             <section className="section pb-0 hero-section" id="hero">
            <div className="bg-overlay bg-overlay-pattern"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-sm-10">
                        <div className="text-center mt-lg-5 pt-5">
                            <h1 className="display-6 fw-semibold mb-3 lh-base">The better way to manage your Building with <span className="text-success">Velzon </span></h1>
                            <p className="lead text-muted lh-base">SyndicateManager is a comprehensive and dynamic platform tailored for syndicates, providing an intuitive solution to efficiently manage their buildings.</p>
                            <div className="d-flex gap-2 justify-content-center mt-4">
                                <Link to="auth-signup-basic.html" className="btn btn-primary">Get Started <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                <Link to="pages-pricing.html" className="btn btn-danger">View Plans <i className="ri-eye-line align-middle ms-1"></i></Link>
                            </div>
                        </div>

                        <div className="mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel">
                            <div className="demo-img-patten-top d-none d-sm-block">
                                <img src={img_pattern} className="d-block img-fluid" alt="..."/>
                            </div>
                            <div className="demo-img-patten-bottom d-none d-sm-block">
                                <img src={img_pattern} className="d-block img-fluid" alt="..."/>
                            </div>
                            <div className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner shadow-lg p-2 bg-white rounded">
                                    <div className="carousel-item active" data-bs-interval="2000">
                                        <img src={defaultt} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={saas} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={material} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={minimal} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={creative} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={modern} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={interactive} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  
            </div>
         
            <div className="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                    <g mask="url(&quot;#SvgjsMask1003&quot;)" fill="none">
                        <path d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z">
                        </path>
                    </g>
                </svg>
            </div>
         
        </section>
        
        <div className="pt-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="text-center mt-5">
                            <h5 className="fs-20">Trusted <span className="text-primary text-decoration-underline">by</span> the world's best</h5>

                     
                            <div className="swiper trusted-client-slider mt-sm-5 mt-4 mb-sm-5 mb-4" dir="ltr">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="client-images">
                                            <img src={amazon} alt="client-img" className="mx-auto img-fluid d-block"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="client-images">
                                            <img src={walmart} alt="client-img" className="mx-auto img-fluid d-block"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="client-images">
                                            <img src={lenovo} alt="client-img" className="mx-auto img-fluid d-block"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="client-images">
                                            <img src={paypal} alt="client-img" className="mx-auto img-fluid d-block"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="client-images">
                                            <img src={shopify} alt="client-img" className="mx-auto img-fluid d-block"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="client-images">
                                            <img src={verizon} alt="client-img" className="mx-auto img-fluid d-block"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
             
            </div>
          
        </div>
     
    <script src="../../assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../../assets/libs/simplebar/simplebar.min.js"></script>
    <script src="../../assets/libs/node-waves/waves.min.js"></script>
    <script src="../../assets/libs/feather-icons/feather.min.js"></script>
    <script src="../../assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
    <script src="../../assets/js/plugins.js"></script>

    <script src="../../assets/libs/swiper/swiper-bundle.min.js"></script>

   
    <script src="../../assets/js/pages/landing.init.js"></script>
    </div>
  )
}

export default Home