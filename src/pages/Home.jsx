import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Resume />
            {/* <Portfolio/> */}
            <Services />
            {/* <Testimonial/> */}
            <Contact />
        </>
    );
}

export default Home;