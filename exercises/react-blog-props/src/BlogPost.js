import React from 'react'

const BlogPost = (props) => {
    let {title, subTitle, author, date} = props
    return(
        <div className='posts'>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            <h5>Posted by {author} on {date}</h5>
        </div>
    )
}

export default BlogPost