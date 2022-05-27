import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderCard from './OrderCard';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { data: orders, isLaoding, refetch } = useQuery(['orders', user], () => fetch(`http://localhost:5000/order?userEmail=${user?.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            navigate("/");
        }
        return res.json()
    }));

    if (isLaoding) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">My orders</h2>
            <div className='container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                {
                    orders?.map(order => <OrderCard key={order._id} order={order} refetch={refetch} setDeletingOrder={setDeletingOrder}></OrderCard>)
                }
            </div>
            {
                deletingOrder && <DeleteConfirmModal deletingOrder={deletingOrder} setDeletingOrder={setDeletingOrder} refetch={refetch}></DeleteConfirmModal>
            }
        </div>
    );
};

export default MyOrders;