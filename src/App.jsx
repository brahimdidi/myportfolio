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
  const socials = {linkedin: 'none.com', github: 'none.com', twitter: 'none.com'};
  const experienceFrontend = [
      {field:'HTML', level: 'Very Experienced'}, 
      {field: 'CSS', level: 'Experienced'},
      {field: 'JAVASCRIPT', level: 'Very Experienced'},
      {field: 'REACT JS', level: ' Very Experienced'},
      {field: 'REDUX REDUX TOOLKIT', level: ' Very Experienced'},
      {field: 'REACT NATIVE', level: 'Not Experienced'},
      {field: 'FLUTTER', level: 'Not Experienced'},
      ];
  const experienceBackend =  [
    {field:'Ruby on Rails', level: 'Very Experienced'}, 
    {field: 'POSTGRESQL', level: 'Experienced'},
    {field: 'FIREBASE', level: 'Experienced'},
    {field: 'C SHARP ASP.NET CORE', level: 'Not Experienced'},
    ];

  return (
    <>
        <Header name= "Brahim" job="full stack developper"  socials={socials} />
        <Nav/>
        <About clients={34} experience ="2 years"  projects = {80}
        aboutBio = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Experience frontend={experienceFrontend} backend = {experienceBackend} />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

    </>
  )
}

export default App