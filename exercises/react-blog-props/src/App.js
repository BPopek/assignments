import React from 'react';
import Header from './Header';
// import Navbar from './Navbar';
import BlogListContainer from './BlogList';
import BlogPost from './BlogPost';
import Footer from './Footer';

function App () {
    return(
        <div>
            <Header />
                {/* <Navbar /> */}
            <BlogListContainer />
                <BlogPost />
            <Footer />    
        </div>
    )
}

export default App