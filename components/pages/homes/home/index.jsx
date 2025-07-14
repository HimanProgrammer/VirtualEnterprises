"use client";
import SEO from "@/components/data/seo";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BannerOne from "./banner";
import About from "./about";
import ChooseUs from "./choose-us";
import Services from "../home-2/services";
import Portfolio from "./portfolio";
import Pricing from "./pricing";
import WorkArea from "./work";
import FooterOne from "@/components/layout/footers/footer-five";
import Blog from "./blog";
import Testimonial from "./testimonial";

const HomeOne = () => {
    return (
        <div>
            <SEO pageTitle='Technology' />
            <HeaderOne />
            <BannerOne />
            <About />
            <ChooseUs />
            <Services/>
            <Testimonial />
            <Blog />
            <FooterOne />
            {/* <WorkArea/> */}
            <ScrollToTop />
        </div>
    );
};

export default HomeOne;