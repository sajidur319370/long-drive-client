import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ItemsRow from './ItemsRow';

const ItemsAll = () => {
    const { data: tools, isLoading } = useQuery("tools", () =>
        fetch("http://localhost:5000/tool").then((res) => res.json())
    );

    if (isLoading) {
        <Loading></Loading>;
    }
    return (
        <div className="my-20">
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">All Tools</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 container-lg">
                {tools?.map((tool) => (
                    <ItemsRow tool={tool} key={tool._id}></ItemsRow>
                ))}
            </div>
        </div>
    );
};

export default ItemsAll;