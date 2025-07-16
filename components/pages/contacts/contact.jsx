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
               <div className="row ml-80 mr-90">
                  <div className="col-lg-4 valign">
                                <div className="sec-head info-box full-width md-mb80">
                                <div className="phone fz-30 fw-600 underline main-color">
                                    <a href="#0">+1 840 841 25 69</a>
                                </div>
                                <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                                    <h6 className="mb-15">Address</h6>
                                    <p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
                                </div>
                                <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                                    <h6 className="mb-15">Email</h6>
                                    <p>Support@UiCamp.com</p>
                                </div>

                                <div className="social-icon mt-50">
                                    <a href="#0">
                                    <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0">
                                    <i className="fab fa-dribbble"></i>
                                    </a>
                                    <a href="#0">
                                    <i className="fab fa-behance"></i>
                                    </a>
                                    <a href="#0">
                                    <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                                </div>
                  </div>
                  <div className="col-lg-7 offset-lg-1 valign">
                        <div className="full-width">
                            <div className="sec-head mb-50">
                                <h6 className="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
                                <h3 className="text-u ls1">
                                Send a <span className="fw-200">message</span>
                                </h3>
                            </div>
                            <form
                                id="contact-form"
                                className="form2"
                                method="post"
                                action="contact.php"
                            >
                                <div className="messages"></div>

                                <div className="controls row">
                                <div className="col-lg-6">
                                    <div className="form-group mb-30">
                                    <input
                                        id="form_name"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required="required"
                                    />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group mb-30">
                                    <input
                                        id="form_email"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required="required"
                                    />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group mb-30">
                                    <input
                                        id="form_subject"
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                    />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group mb-30">
                                        <div className="col-12">
                                        <select
                                        id="form_service"
                                        name="service"
                                        className="form-control"
                                        required="required">
                                        <option value="">Select a Service</option>
                                        <option value="graphic_design">CNC Machine Hard Disk Solutions</option>
                                        <option value="web_design">Industrial Computing Solutions</option>
                                        <option value="app_development">Surveillance & Camera Systems</option>
                                        <option value="smm">Industrial Electronics Repair Services</option>
                                        <option value="branding">Industry 4.0 & Automation Solutions</option>
                                        </select>
                                        </div>
                                        </div>
                            
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                    <textarea
                                        id="form_message"
                                        name="message"
                                        placeholder="Message"
                                        rows="4"
                                        required="required"
                                    ></textarea>
                                    </div>
                                    <div className="mt-30">
                                    <button
                                        type="submit"
                                        className="butn butn-full butn-bord radius-30"
                                    >
                                        <span className="text">Let&lsquo;s Talk</span>
                                    </button>
                                    </div>
                                </div>
                            </form>
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