import VetCard from '../FindVet/VetCard/VetCard';

import './FindVet.css';

const FindVet = () => {
    return (
        <div className="findVet-wrapper background-cover">
            <div className="findVet-wrapper-container">
                <div className="findVet-search-wrapper">
                    <div className="findVet-search">
                        <label htmlFor="search">Search...</label>
                        <input id="search" type="search" placeholder="Search..." />
                        <button id="findVet-search-btn" type="submit">Go</button>
                    </div>
                </div>

                <div className="vetCards-container">
                    <VetCard />
                    <VetCard />
                    <VetCard />
                    <VetCard />
                    <VetCard />
                    <VetCard />
                </div>
            </div>
        </div>
    );
}

export default FindVet;