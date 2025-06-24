import React, { use } from 'react';

const HotJobs = ({ jobPromise }) => {

    const jobs = use(jobPromise);


    return (
        <div>
            <h1>Length = {jobs.length}</h1>
        </div>
    );
};

export default HotJobs;