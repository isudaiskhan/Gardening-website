import React from 'react'
import AboutUs from "../../AboutUs/AboutUs";
import ContactUs from "../../ContactUs/ContactUs";
import Facts from "../../Facts/Facts";
import Features from "../../Features/Features";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import Portfolio from "../../Portfolio/Portfolio";
import ScrollButton from "../../ScrollButton/ScrollButton";
import Service from "../../Service/Service";
import Team from "../../Team/Team";
import Testimonial from "../../Testimonial/Testimonial";
import Layout from '../../Layout/Layout';
import TopBar from '../../TopBar/TopBar';


const Home = () => {
  return (
    <>
    <TopBar />
    <Layout>
    <Hero />
    <AboutUs />
    <Facts />
    <Features />
    <Service />
    <Portfolio />
    <Team />
    <Testimonial />
    <ContactUs />
    <Footer />
    <ScrollButton />
    </Layout>
      
    </>
  )
}

export default Home