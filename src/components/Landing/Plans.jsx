

import  {  useState  } from "react";
import Navbar from "./Navbar";
import '../../assets/libs/swiper/swiper-bundle.min.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/icons.min.css'
import '../../assets/css/app.min.css'
import '../../assets/css/custom.min.css' 
import QuestionAnswer from "./QuestionAnswer"

const Plans = () => {
    const [isChecked, setIsChecked] = useState(false); // State to track checkbox

    const handleCheck = () => {
      setIsChecked(!isChecked); // Toggle checked state
    };

    const questionsDataGQ = [
            { question: "What can I manage with Syndicate ?", answer: "Syndicate allows you to manage all aspects of your buildings, including co-owners, work orders, finances, communication, and data analysis." },
            { question: "Can I manage multiple buildings with Syndicate ?", answer: "Syndicate is designed to scale with your needs, so you can manage a single building if you're a co-owner syndicate or a vast portfolio with ease if you're a professional syncicate ." },
            { question:"Is Syndicate available on mobile devices ?", answer:"Yes, Syndicate is fully responsive and accessible from any device, including smartphones and tablets. This allows you to manage your buildings on the go." },
            { question:"Do you offer a free trial of Syndicate ?", answer:"Yes, we offer a free trial so you can experience the benefits of Syndicate firsthand before you commit." },
          ];
    const questionsDataPS = [
            { question: "How does Syndicate ensure the security of my data ?", answer: "Syndicate takes data security very seriously. We implement industry-standard security practices to protect your information." },
            { question: "Who has access to my data in Syndicate ?", answer: "Only authorized users with the appropriate permissions can access your data in Syndicate. You control who has access and what level of access they have." },
            
          ];
    
      
      
        
  return (
    <div  >
        <Navbar/>
        <section className="section bg-light" id="plans">
            <div className="bg-overlay bg-overlay-pattern"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center mb-5">
                            <h3 className="mb-3 fw-semibold">Choose the plan that's right for you</h3>
                            <p className="text-muted mb-4">Simple pricing. No hidden fees. Advanced features for you
                                business.</p>

                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <h5 className="fs-14 mb-0">Month</h5>
                                </div>
                                <div className="form-check form-switch fs-20 ms-3 " >
                                    <input className="form-check-input" type="checkbox" id="plan-switch"  checked={isChecked} onChange={handleCheck} />
                                    <label className="form-check-label" htmlFor="plan-switch"></label>
                                </div>
                                <div>
                                    <h5 className="fs-14 mb-0">Annual <span className="badge badge-soft-success">Save 20%</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
                

                <div className="row gy-4">
                    <div className="col-lg-4">
                        <div className="card plan-box mb-0">
                            <div className="card-body p-4 m-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1 fw-semibold">Basic Plan</h5>
                                        <p className="text-muted mb-0">For Startup</p>
                                    </div>
                                    <div className="avatar-sm">
                                        <div className="avatar-title bg-light rounded-circle text-primary">
                                            <i className="ri-book-mark-line fs-20"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4 text-center">
                                    <h1 className="month" style={{ display: isChecked ? 'none' : 'block' }}><sup><small>$</small></sup><span className="ff-secondary fw-bold">19</span> <span className="fs-13 text-muted">/Month</span></h1>
                                    <h1 className="annual" style={{ display: isChecked ? 'block' : 'none' }} ><sup><small>$</small></sup><span className="ff-secondary fw-bold">171</span> <span className="fs-13 text-muted">/Year</span></h1>
                                </div>

                                <div>
                                    <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Upto <b>3</b> Projects
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Upto <b>299</b> Customers
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Scalable Bandwidth
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>5</b> FTP Login
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-danger me-1">
                                                    <i className="ri-close-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>24/7</b> Support
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-danger me-1">
                                                    <i className="ri-close-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>Unlimited</b> Storage
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-danger me-1">
                                                    <i className="ri-close-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Domain
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-4">
                                        <a href="javascript:void(0);" className="btn btn-soft-success w-100">Get
                                            Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
                    <div className="col-lg-4">
                        <div className="card plan-box mb-0 ribbon-box right">
                            <div className="card-body p-4 m-2">
                                <div className="ribbon-two ribbon-two-danger"><span>Popular</span></div>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1 fw-semibold">Pro Business</h5>
                                        <p className="text-muted mb-0">Professional plans</p>
                                    </div>
                                    <div className="avatar-sm">
                                        <div className="avatar-title bg-light rounded-circle text-primary">
                                            <i className="ri-medal-fill fs-20"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4 text-center">
                                    <h1 className="month" style={{ display: isChecked ? 'none' : 'block' }}><sup><small>$</small></sup><span className="ff-secondary fw-bold">29</span> <span className="fs-13 text-muted">/Month</span></h1>
                                    <h1 className="annual" style={{ display: isChecked ? 'block' : 'none' }}><sup><small>$</small></sup><span className="ff-secondary fw-bold">261</span> <span className="fs-13 text-muted">/Year</span></h1>
                                </div>

                                <div>
                                    <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Upto <b>15</b> Projects
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>Unlimited</b> Customers
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Scalable Bandwidth
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>12</b> FTP Login
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>24/7</b> Support
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-danger me-1">
                                                    <i className="ri-close-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>Unlimited</b> Storage
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-danger me-1">
                                                    <i className="ri-close-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Domain
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-4">
                                        <a href="javascript:void(0);" className="btn btn-soft-success w-100">Get
                                            Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
                    <div className="col-lg-4">
                        <div className="card plan-box mb-0">
                            <div className="card-body p-4 m-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1 fw-semibold">Platinum Plan</h5>
                                        <p className="text-muted mb-0">Enterprise Businesses</p>
                                    </div>
                                    <div className="avatar-sm">
                                        <div className="avatar-title bg-light rounded-circle text-primary">
                                            <i className="ri-stack-fill fs-20"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4 text-center">
                                    <h1 className="month" style={{ display: isChecked ? 'none' : 'block' }} ><sup><small>$</small></sup><span className="ff-secondary fw-bold">39</span> <span className="fs-13 text-muted">/Month</span></h1>
                                    <h1 className="annual" style={{ display: isChecked ? 'block' : 'none' }}><sup><small>$</small></sup><span className="ff-secondary fw-bold">351</span> <span className="fs-13 text-muted">/Year</span></h1>
                                </div>

                                <div>
                                    <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>Unlimited</b> Projects
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>Unlimited</b> Customers
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Scalable Bandwidth
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>Unlimited</b> FTP Login
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>24/7</b> Support
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>Unlimited</b> Storage
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Domain
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-4">
                                        <a href="javascript:void(0);" className="btn btn-soft-success w-100">Get
                                            Started</a>
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
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center mb-5">
                            <h3 className="mb-3 fw-semibold">Frequently Asked Questions</h3>
                            <p className="text-muted mb-4 ff-secondary">If you can not find answer to your question in our FAQ, you can
                                always contact us or email us. We will answer you shortly!</p>

                            <div className="">
                                <button type="button" className="btn btn-primary btn-label rounded-pill"><i className="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i> Email Us</button>
                                <button type="button" className="btn btn-info btn-label rounded-pill"><i className="ri-twitter-line label-icon align-middle rounded-pill fs-16 me-2"></i> Send Us Tweet</button>
                            </div>
                        </div>
                    </div>
                </div>
           

                <div className="row g-lg-5 g-4">
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center mb-2">
                            <div className="flex-shrink-0 me-1">
                                <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                            </div>
                            <div className="flex-grow-1">
                                <h5 className="mb-0 fw-semibold">General Questions</h5>
                            </div>
                        </div>
                        <div className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box" id="genques-accordion">

                        {questionsDataGQ.map((item) => (
        <QuestionAnswer key={item.question} question={item.question} answer={item.answer} />
      ))}
                           
                          
                            
                        </div>
                   

                    </div>
              
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center mb-2">
                            <div className="flex-shrink-0 me-1">
                                <i className="ri-shield-keyhole-line fs-24 align-middle text-success me-1"></i>
                            </div>
                            <div className="flex-grow-1">
                                <h5 className="mb-0 fw-semibold">Privacy &amp; Security</h5>
                            </div>
                        </div>

                        <div className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box" id="privacy-accordion">
                           
                        {questionsDataPS.map((item) => (
        <QuestionAnswer key={item.question} question={item.question} answer={item.answer} />
      ))}
                           
                            
                        </div>
                 
                    </div>
                   
                </div>
            
            </div>
          
        </section>
    </div>
  )
}

export default Plans