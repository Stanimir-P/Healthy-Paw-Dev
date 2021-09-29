// import { Link } from 'react-router-dom';

import './PetCard.css';

const PetCard = () => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="pet-card" />
                </div>
                <div className="flip-card-back">
                    <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="pet-card" />

                    <div className="pet-card-info">
                        <h1>Name: Bruno</h1>
                        <p id="pet-age">Age: 2 years old</p>
                        <p id="pet-traits">Traits: loyal, friendly, intelligent</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PetCard;