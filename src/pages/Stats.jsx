import React, { useEffect, useState } from 'react';

export default function OrderStats() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('http://localhost:10000/order-stats'); // Adjust to your backend URL
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error("Error fetching order stats:", error);
            }
        };

        fetchStats();
    }, []);

    if (!stats) return <p>Loading...</p>;

    return (
        <div className="grid grid-cols-4 gap-4">
            {['totalOrders', 'processing', 'shipped', 'completed'].map((key) => (
                <div key={key} className="bg-white shadow-md p-4 rounded-md">
                    <h2 className="text-xl font-bold">{key.replace(/([A-Z])/g, ' $1').trim()}</h2>
                    <p className="text-3xl">{stats[key].count}</p>
                    <p className={`text-sm ${stats[key].change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {stats[key].change}% from last month
                    </p>
                </div>
            ))}
        </div>
    );
}
