import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ToolsRow from "./ToolsRow";

const Tools = () => {
    const { data: tools, isLoading } = useQuery("tools", () =>
        fetch("http://localhost:5000/tool").then((res) => res.json())
    );

    if (isLoading) {
        <Loading></Loading>;
    }

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 container-lg">
            {tools?.map((tool) => (
                <ToolsRow key={tool._id} tool={tool}></ToolsRow>
            ))}
        </div>
    );
};

export default Tools;
