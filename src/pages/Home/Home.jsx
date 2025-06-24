import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';


const Home = () => {
    const jobPromise = fetch('http://localhost:3000/jobs').then(res => res.json());
    // console.log(jobPromise);
    return (
        <div>
            <Banner></Banner>
            <HotJobs jobPromise={jobPromise}></HotJobs>
            {/* <HotJobs ></HotJobs> */}
        </div>
    );
};

export default Home;