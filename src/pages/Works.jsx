const Works = () => {
    return (
        <>
            {/* <!-- ======= Contact Section ======= --> */}
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>My Works</h2>
                        <p>Checkout some of my work. All my products are listed below.</p>
                    </div>

                    <div className="row" data-aos="fade-in">

                        <div className="col-lg-12 d-flex align-items-stretch">
                            <div className="info">
                                {/* <div className="address">
                                    <img src="assets/img/apk.png" alt="" srcset="" />
                                </div> */}

                                <div className="email mt-2 mb-2">
                                    <a href="assets/apps/iMusic.apk" className="btn btn-light d-flex" style={{ width:'250px' }}>
                                        <i class="bi bi-file-earmark-music"></i>
                                        <div className="ms-2">
                                        <span style={{ fontWeight:'bolder' }}>iMusic</span> <br />
                                            27.3mb
                                        </div>
                                        <img src="assets/img/apk.png" className="ms-5" alt="" style={{ height:'50px' }} srcset="" />
                                    </a>
                                </div>
                                <div className="email mt-2 mb-2">
                                    <a href="assets/apps/Contact.apk" className="btn btn-light d-flex" style={{ width:'250px' }}>
                                    <i class="bi bi-person-rolodex"></i>
                                        <div className="ms-2">
                                            <span style={{ fontWeight:'bolder' }}>Contact</span> <br />
                                            27.3mb
                                        </div>
                                        <img src="assets/img/apk.png" className="ms-5" alt="" style={{ height:'50px' }} srcset="" />
                                    </a>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>
            </section>
            {/* <!-- End Contact Section --> */}
        </>
    );
}

export default Works;