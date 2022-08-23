import React from 'react';
// Required Components
import Header from './layout/Header';
import Banner from './home/Banner';
import Myinfo from './home/Myinfo';
import BlogList from './home/BlogsList';

const Home = () => {
    return(
        <>
            <Header class="home"/>     
            
            <Banner />

            <Myinfo />
        
            <BlogList />
        </>
      
    );
}


export default Home;