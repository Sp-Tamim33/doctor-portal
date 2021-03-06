import React from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';




const Login = () => {
    const location = useLocation();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    // const from = location.state?.from?.pathname || "/";

    // loading 
    if (googleLoading || loading) {
        return <Loading />
    }

    // errors 
    let errorMessage;
    if (error || googleError) {
        errorMessage = <p className='text-red-500'>{error?.message || googleError?.message}</p>
    }

    const from = location?.state?.from?.pathname || "/";
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        navigate(from, { replace: true });
        // console.log(user || googleError);
    };

    // user 
    if (user || googleUser) {
        console.log(user || googleUser);
        navigate(from, { replace: true });
    }





    return (
        <div className='flex justify-center items-center h-screen border-2'>
            <div className="card shadow-xl ">
                <div className="card-body border-2 border-secondary px-5 md:px-10">
                    <h2 className="card-title mx-auto text-3xl border-b-2 border-b-secondary px-3">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[300px]">
                        {/* Email Field  */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email Require*"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Invalid Email*"
                                    }
                                })}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">
                                    {errors.email?.type === 'required' && errors.email.message}
                                    {errors.email?.type === 'pattern' && errors.email.message}
                                </span>
                            </label>
                        </div>

                        {/* password field  */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password Require*"
                                    }
                                })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">
                                    {errors.password?.type === 'required' && errors.password.message}
                                </span>
                            </label>
                        </div>
                        {errorMessage}

                        <input type="submit" className="btn bg-gradient-to-r from-secondary to-primary text-white border-0 w-full" value='Login' />
                    </form>

                    <p>New to Doctor Portal ? <Link to='/signup' className='text-secondary underline'>Create an Account</Link></p>

                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn bg-gradient-to-r from-secondary to-primary text-white border-0">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;