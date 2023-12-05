import About from "~/components/Home/About";
import Contact from "~/components/Home/Contact";
import Hero from "~/components/Home/Hero";
import Portfolio from "~/components/Home/Portfolio";
import Services from "~/components/Home/Services";


export default function Home() {
  return (
    <div className=" overflow-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
  )
}
