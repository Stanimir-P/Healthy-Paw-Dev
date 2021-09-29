import PetCard from './PetCard/PetCard'

import './Gallery.css';

const Gallery = () => {
    return (
        <div className="gallery-wrapper background-cover">
            <div className="gallery-wrapper-container">
                <div className="gallery-title">
                    <h1>Paws Collection</h1>
                </div>

                <div className="gallery-card-container">
                    <PetCard />                
                    <PetCard />                
                    <PetCard />                
                    <PetCard />                
                    <PetCard />                
                    <PetCard />                
                    <PetCard />                
                    <PetCard />                
                    <PetCard />                
                    <PetCard />                
                </div>
            </div>
        </div>
    );
}

export default Gallery;