import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* <!-- ======= Mobile nav toggle button ======= --> */}
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

            {/* <!-- ======= Header ======= --> */}
            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
                            <h1 className="text-light"><a href="index.html">Iftekhar Ahmed <br/> Chaudhary </a></h1>
                            <div className="social-links mt-3 text-center">
                                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><Link to={"/"} className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
                            <li><Link to={"/about"} className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
                            <li><Link to={"resume"} className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
                            {/* <li><Link to={"portfolio"} className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li> */}
                            <li><Link to={"services"} className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></Link></li>
                            <li><Link to={"contact"} className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
                        </ul>
                    </nav>
                    {/* <!-- .nav-menu --> */}
                </div>
            </header>
            {/* <!-- End Header --> */}
        </>
    );
}

export default Navbar;