
import logo_light from "../../assets/images/logo_light.png"
const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      
  return (
    <div  >
        <footer className="custom-footer bg-dark py-5 position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <div>
                            <div>
                                <img src={logo_light} alt="logo light" height="17"/>
                            </div>
                            <div className="mt-4 fs-13">
                                <p>Take control of your syndicate operations and unlock new levels of success with Syndicate</p>
                                <p className="ff-secondary">Modernize your syndicate operations with Syndicate, the all-in-one management application designed to streamline your workflow and empower informed decision-making.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 ms-lg-auto">
                        <div className="row">
                            <div className="col-sm-4 mt-4">
                                <h5 className="text-white mb-0">Company</h5>
                                <div className="text-muted mt-3">
                                    <ul className="list-unstyled ff-secondary footer-list fs-14">
                                        <li><a href="pages-profile.html">About Us</a></li>
                                        <li><a href="pages-gallery.html">Gallery</a></li>
                                        <li><a href="apps-projects-overview.html">Projects</a></li>
                                        <li><a href="pages-timeline.html">Timeline</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 mt-4">
                                <h5 className="text-white mb-0">Apps Pages</h5>
                                <div className="text-muted mt-3">
                                    <ul className="list-unstyled ff-secondary footer-list fs-14">
                                        <li><a href="pages-pricing.html">Calendar</a></li>
                                        <li><a href="apps-mailbox.html">Mailbox</a></li>
                                        <li><a href="apps-chat.html">Chat</a></li>
                                        <li><a href="apps-crm-deals.html">Deals</a></li>
                                        <li><a href="apps-tasks-kanban.html">Kanban Board</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 mt-4">
                                <h5 className="text-white mb-0">Support</h5>
                                <div className="text-muted mt-3">
                                    <ul className="list-unstyled ff-secondary footer-list fs-14">
                                        <li><a href="pages-faqs.html">FAQ</a></li>
                                        <li><a href="pages-faqs.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row text-center text-sm-start align-items-center mt-5">
                    <div className="col-sm-6">

                        <div>
                            <p className="copy-rights mb-0">
                                <script>
                                    document.write(new Date().getFullYear())
                                </script> © Data-Era
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="text-sm-end mt-3 mt-sm-0">
                            <ul className="list-inline mb-0 footer-social-link">
                                <li className="list-inline-item">
                                    <a href="javascript: void(0);" className="avatar-xs d-block">
                                        <div className="avatar-title rounded-circle">
                                            <i className="ri-facebook-fill"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="javascript: void(0);" className="avatar-xs d-block">
                                        <div className="avatar-title rounded-circle">
                                            <i className="ri-github-fill"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="javascript: void(0);" className="avatar-xs d-block">
                                        <div className="avatar-title rounded-circle">
                                            <i className="ri-linkedin-fill"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="javascript: void(0);" className="avatar-xs d-block">
                                        <div className="avatar-title rounded-circle">
                                            <i className="ri-google-fill"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="javascript: void(0);" className="avatar-xs d-block">
                                        <div className="avatar-title rounded-circle">
                                            <i className="ri-dribbble-line"></i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <button onClick={handleScrollToTop} className="btn btn-danger btn-icon landing-back-top" id="back-to-top">
            <i className="ri-arrow-up-line"></i>
        </button>
    </div>
  )
}

export default Footer