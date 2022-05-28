import React from 'react';

const ProductsRow = ({ product, setDeletingProduct }) => {

    const { name, image, price, description, available_quantity, minimum_order_quantity } = product;
    return (
        <div>
            <div className="text-center rounded-3xl">
                <div className="rounded-2xl bg-base-100 shadow-xl">
                    <figure>
                        <img src={image} alt={name} className='w-full' />
                    </figure>
                    <div className=" items-center text-center">
                        <h2 className="text-xl font-semibold text-blue-600">{name}</h2>
                        <p className='text-sm font-medium pt-5 text-orange-600'>Price: ${price}</p>
                        <p className='text-sm font-medium pt-5 text-sky-600'>Available Quantity: {available_quantity}</p>
                        <p className='text-sm font-medium pt-5 text-green-600'>Order Quantity: {minimum_order_quantity}</p>

                        <div className="py-5">
                            {description.map((d, index) => <li className='list-none' key={index}>{d}</li>)}

                        </div>
                        <div className="py-5">
                            <label htmlFor="delete-product" onClick={() => setDeletingProduct(product)} className="btn modal-button btn-error">Delete</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsRow;