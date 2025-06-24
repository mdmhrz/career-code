import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/applicationsAPI';




const MyApplications = () => {

    const { user } = useAuth()

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={<p>Loading Your Applicaitons....</p>}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;