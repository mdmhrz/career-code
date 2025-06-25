import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = useAuth();

    const handleAddAJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());
        // console.log(data);

        //Porcess salary range data
        const { min, max, currency, ...newJob } = data;

        newJob.salaryRange = { min, max, currency };

        //process requirements
        // const requirementString = newJob.requirements;
        // const requirementsDirty = requirementString.split(',');
        // const requirementsClean = requirementsDirty.map(req => req.trim())
        // newJob.requirements = requirementsClean;
        newJob.requirements = newJob.requirements.split(',').map(req => req.trim());

        //Responsibilities Process
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())


        newJob.status = 'active';

        //Save job to the database

        axios.post('http://localhost:3000/jobs', newJob).then(res => {
            console.log(res);
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Job has been succesfully posted",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }).catch(error => {
            console.log(error);
        })


        console.log(newJob);
    }

    return (
        <div>
            <h2>Please add a job</h2>
            <form onSubmit={handleAddAJob}>
                {/* Basic Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input" placeholder="Company Name" />


                    <label className="label">Location</label>
                    <input type="text" className="input" placeholder="Company Location" name='location' />

                    <label className="label">Company Logo</label>
                    <input type="text" name='company_logo' className="input" placeholder="Company Logo URL" />
                </fieldset>

                {/* Job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>

                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input value='On-Site' className="btn" type="radio" name="jobType" aria-label="On-Site" />
                        <input value='Remote' className="btn" type="radio" name="jobType" aria-label="Remote" />
                        <input value='Hybrid' className="btn" type="radio" name="jobType" aria-label="Hybrid" />
                    </div>

                </fieldset>


                {/* JOb Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Categroy" className="select" name='category'>
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                </fieldset>


                {/* Application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>
                    <input type="date" name='applicationDeadline' className='input' />
                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text" name='min' className="input" placeholder="Minumum Salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" name='max' className="input" placeholder="Maximum Salary" />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select a Currency" className="select" name='currency'>
                                <option disabled={true}>Select a Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea name="description" placeholder='Job Description' id=""></textarea>


                </fieldset>

                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea name="requirements" placeholder='Requirements (Separated by comma)' id=""></textarea>

                </fieldset>

                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea name="responsibilities" placeholder='Responsibilities (Separated by comma)' id=""></textarea>

                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="email" name='hr_email' defaultValue={user?.email} className="input" placeholder="Company Name" />


                    <input type="submit" className='btn' value="Add Job" />
                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;