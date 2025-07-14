"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contact Us" />        
            <HeaderOne />
            <BreadCrumb title="Contact Us" innerTitle="Contact Us" />
            <div className="contact__two section-padding">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-12">
                            <div className="contact__two-title">
                            </div>
                            <div className="contact__two-contact-info">
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-1.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Email</h4>
                                        <span>virtualenterprisespune@gmail.com</span>
                                        <span>info@virtualenterprises.in</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-2.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Contacts</h4>
                                        <span>+91 9881479699 </span>
                                        <span>+91 8793434399</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-3.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Date</h4>
                                        <span>Monday to Saturday <br/> 10.Am To 2.Pm</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon/service-4.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Location</h4>
                                        <span>Audumbar Soc. CTS. 345 Ganesh Peth, 1st Floor,<br/> Near New Milk Dairy, Pune, Maharashtra,</span>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-4 align-items-center">         
                        <div className="col-xl-12 mb-10">
                            <div className="contact__two-content ">
                                    <div className="contact__two-title">
                                    <h2>Do you have any question? </h2>
                                    <p>For your car we will do everything  advice, repairs and maintenance. We are the some preferred choice by many car owners because</p>
                                </div>
                                <div className="contact__two-form W-100">
                                    <FormArea />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;