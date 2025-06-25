import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import MyPostedJobList from './MyPostedJobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {

    const { user } = useAuth();

    return (
        <div>
            <h2>My Posted Jobs</h2>
            <Suspense fallback={<p>Loading....</p>}>
                <MyPostedJobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;