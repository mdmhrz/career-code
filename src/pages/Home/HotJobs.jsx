import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({ jobPromise }) => {

    const jobs = use(jobPromise);


    return (
        <div>
            <div>
                <h2 className='text-4xl text-center mb-8 mt-8'>Hot Jobs of the Day</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;