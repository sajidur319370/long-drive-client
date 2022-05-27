import React from 'react';
import ProductsAll from './ProductsAll';

const ManageProduct = () => {
    return (
        <div>
            <h2 className="text-3xl text-indigo-500 font-bold py-2">Manage Products</h2>
            <ProductsAll></ProductsAll>
        </div>
    );
};

export default ManageProduct;