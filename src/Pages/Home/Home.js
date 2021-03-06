import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import DentalCare from './DentalCare';
import FromBox from './FromBox';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className=' '>
           <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <FromBox></FromBox>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;