import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../../firebase.init";
import useAdmin from "../../../../hooks/useAdmin";

const DashboardMain = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-left px-5">
                <h3 className='text-secondary p-2 font-semibold text-4xl'>Dashboard</h3>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-2 overflow-y-auto w-48 bg-white text-accent">
                    {/* <!-- Sidebar content here --> */}
                    <li className="font-semibold">
                        <Link to="/dashboard">My Profile</Link>
                    </li>
                    {
                        !admin && <ul>
                            <li className="font-semibold">
                                <Link to="/dashboard/myOrders">My Orders</Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="/dashboard/addReview">Add a review</Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="/dashboard/users">All Users</Link>
                            </li>
                        </ul>
                    }

                    {
                        admin && <ul>
                            <li className="font-semibold">
                                <Link to="/dashboard/users">Make Admin</Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="/dashboard/manageProduct">Manage Product</Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="/dashboard/addProduct">Add Product</Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="/dashboard/manageOrders">Manage All Orders</Link>
                            </li>
                        </ul>
                    }

                </ul >

            </div >
        </div >
    );
};

export default DashboardMain;
