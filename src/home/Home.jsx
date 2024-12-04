import React from 'react'
import Banner from './banner/Banner';
import DiveInto from './diveHabot/DiveInto';
import Tab from './tabSection/Tab';
import Verify from './verify/Verify';
import HowWorks from './howWorks/HowWorks';

function Home() {
    return (
        <>
      
        <Banner />
        <DiveInto />
        <Tab />
        <Verify />
        <HowWorks />
       
        </>
    )
}

export default Home;
