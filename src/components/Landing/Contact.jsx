

const Contact = () => {
    
  return (
    <div  >
        <section className="section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center mb-5">
                            <h3 className="mb-3 fw-semibold">Get In Touch</h3>
                            <p className="text-muted mb-4 ff-secondary">We thrive when coming up with innovative ideas but also
                                understand that a smart concept should be supported with faucibus sapien odio measurable
                                results.</p>
                        </div>
                    </div>
                </div>
             

                <div className="row gy-4">
                    <div className="col-lg-4">
                        <div>
                            <div className="mt-4">
                                <h5 className="fs-13 text-muted text-uppercase">Office Address 1:</h5>
                                <div className="ff-secondary fw-semibold">4461 Cedar Street Moro, <br />AR 72368</div>
                            </div>
                            <div className="mt-4">
                                <h5 className="fs-13 text-muted text-uppercase">Office Address 2:</h5>
                                <div className="ff-secondary fw-semibold">2467 Swick Hill Street <br />New Orleans, LA</div>
                            </div>
                            <div className="mt-4">
                                <h5 className="fs-13 text-muted text-uppercase">Working Hours:</h5>
                                <div className="ff-secondary fw-semibold">9:00am to 6:00pm</div>
                            </div>
                        </div>
                    </div>
           
                    <div className="col-lg-8">
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-4">
                                            <label htmlFor="name" className="form-label fs-13">Name</label>
                                            <input name="name" id="name" type="text" className="form-control bg-light border-light" placeholder="Your name*"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label fs-13">Email</label>
                                            <input name="email" id="email" type="email" className="form-control bg-light border-light" placeholder="Your email*"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-4">
                                            <label htmlFor="subject" className="form-label fs-13">Subject</label>
                                            <input type="text" className="form-control bg-light border-light" id="subject" name="subject" placeholder="Your Subject.." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label htmlFor="comments" className="form-label fs-13">Message</label>
                                            <textarea name="comments" id="comments" rows="3" className="form-control bg-light border-light" placeholder="Your message..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-end">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" value="Send Message"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
       
        </section>
    </div>
  )
}

export default Contact