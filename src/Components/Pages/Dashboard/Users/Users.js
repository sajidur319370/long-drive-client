import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery("users", () =>
        fetch("http://localhost:5000/user", {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then((res) => res.json())
    );

    if (isLoading) {
        <Loading></Loading>;
    }
    return (
        <div>
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">Users({users?.length})</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    users?.map(user => <UserRow user={user} key={user._id} refetch={refetch}></UserRow>)
                }
            </div>
        </div>
    );
};

export default Users;