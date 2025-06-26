import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/applicationsAPI';




const MyApplications = () => {

    const { user } = useAuth()

    console.log(user.accessToken);

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={<p>Loading Your Applicaitons....</p>}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;