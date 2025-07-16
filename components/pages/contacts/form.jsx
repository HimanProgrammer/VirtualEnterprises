import React from 'react';

const FormArea = () => {
    return (
        <>
            {/* <form action="#">
                <div className="row">
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="name" placeholder="Full Name" required="required" />
                        </div>
                    </div>
                    <div className="col-md-6 md-mb-30">
                        <div className="contact__form-area-item">
                            <input type="email" name="email" placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="subject" placeholder="Subject" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact__two-right-form-item">
                            <button className="btn-one" type="submit" >Submit Now</button>
                        </div>
                    </div>
                </div>
            </form>             */}
        <form
        id="contact-form"
        className="form2"
        method="post"
        action="#"
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

            {/* Dropdown for Services */}
            <div className="col-12">
            <div className="form-group mb-30">
                <select
                id="form_service"
                name="service"
                className="form-control"
                required="required"
                >
                <option value="">Select a Service</option>
                <option value="graphic_design">Graphic Design</option>
                <option value="web_design">Web Design & Development</option>
                <option value="app_development">App Development</option>
                <option value="smm">Social Media Marketing</option>
                <option value="branding">Branding</option>
                </select>
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
        </div>
        </form>
  
        </>
    );
};

export default FormArea;