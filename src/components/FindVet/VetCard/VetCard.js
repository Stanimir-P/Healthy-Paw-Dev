import { Link } from 'react-router-dom';

import './VetCard.css';

const VetCard = () => {
    return (
        <div className="vet-card-wrapper">
            <div className="clinic-image">
                <img src="https://tfirdaus.github.io/mdl/images/laptop.jpg" alt="vet-clinic" />
            </div>

            <div className="clinic-description">
                <div className="clinic-name-wrapper">
                    <h1>Pet Health Clinic</h1>
                </div>

                <div className="clinic-info-wrapper">
                    <p><span className="bold">City:</span> Burgas</p>
                    <p><span className="bold">Address:</span> Aleksandrovska 1 Str.</p>
                    <p><span className="bold">Phone:</span> 088 888 8888</p>
                </div>

                <div className="card-actions">
                    <div className="visit-page-btn">
                        <Link to="#">Visit Web Page</Link>
                    </div>

                    <div className="clinic-social">
                        <Link to="#" id="social-fb"><i className="fab fa-facebook-square"></i></Link>
                        <Link to="#" id="social-twitter"><i className="fab fa-twitter-square"></i></Link>
                        <Link to="#" id="social-insta"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VetCard;