import React from "react";
import { FaUsers, FaChartLine, FaDollarSign, FaServer } from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

// --- MOCK DATA (Unchanged) ---
const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4500 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 5500 },
];

const userGrowthData = [
  { name: "Q1", users: 200 },
  { name: "Q2", users: 350 },
  { name: "Q3", users: 500 },
  { name: "Q4", users: 700 },
];

// --- Refined Metric Card Component ---
const MetricCard = ({ icon, title, value, change, changeType }) => (
  <div className="bg-white p-5 rounded-xl shadow-md flex items-center space-x-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300">
    <div className="bg-indigo-100 p-3 rounded-full">
      <div className="text-2xl text-indigo-600">{icon}</div>
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
      <p className={`text-xs font-medium ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </p>
    </div>
  </div>
);

// --- Refined Chart Tooltip ---
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="label font-semibold text-gray-700">{`${label}`}</p>
        <p className="intro text-indigo-600">{`${payload[0].name} : ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};


// --- The Main Home Component: Perfected Layout ---
const Home = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    {/* Header */}
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-gray-900">Enterprise Dashboard</h1>
      <p className="text-md text-gray-600 mt-1">
        Welcome back. Here is your real-time performance overview.
      </p>
    </header>

    {/* Metric Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard
        icon={<FaDollarSign />}
        title="Total Revenue"
        value="$52,480"
        change="+12.5% This Month"
        changeType="increase"
      />
      <MetricCard
        icon={<FaUsers />}
        title="New Users"
        value="1,420"
        change="+8.2% This Month"
        changeType="increase"
      />
      <MetricCard
        icon={<FaChartLine />}
        title="Active Sessions"
        value="8,934"
        change="-1.4% Today"
        changeType="decrease"
      />
      <MetricCard
        icon={<FaServer />}
        title="Server Load"
        value="45.6%"
        change="+2.1% vs Avg"
        changeType="increase"
      />
    </div>

    {/* Charts Section */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Revenue Chart */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Revenue Trend (YTD)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={revenueData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#4F46E5"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* User Growth Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          User Growth
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={userGrowthData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{fontSize: "14px"}}/>
            <Bar dataKey="users" name="New Users" fill="#A5B4FC" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default Home;