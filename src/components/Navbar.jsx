import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    const [isDisplay, setIsDisplay] = useState(false);
    return (
        <>
            {/* <!-- ======= Mobile nav toggle button ======= --> */}


            {
                isDisplay
                    ?
                    <div>
                        <i onClick={() => setIsDisplay(!isDisplay)} className="bi bi-x-lg mobile-nav-toggle d-xl-none"></i>
                        <div className="humberger-menu">
                            <ul className="nav-bar">
                                <img src="assets/img/profile-img.jpg" className="profile-img" alt="" />
                                <p className="profile-name">Iftekhar Ahmed Chaudhary</p>
                                <p className="profile-tag">Web Developer</p>

                                <div className="social-bar">
                                    <a target={"_blank"} href="linkedin.com/in/chaudhary-iftekhar-0a7862208" className="social-link"><i class="bi-linkedin"></i></a>
                                    <a target={"_blank"} href="https://instagram.com/iftekhar_ahmed.chaudhary?igshid=NTA5ZTk1NTc=" className="social-link"><i class="bi-instagram"></i></a>
                                </div>
                                <li className="links">
                                    <NavLink className="text" to={"/"} onClick={() => setIsDisplay(false)}>Home</NavLink>
                                </li>
                                <li className="links">
                                    <NavLink className="text" to={'about'} onClick={() => setIsDisplay(false)}>About</NavLink>
                                </li>
                                <li className="links">
                                    <NavLink className="text" to={"resume"} onClick={() => setIsDisplay(false)}>Resume</NavLink>
                                </li>
                                <li className="links">
                                    <NavLink className="text" to={"services"} onClick={() => setIsDisplay(false)}>Services</NavLink>
                                </li>
                                <li className="links">
                                    <NavLink className="text" to={"contact"} onClick={() => setIsDisplay(false)}>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    :
                    <i onClick={() => setIsDisplay(!isDisplay)} className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            }
            {/* <!-- ======= Header ======= --> */}
            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src="assets/img/profile-img.jpg" alt="" style={{ height: '150px', width: '142px' }} className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Iftekhar Ahmed <br /> Chaudhary </a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a target="__blank" href="https://www.instagram.com/iftekhar_ahmed.chaudhary/?igshid=NTA5ZTk1NTc=" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a target="__blank" href="http://linkedin.com/in/chaudhary-iftekhar-0a7862208" className="linkedin"><i className="bx bxl-linkedin"></i></a>
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