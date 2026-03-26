// app/page.tsx
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
                <About />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <FloatingWA />
        </>
    );
}
