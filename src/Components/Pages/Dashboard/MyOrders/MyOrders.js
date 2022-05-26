import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderCard from './OrderCard';

const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { data: orders, isLaoding, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLaoding) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">My orders</h2>
            <div className='container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
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