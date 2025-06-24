import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    // console.log(jobId);

    const { user } = useAuth()
    // console.log(user);


    const handleApplyFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedIn, github, resume);


        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been Submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })


    }

    return (
        <div>
            <h3>Apply job for this job: <Link className='underline' to={`/jobs/${jobId}`}>Details</Link> </h3>
            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


                    <label className="label">LinkedIn</label>
                    <input type="url" className="input" name='linkedin' placeholder="LinkedIn profile link" />

                    <label className="label">Github</label>
                    <input type="url" className="input" name='github' placeholder="LinkedIn profile link" />

                    <label className="label">Resume</label>
                    <input type="url" className="input" name='resume' placeholder="Resume link" />

                    <input type="submit" value='Apply' className='btn' />


                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;