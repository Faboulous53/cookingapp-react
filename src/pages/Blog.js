import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Blog = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h2 className='title'>Blog</h2>            
        </div>
    );
};

export default Blog;