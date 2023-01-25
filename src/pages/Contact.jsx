const Contact = () => {
    return (
        <>
            {/* <!-- ======= Contact Section ======= --> */}
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>If you have any query or want to work with us.</p>
                    </div>

                    <div className="row" data-aos="fade-in">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Mumbai, Maharashtra, India</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>iftekharahmed447@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+91 9819353115</p>
                                </div>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30156.819740144452!2d72.88753934314082!3d19.125087918919256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8081c1d7b43%3A0xbaf100c54b8be366!2sPowai%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1674661421680!5m2!1sen!2sus" frameborder="0" style={{ border: 0, width: '100%', height: '290px' }} allowfullscreen></iframe>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label for="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End Contact Section --> */}
        </>
    );
}

export default Contact;