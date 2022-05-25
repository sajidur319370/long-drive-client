import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardMain = () => {
    return (
        <div class="drawer">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <label for="my-drawer" class="btn btn-primary drawer-button">
                    Open Dashboard
                </label>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li className="font-semibold">
                        <Link to="/dashboard">My Profile</Link>
                    </li>
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
            </div>
        </div>

        // <div className="drawer drawer-mobile">
        //     <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content">
        //         <h3 className='text-secondary p-2 font-semibold text-4xl'>Dashboard</h3>
        //         <Outlet></Outlet>
        //     </div>
        //     <div className="drawer-side">
        //         <label tabIndex='1' htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        //         <ul className="menu p-2 overflow-y-auto w-48 bg-white text-accent">
        //             {/* <!-- Sidebar content here --> */}
        //             <li className='font-semibold'><Link to='/dashboard'>My Profile</Link></li>
        //             <li className='font-semibold'><Link to='/dashboard/myOrders'>My Orders</Link></li>
        //             <li className='font-semibold'><Link to='/dashboard/addReview'>Add a review</Link></li>
        //             <li className='font-semibold'><Link to='/dashboard/users'>All Users</Link></li>
        //         </ul>

        //     </div>
        // </div>
    );
};

export default DashboardMain;
