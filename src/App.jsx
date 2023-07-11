import React from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  let socials = {linkedin: 'none.com', github: 'none.com', twitter: 'none.com'}
  return (
    <>
        <Header name= "Brahim" job="full stack developper"  socials={socials} />
        <Nav/>
        <About clients={34} experience ="2 years"  projects = {80}
        aboutBio = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

    </>
  )
}

export default App