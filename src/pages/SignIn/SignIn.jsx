import Lottie from 'lottie-react';
import React, { use } from 'react';
import signInAnimation from '../../assets/signin.json'
import { AuthContext } from '../../contexts/AuthContext';

const SignIn = () => {
    const { signInUser, } = use(AuthContext)
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.email.value;
        console.log(email, password);


        // Create User
        signInUser(email, password).then(result => {
            console.log(result.user);
        }).catch(error => {
            console.log(error);
        })
    }




    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">

                <Lottie animationData={signInAnimation} className='w-50'></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                    <form className="fieldset" onSubmit={handleSignIn}>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;