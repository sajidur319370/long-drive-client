import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import googleIcon from "./google.png"

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (user) {
        console.log(user);
        navigate("/");
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorMaessage;
    if (error) {
        errorMaessage = <p className='text-red-500'>{error?.message}</p>
    }
    return (
        <div className='text-center'>
            {
                errorMaessage
            }
            <button onClick={() => signInWithGoogle()} className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-bold"><img src={googleIcon} alt="" /> Continue With Google</button>
        </div>
    );
};

export default SocialLogin;