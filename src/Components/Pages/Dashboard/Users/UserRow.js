import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import useAdmin from '../../../../hooks/useAdmin';

const UserRow = ({ user, refetch }) => {
    const { photoURL, displayName, email, role } = user;
    const makeAdmin = () => {
        fetch(`https://hidden-bastion-67340.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin!!!");
                }
                return res.json()
            })
            .then(data => {

                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Successfully Make an Admin!!");
                }

            });
    }

    const removeUser = () => {

    }

    const [currentUser] = useAuthState(auth)
    const [admin] = useAdmin(currentUser)

    return (
        <div className='lg:flex items-center shadow-lg flex-col p-5'>
            <div className='flex justify-center items-center'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photoURL} alt="" />
                    </div>

                </div>
            </div>
            <div className="">
                <h3 className="text-xl text-rose-900 text-center font-bold py-2">{displayName}</h3>
                <h3 className="text-sm text-indigo-900 text-center font-base">{email}</h3>
            </div>
            <div className='flex justify-between py-5'>
                {(admin && !role) && <button onClick={() => makeAdmin()} className='btn btn-success mx-1'>Make admin</button>}
                {(admin && !role) && <button onClick={() => removeUser()} className='btn btn-error mx-1'>Remove User</button>}
                {role && <p className="bg-orange-500 rounded-md text-accent inline-block px-2">Admin</p>}
            </div>
        </div>
    );
};

export default UserRow;