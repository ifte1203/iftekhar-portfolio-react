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
                            <div className="nav-bar mx-auto">
                                {/* <img src="assets/img/profile-img.jpg" className="profile-img" alt="" />
                                <p className="profile-name">Iftekhar Ahmed Chaudhary</p>
                                <p className="profile-tag">Web Developer</p> */}

                                    <NavLink className="nav-link" to={"/"} onClick={() => setIsDisplay(false)}>Home</NavLink>
                                
                                    <NavLink className="nav-link" to={'about'} onClick={() => setIsDisplay(false)}>About</NavLink>
                                
                                    <NavLink className="nav-link" to={"resume"} onClick={() => setIsDisplay(false)}>Resume</NavLink>
                                
                                    <NavLink className="nav-link" to={"services"} onClick={() => setIsDisplay(false)}>Services</NavLink>
                                
                                    <NavLink className="nav-link" to={"contact"} onClick={() => setIsDisplay(false)}>Contact</NavLink>
                                
                                <div className="social-bar">
                                    <a target={"_blank"} href="linkedin.com/in/chaudhary-iftekhar-0a7862208" className="social-link"><i class="bi-linkedin" style={{ color:'#0A66C2' }}></i></a>
                                    <a target={"_blank"} href="https://instagram.com/iftekhar_ahmed.chaudhary?igshid=NTA5ZTk1NTc=" className="social-link"><i class="bi-instagram" style={{ color:'#EA4A57'}}></i></a>
                                    <a target={"_blank"} href="https://wa.me/919819353115" className="social-link"><i className="bi bi-whatsapp" style={{ color: '#25D366' }}></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <i onClick={() => setIsDisplay(!isDisplay)} className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            }
            {/* <!-- ======= Header ======= --> */}
            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src="assets/img/profile-img.jpg" alt="" style={{ height: '150px' }} className="img-fluid " />
                        <h1 className="text-light"><a href="index.html">Iftekhar Ahmed <br /> Chaudhary </a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a target="__blank" href="https://www.facebook.com/profile.php?id=100005722546819&mibextid=ZbWKwL" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a target="__blank" href="https://www.instagram.com/iftekhar_ahmed.chaudhary/?igshid=NTA5ZTk1NTc=" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a target="__blank" href="http://linkedin.com/in/chaudhary-iftekhar-0a7862208" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><NavLink to={"/"} className="nav-link scrollto"><i className="bx bx-home"></i> <span>Home</span></NavLink></li>
                            <li><NavLink to={"/about"} className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></NavLink></li>
                            <li><NavLink to={"resume"} className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></NavLink></li>
                            {/* <li><NavLink to={"portfolio"} className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></NavLink></li> */}
                            <li><NavLink to={"services"} className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></NavLink></li>
                            <li><NavLink to={"contact"} className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></NavLink></li>
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