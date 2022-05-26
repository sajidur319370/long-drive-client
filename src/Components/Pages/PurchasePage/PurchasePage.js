import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import PurchaseModal from "./PurchaseModal";

const PurchasePage = () => {
    const { id } = useParams();
    const { data: tool, isLoading } = useQuery("tool", () =>
        fetch(`http://localhost:5000/purchase/${id}`).then((res) => res.json())
    );
    if (isLoading) {
        <Loading></Loading>;
    }
    const [purchaseTool, setPurchaseTool] = useState(null);
    return (
        <div className="container-lg">
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">
                Purchase Now
            </h2>
            <div className="text-center rounded-3xl flex lg:flex-row md:flex-row flex-col justify-center my-10 border-2 mx-5 p-5">
                <div className="rounded-2xl bg-base-100">
                    <img src={tool?.image} alt={tool?.name} className='mx-auto shadow-lg' />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-blue-600">
                        {tool?.name}
                    </h2>
                    <p className="text-sm font-medium pt-2 text-orange-600">
                        Price: ${tool?.price}
                    </p>
                    <p className="text-sm font-medium pt-2 text-sky-600">
                        Available Quantity: {tool?.available_quantity}
                    </p>
                    <p className="text-sm font-medium pt-2 text-green-600">
                        Order Quantity: {tool?.order_quantity}
                    </p>

                    <div className="p-5 text-left">
                        {tool?.description.map((d, index) => (
                            <li key={index}>{d}</li>
                        ))}
                    </div>
                    <div className="">
                        <label onClick={() => setPurchaseTool(tool)} htmlFor="my-modal-6" className="btn modal-button bg-orange-600 border-0">
                            Order Now
                        </label>
                        {
                            purchaseTool && <PurchaseModal purchaseTool={purchaseTool}></PurchaseModal>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;
