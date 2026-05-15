
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

export default function Page() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Menu />
            </main>
            <Footer />
        </>
    );
}
  {/*   <About />
                <Testimonials />
                <Contact />
           
            <FloatingWA />
            */}