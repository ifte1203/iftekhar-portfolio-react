const Services = () => {
  return (
    <>
      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services">
        <div className="container">

          <div className="section-title">
            <h2>Services</h2>
            <p>We provide following services.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon"><i className="bi bi-briefcase"></i></div>
              <h4 className="title"><a href="">UX/UI Design</a></h4>
              <p className="description">We build exceptional UI/UX software solutions that keep the user in mind. We help you develop compelling and user-friendly designs to take your digital presence to the next level</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bi bi-card-checklist"></i></div>
              <h4 className="title"><a href="">Custom Software Development</a></h4>
              <p className="description">Orient Software's core strength lies in our ability to develop custom software solutions. As a result, we can provide you with an end-to-end custom software solution tailored for you</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bi bi-bar-chart"></i></div>
              <h4 className="title"><a href="">Mobile Application Development</a></h4>
              <p className="description">Our team of experienced software engineers can develop feature-rich, innovative, native & cross-platform apps for any device. We have expertise in React Native</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bi bi-binoculars"></i></div>
              <h4 className="title"><a href="">Web Development</a></h4>
              <p className="description">We build websites using the latest technologies like Angular, React, and Vue. Our services include custom web app development, responsive design, eCommerce-ready storefronts & content management systems, and more</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="bi bi-brightness-high"></i></div>
              <h4 className="title"><a href="">CRM Solutions</a></h4>
              <p className="description">We develop CRM solutions that are customized to your organizational requirements. These CRM solutions help you manage customer interactions, lead management, sales leads, marketing campaigns, and more</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
              <div className="icon"><i className="bi bi-calendar4-week"></i></div>
              <h4 className="title"><a href="">eCommerce Solution</a></h4>
              <p className="description">Orient Software helps businesses set up online stores to conduct B2B or B2C sales. With our extensive experience in eCommerce Software Development, we can help you design and develop e-commerce web applications powered by technologies such as Angular, React, Node.js, RESTful APIs, etc</p>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End Services Section --> */}
    </>
  );
}

export default Services;