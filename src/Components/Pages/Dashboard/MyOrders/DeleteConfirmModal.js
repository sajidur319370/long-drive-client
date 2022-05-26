import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingOrder, setDeletingOrder, refetch }) => {
    const { _id, orderName } = deletingOrder
    const handleDelete = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Tool ${orderName} is deleted!!`);
                    setDeletingOrder(null);
                    refetch();
                }
            })

    }
    return (
        <div>

            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are You sure you want to delete <span className='text-green-500'>{orderName}</span></h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-success">Delete</button>
                        <label htmlFor="delete-modal" className="btn btn-error">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;