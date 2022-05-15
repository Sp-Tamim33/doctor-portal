import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
    const location = useLocation()
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm(); const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
    const navigate = useNavigate();


    // user 
    if (user || googleUser) {
        console.log(user || googleUser);
    }

    //   loading 
    if (googleLoading || loading || updating) {
        return <Loading />
    }

    // errors 
    let errorMessage;
    if (error || googleError || upError) {
        errorMessage = <p className='text-red-500'>{error?.message || googleError?.message}</p>
    }

    const from = location.state?.from?.pathname || "/";
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate(from, { replace: true });
    }
    return (
        <div className='flex justify-center items-center h-screen border-2'>
            <div class="card shadow-xl ">
                <div class="card-body border-2 border-secondary px-5 md:px-10">
                    <h2 class="card-title mx-auto text-3xl border-b-2 border-b-secondary px-3">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[300px]">
                        {/* Name field  */}
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name Require*"
                                    }
                                })}
                                type="text"
                                placeholder="Your Name"
                                class="input input-bordered w-full" />
                            <label class="label">
                                <span class="label-text-alt text-red-500">
                                    {errors.name?.type === 'required' && errors.name.message}
                                </span>
                            </label>
                        </div>
                        {/* Email Field  */}
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Email</span>
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
                                class="input input-bordered w-full" />
                            <label class="label">
                                <span class="label-text-alt text-red-500">
                                    {errors.email?.type === 'required' && errors.email.message}
                                    {errors.email?.type === 'pattern' && errors.email.message}
                                </span>
                            </label>
                        </div>

                        {/* password field  */}
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Password</span>
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
                                class="input input-bordered w-full" />
                            <label class="label">
                                <span class="label-text-alt text-red-500">
                                    {errors.password?.type === 'required' && errors.password.message}
                                </span>
                            </label>
                        </div>

                        {errorMessage}

                        <input type="submit" className="btn bg-gradient-to-r from-secondary to-primary text-white border-0 w-full" value='SignUp' />
                    </form>

                    <p>Already have an Accout ? <Link to='/login' className='text-secondary underline'>Login</Link></p>

                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn bg-gradient-to-r from-secondary to-primary text-white border-0">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;