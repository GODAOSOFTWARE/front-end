import React from 'react';
import './DashBoard.css';  // Подключаем стили

const Dashboard = () => {
    const data = [
        { title: "Ликвидность пула", value: "$540k", percentage: "+2%", icon: "💰" },
        { title: "Члены DAO", value: "120", percentage: "+3%", icon: "👥" },
        { title: "Голосования", value: "3", percentage: "-2%", icon: "🗳️" },
        { title: "Sales", value: "$103,430", percentage: "+5%", icon: "📈" }
    ];

    const projects = [
        { title: "Material XD Version", budget: "$14,000", completion: 60, members: 4, icon: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png" },
        { title: "Add Progress Track", budget: "$3,000", completion: 10, members: 2, icon: "https://cdn-icons-png.flaticon.com/512/732/732220.png" },
        { title: "Fix Platform Errors", budget: "Not set", completion: 100, members: 3, icon: "https://cdn-icons-png.flaticon.com/512/1256/1256655.png" },
        { title: "Launch our Mobile App", budget: "$20,500", completion: 100, members: 5, icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
        { title: "Add the New Pricing Page", budget: "$500", completion: 25, members: 1, icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png" },
        { title: "Redesign New Online Shop", budget: "$2,000", completion: 40, members: 3, icon: "https://cdn-icons-png.flaticon.com/512/732/732245.png" },
    ];

    const orders = [
        { description: "$2400, Design changes", date: "22 DEC 7:20 PM", completion: 60 },
        { description: "New order #1832412", date: "21 DEC 11 PM", completion: 10 },
        { description: "Server payments for April", date: "21 DEC 9:34 PM", completion: 40 },
        { description: "New card added for order #4395133", date: "20 DEC 2:20 AM", completion: 100 },
        { description: "Unlock packages for development", date: "18 DEC 4:54 AM", completion: 100 },
        { description: "New order #9583120", date: "17 DEC", completion: 25 },
    ];

    return (
        <div className="dashboard-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card-icon">{item.icon}</div>
                        <div className="card-content">
                            <h2>{item.title}</h2>
                            <p>{item.value}</p>
                            <span>{item.percentage} than last month</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 space-y-6">
                <div className="projects-card">
                    <h2 className="text-xl font-semibold mb-4">Projects</h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="table-header">
                                COMPANIES
                            </th>
                            <th scope="col" className="table-header">
                                MEMBERS
                            </th>
                            <th scope="col" className="table-header">
                                BUDGET
                            </th>
                            <th scope="col" className="table-header">
                                COMPLETION
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {projects.map((project, index) => (
                            <tr key={index}>
                                <td className="table-cell">
                                    <div className="icon-container">
                                        <img src={project.icon} alt={project.title} className="project-icon"/>
                                        <div className="text-sm font-medium text-gray-900">
                                            {project.title}
                                        </div>
                                    </div>
                                </td>
                                <td className="table-cell">
                                    <div className="text-sm text-gray-900">{project.members} members</div>
                                </td>
                                <td className="table-cell">
                                    <div className="text-sm text-gray-900">{project.budget}</div>
                                </td>
                                <td className="table-cell">
                                    <div className="progress-bar-container">
                                        <div style={{ width: `${project.completion}%` }} className={`progress-bar ${project.completion === 100 ? 'green' : ''}`}></div>
                                    </div>
                                    <div className="text-sm text-gray-900">{project.completion}%</div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="orders-card">
                    <h2 className="text-xl font-semibold mb-4">Orders Overview</h2>
                    <div className="space-y-4">
                        {orders.map((order, index) => (
                            <div key={index} className="order flex justify-between items-center bg-white p-4 rounded-lg shadow">
                                <div className="flex-grow">
                                    <div className="text-gray-700">{order.description}</div>
                                    <div className="text-sm text-gray-500">{order.date}</div>
                                    <div className="progress-bar-container">
                                        <div style={{ width: `${order.completion}%` }} className={`progress-bar ${order.completion === 100 ? 'green' : ''}`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
