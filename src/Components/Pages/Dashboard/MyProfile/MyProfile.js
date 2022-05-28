import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import ProfileInfo from './ProfileInfo';
import ProfileUpdateModal from './ProfileUpdateModal';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [updtingProfile, setUpdatingProfile] = useState(null);
    const { data: profile, isLaoding, refetch } = useQuery(['profile', user], () => fetch(`http://localhost:5000/profile/${user?.email}`, {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLaoding) {
        <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl text-indigo-500 font-bold py-2">My Profile</h2>
            <div className='flex items-center shadow-lg flex-col py-5'>
                <div className='flex justify-center items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl text-rose-900 text-center font-bold py-2">{user?.displayName}</h3>
                    <h3 className="text-sm text-indigo-900 text-center font-base">{user?.email}</h3>
                </div>
                {
                    <ProfileInfo profile={profile} setUpdatingProfile={setUpdatingProfile}></ProfileInfo>
                }

                {updtingProfile && <ProfileUpdateModal updtingProfile={updateProfile} setUpdatingProfile={setUpdatingProfile} refetch={refetch}></ProfileUpdateModal>}
            </div>

        </div>
    );
};

export default MyProfile;