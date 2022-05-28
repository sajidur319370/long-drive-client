import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ order, setDeletingOrder }) => {
    const { _id, orderId, orderName, price, orderQuantity, paid } = order
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-amber-600">{orderName}</h2>
                    <p className='text-sm font-semibold text-slate-600'>Id: <span className='bg-yellow-200 p-1'>{orderId}</span></p>
                    <p className='text-sm font-semibold text-slate-600'>Price: <span className='bg-yellow-200 p-1'>{price}</span></p>
                    <p className='text-sm font-semibold text-slate-600'>Quantity: <span className='bg-yellow-200 p-1'>{orderQuantity}</span></p>
                    <p className='text-sm font-semibold text-slate-600'>Total Price: <span className='bg-yellow-200 p-1'>${parseFloat(orderQuantity) * price}.00</span></p>
                    <div className="card-actions justify-end">
                        {!paid && <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-primary">Pay Now</button></Link>
                        }{
                            !paid && <label htmlFor="delete-modal" onClick={() => setDeletingOrder(order)} className="btn modal-button btn-error">Delete</label>
                        }
                        {
                            paid && <span className="p-3 bg-emerald-500 text-white rounded-md">Paid</span>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderCard;