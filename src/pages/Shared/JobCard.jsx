import React from 'react';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobCard = ({ job }) => {

    const { company_logo, requirements, title, location, _id, salaryRange, description, company } = job;

    return (
        <div className="card bg-base-300 p-4 w-96 shadow-sm">
            <div className='flex items-center gap-4'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-16'
                        alt="Shoes" />
                </figure>
                <div >
                    <h3 className='text-4xl'>{company}</h3>
                    <p className='flex items-center gap-1'><FaMapMarkerAlt /> {location}</p>

                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2">
                    {
                        requirements.map((requirement, i) => <div key={i} className="badge badge-outline">{requirement
                        }</div>)}
                </div>
                <div className='card-actions justify-end mt-4'>
                    <Link to={`/jobs/${_id}`}><button className='btn btn-primary'>Show Detials</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;