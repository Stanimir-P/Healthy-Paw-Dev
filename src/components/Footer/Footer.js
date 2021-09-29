import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="company-info-wrapper">
                    <p>Address <span>Aleksandrovska 1 Str.</span></p>
                    <p>Phone Number <span>0888 888 888</span></p>
                </div>

                <div className="social-media-icon-wrapper">
                    <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link to="#">
                        <i className="fab fa-twitter"></i>
                    </Link>

                    <Link to="#" >
                        <i className="fab fa-instagram"></i>
                    </Link>
                </div>

                <div className="copyright-wrapper">
                    &copy; St.Design &#124; All rights reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;
