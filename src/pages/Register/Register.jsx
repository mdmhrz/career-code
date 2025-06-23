import React, { use } from 'react';
import registerAnimation from '../../assets/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const {createUser} =use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.email.value;
        console.log(email, password);


        // Create User
        createUser(email, password).then(result => {
            console.log(result.user);
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">

                <Lottie animationData={registerAnimation} className='w-50'></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <form className="fieldset" onSubmit={handleRegister}>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;