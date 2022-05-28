import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeleteManageOrder from './DeleteManageOrder';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {

    const [deletingOrder, setDeletingOrder] = useState(null);
    const { data: orders, isLaoding, refetch } = useQuery('orders', () => fetch("http://localhost:5000/manage", {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        return res.json()
    }));

    if (isLaoding) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">Manage All orders</h2>
            <div className='container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                {
                    orders?.map(order => <ManageOrderRow key={order._id} order={order} refetch={refetch} setDeletingOrder={setDeletingOrder}></ManageOrderRow>)
                }
            </div>
            {
                deletingOrder && <DeleteManageOrder deletingOrder={deletingOrder} setDeletingOrder={setDeletingOrder} refetch={refetch}></DeleteManageOrder>
            }
        </div>
    );
};

export default ManageOrders;