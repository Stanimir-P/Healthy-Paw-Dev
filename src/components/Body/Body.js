import MedicalRecordSection from '../Body/MedicalRecordSection/MedicalRecordSection';
import FindVetSection from '../Body/FindVetSection/FindVetSection';
import GallerySection from '../Body/GallerySection/GallerySection';
import BlogSection from '../Body/BlogSection/BlogSection';

import './Body.css';

const Body = () => {
    return (
        <section className="body-sections background-cover">
            <FindVetSection />

            <MedicalRecordSection />

            <GallerySection />

            <BlogSection />
        </section>
    );
}

export default Body;
