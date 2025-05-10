import HeroSection from "@/components/hero-section"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Projects />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
