import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applications = useLoaderData();
    const handleStatusChange = (e, app_id) => {
        // console.log(e.target.value, application);

        //Update Status in DB
        axios.patch(`http://localhost:3000/applications/${app_id}`, { status: e.target.value }).then(res => {
            if (res.data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Application Status Updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }).catch(error => console.log(error))
    }

    const { job_id } = useParams()
    return (
        <div>
            <h2 className="text-4xl">Applications for : {applications.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows  */}
                            {
                                applications.map((application, index) => <tr key={application._id}>
                                    <th>{index + 1}</th>
                                    <td>{application.applicant}</td>
                                    <td>Quality Control Specialist</td>
                                    <td>
                                        <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application.status} className="select">
                                            <option disabled={true}>Update Status</option>
                                            <option>Pending</option>
                                            <option>Interview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewApplications;