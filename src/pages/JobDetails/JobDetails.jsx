import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const { _id, title, company } = useLoaderData();


    return (
        <div>
            <h2>Job Details of {company}</h2>
            <Link to={`/jobApply/${_id}`}><button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;