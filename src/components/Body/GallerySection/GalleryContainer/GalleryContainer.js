import './GalleryContainer.css';

const GalleryContainer = () => {
    const galleryImages = [
        "http://victoriasdogs101.files.wordpress.com/2013/10/dogs-wallpapers-the-dog-hq-for-desktop-desktop-s-pics.jpg",
        "https://i.pinimg.com/originals/57/60/1a/57601a7f7b74d3343877d9aade0f92bf.jpg",
        "http://1.bp.blogspot.com/-XeAl04NWxq0/TfUOYHDryVI/AAAAAAAAA8c/api3gPdx5wU/s1600/Animals_Cats_Small_cat_005241_.jpg",
        "https://www.animalshq.com/wp-content/uploads/2020/05/Labrador-Behavior-1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg"
    ]

    return (
        <div className="gallery-container">
            {
                galleryImages.map(imageURL => {
                    return (
                        <div className="gallery-card" key={imageURL}>
                            <img src={imageURL} alt="gallery-section-img"/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GalleryContainer;