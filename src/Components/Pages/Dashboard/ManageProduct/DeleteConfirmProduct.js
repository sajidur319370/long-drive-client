import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmProduct = ({ deletingProduct, setDeletingProduct, refetch }) => {
    const { name, _id } = deletingProduct;
    const handleDelete = () => {
        fetch(`http://localhost:5000/tool/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Tool ${name} is deleted!!`);
                    setDeletingProduct(null);
                    refetch();
                }
            })

    }
    return (
        <div>

            <input type="checkbox" id="delete-product" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are You sure you want to delete <span className='text-green-500'>{name}</span></h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-success">Delete</button>
                        <label htmlFor="delete-product" className="btn btn-error">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmProduct;