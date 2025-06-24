import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';


const Home = () => {
    const jobPromise = fetch('http://localhost:3000/jobs').then(res => res.json());
    // console.log(jobPromise);
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<p>Loading......</p>}>
                <HotJobs jobPromise={jobPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;