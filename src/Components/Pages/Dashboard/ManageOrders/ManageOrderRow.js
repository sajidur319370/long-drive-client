import React from 'react';
import { toast } from 'react-toastify';


const ManageOrderRow = ({ order, setDeletingOrder, refetch }) => {
    const { _id, orderId, orderName, price, orderQuantity, status, paid } = order;
    const handleUpdate = () => {
        // send data to server
        const url = `https://hidden-bastion-67340.herokuapp.com/manage/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("Order Shipped!!");
                refetch();
            });
    };
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-amber-600">{orderName}</h2>
                    <p className='text-sm font-semibold text-slate-600'>Id: <span className='bg-yellow-200 p-1'>{orderId}</span></p>
                    <p className='text-sm font-semibold text-slate-600'>Price: <span className='bg-yellow-200 p-1'>{price}</span></p>
                    <p className='text-sm font-semibold text-slate-600'>Quantity: <span className='bg-yellow-200 p-1'>{orderQuantity}</span></p>
                    <p className='text-sm font-semibold text-slate-600'>Total Price: <span className='bg-yellow-200 p-1'>${parseFloat(orderQuantity) * price}.00</span></p>
                    <p className='text-sm font-semibold text-slate-600'>Status: <span className='bg-yellow-200 p-1'>{status ? status : "unpaid"}</span></p>
                    <div className="card-actions justify-end">

                        {!paid && <span className="p-3 bg-amber-400 rounded-md">Unpaid</span>}
                        {
                            !paid && <label htmlFor="delete-manage" onClick={() => setDeletingOrder(order)} className="btn modal-button btn-active">Delete</label>
                        }

                        {paid && <span className="p-3 bg-emerald-500 rounded-md">Paid</span>}
                        {(status === 'pending') && <button onClick={() => handleUpdate()} className="btn btn-secondary">Ship</button>}
                        {(status === 'shipped') && <button onClick={() => handleUpdate()} className="btn btn-info">Shipped</button>}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageOrderRow;