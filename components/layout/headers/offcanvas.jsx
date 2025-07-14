import Link from 'next/link';
import logo2 from "../../../public/assets/img/logo-1.png";
import Social from '@/components/data/social';

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
				<div className="header__area-menubar-right-sidebar-popup-logo">
				<Link href='/'>
					<img className='logo_one' src={logo2.src} alt="logo" />
				</Link>
				</div>
				<p>The insurance company assumes the financial risk of covering these events in exchange for the premiums paid by the policyholder. There are many different types of insurance,</p>
				<div className="header__area-menubar-right-sidebar-popup-contact">
					<h4 className="mb-30">Get In Touch</h4>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-phone-alt icon-animation"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Call Now</span>
							<h6><Link href="tel:+919881479699">+91 9881479699</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-envelope"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Quick Email</span>
							<h6><Link href="mailto:info.help@gmail.com">info@virtualenterprises.in</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-map-marker-alt"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Office Address</span>
							<h6><Link href="https://google.com/maps" target="_blank"><p>Audumbar Soc. CTS. 345 Ganesh Peth, 1st Floor,Near New Milk Dairy, Pune, Maharashtra,</p></Link></h6>
						</div>
					</div>
				</div>
				<div className="header__area-menubar-right-sidebar-popup-social social__icon">
					<Social />
				</div>
			</div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;