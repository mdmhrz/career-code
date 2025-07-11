import React, { use } from 'react';
import { Link } from 'react-router';

const MyPostedJobList = ({ jobsCreatedByPromise }) => {

    const jobs = use(jobsCreatedByPromise)
    return (
        <div>
            <h2 className='text-3xl'>Jobs Created by your: {jobs.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Job Title</th>
                                <th>Deadline</th>
                                <th>Application Count</th>
                                <th>View Applications</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows*/}
                            {
                                jobs.map((job, index) => <tr key={job._id}>
                                    <th>{index + 1}</th>
                                    <td>{job.title}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td>{job.application_count}</td>
                                    <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJobList;