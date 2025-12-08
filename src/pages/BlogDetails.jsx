import React from 'react';
import Details from '../components/BlogDetails/Details';
import RelatedBlog from '../components/BlogDetails/RelatedBlog';

const BlogDetails = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Details />
            <RelatedBlog></RelatedBlog>
        </div>
    );
};

export default BlogDetails;