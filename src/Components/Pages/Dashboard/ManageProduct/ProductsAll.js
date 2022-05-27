import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmProduct from './DeleteConfirmProduct';
import ProductsRow from './ProductsRow';

const ProductsAll = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery("products", () =>
        fetch("http://localhost:5000/tool", {
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
        <div className="my-20">
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">All products</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 container-lg">
                {products?.map((product) => (
                    <ProductsRow product={product} key={product._id} refetch={refetch} setDeletingProduct={setDeletingProduct}></ProductsRow>
                ))}
                {

                    deletingProduct && <DeleteConfirmProduct deletingProduct={deletingProduct} setDeletingProduct={setDeletingProduct} refetch={refetch}></DeleteConfirmProduct>

                }
            </div>
        </div>
    );
};

export default ProductsAll;