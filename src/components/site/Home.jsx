import React from 'react';
import './site.scss';
import { CiSearch } from "react-icons/ci";
const Home = () => {
    return (
        <div className='home'>
            <div className='d-flex border border-primary'>
                <div><CiSearch /></div>
                <div><input type="text" className='border-none' /></div>
            </div>
            <div className='bg-1'>

            </div>
            <p className='heading'>Home </p>

        </div>
    );
}

export default Home;
