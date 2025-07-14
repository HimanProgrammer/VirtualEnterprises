"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterFive from "@/components/layout/footers/footer-five";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="About Us" />
        <HeaderOne />
        <BreadCrumb title="About Us" innerTitle="Company About" />
        <AboutMain />
        <FooterFive />        
        <ScrollToTop />
      </>
    );
};

export default AboutUs;