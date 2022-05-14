import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';



const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (googleLoading) {
        return <Loading />
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card shadow-xl ">
                <div class="card-body">
                    <h2 class="card-title mx-auto">Login</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn bg-gradient-to-r from-secondary to-primary text-white border-0">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;