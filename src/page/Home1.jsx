import Header from "../components/home/home-three/header/multi-page";
import Footer from "../components/home/home-eight/footer";
import AboutOne from "../components/home/home-three/about-one";
import AboutThree from "../components/home/home-three/about-three";
import AboutTwo from "../components/home/home-three/about-two";
import Cta from "../components/home/home-three/cta";
import Features from "../components/home/home-three/features";
import Hero from "../components/home/home-three/hero";
import BrandSlider from "../components/home/home-three/integrations";
import Services from "../components/home/home-three/services";
import Testimonials from "../components/home/home-three/testimonials";

function Home1() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <AboutTwo />
            <AboutThree />
            <Services />
            <BrandSlider />
            <AboutOne />
            <Testimonials />
            <Cta />
            <Footer />
        </>
    )
}

export default Home1
