import { Link } from 'react-router-dom';

import './Article.css';

const Article = (

) => {
    return (
        <div className="article-wrapper">
            <div className="article-background">
                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="dog-bg" />
            </div>

            <div className="article-content-wrapper">
                <div className="article-date">
                    <p>June 6th 2021</p>
                </div>
                
                <title className="article-title">
                    <h1>
                        EVERYTHING YOU NEED TO KNOW ABOUT LOVING A SENIOR DOG
                    </h1>
                </title>

                <ul className="article-info">
                    <li>By <span id="author-name">Healthy Paw</span></li>
                    <li><span>/</span>Pet Care</li>
                </ul>

                <div className="article-read-more-btn-wrapper draw-border">
                    <Link to="#" className="read-more-btn">READ MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default Article;