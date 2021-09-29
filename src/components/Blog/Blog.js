// import { Link } from 'react-router-dom';

import BlogNav from './BlogNav/BlogNav';
import Article from './Article/Article';

import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-wrapper background-cover">
            <BlogNav />
            
            <div className="articles-container">
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </div>
    )
}

export default Blog;