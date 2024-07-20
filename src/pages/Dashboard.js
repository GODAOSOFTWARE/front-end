import React from 'react';

const DashBoard = () => {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
                <div className="bg-white shadow rounded-lg p-4 flex items-center">
                    <div className="p-4 bg-green-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">Today's Money</h2>
                        <p className="text-2xl">$53k</p>
                        <p className="text-green-500">+55% than last week</p>
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 flex items-center">
                    <div className="p-4 bg-blue-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">Today's Users</h2>
                        <p className="text-2xl">2,300</p>
                        <p className="text-green-500">+3% than last month</p>
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 flex items-center">
                    <div className="p-4 bg-red-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">New Clients</h2>
                        <p className="text-2xl">3,462</p>
                        <p className="text-red-500">-2% than yesterday</p>
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 flex items-center">
                    <div className="p-4 bg-green-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">Sales</h2>
                        <p className="text-2xl">$103,430</p>
                        <p className="text-green-500">+5% than yesterday</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-semibold">Website View</h2>
                    <p>Last Campaign Performance</p>
                    <p className="text-gray-500">Campaign sent 2 days ago</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-semibold">Daily Sales</h2>
                    <p>15% increase in today sales</p>
                    <p className="text-gray-500">Updated 4 min ago</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-semibold">Completed Tasks</h2>
                    <p>Last Campaign Performance</p>
                    <p className="text-gray-500">Just updated</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-semibold">Orders Overview</h2>
                    <p>24% this month</p>
                    <ul>
                        <li>$2400, Design changes <span className="text-gray-500">22 DEC 7:20 PM</span></li>
                        <li>New order #1832412 <span className="text-gray-500">21 DEC 11 PM</span></li>
                        <li>Server payments for April <span className="text-gray-500">21 DEC 9:34 PM</span></li>
                        <li>New card added for order #4395133 <span className="text-gray-500">20 DEC 2:20 AM</span></li>
                        <li>Unlock packages for development <span className="text-gray-500">18 DEC 4:54 AM</span></li>
                        <li>New order #9583120 <span className="text-gray-500">17 DEC</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
