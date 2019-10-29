import React from 'react'
import Posts from './posts.json'
import BlogPost from './BlogPost'

const BlogListContainer = () => {
    const mappedBlogPosts = Posts.map(((post, i) => <BlogPost key={i + post.title}
                                                            title={post.title}
                                                            subTitle={post.subTitle}
                                                            author={post.author}
                                                            date={post.date}
                                                            />))
    return(
        <div className='blog-list'>
            {mappedBlogPosts}
        </div>
    )
}

export default BlogListContainer