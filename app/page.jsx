import Hero from "./Hero";
import Header from "./Header";
import AppointmentForm from "./AppointmentForm";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import Features from "./Features";
import About from "./About";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section className="lg:flex lg:flex-row-reverse items-end justify-between lg:max-w-5xl lg:mx-auto lg:mb-10">
        <AppointmentForm />
        <Benefits />
      </section>
      <Testimonials />
      <Features />
      <About />
      <Footer />
    </>
  );
}
