"use client";

import Link from 'next/link';

export default function AdminDashboard() {
  const orders = [
    { id: 'ORD001', customer: 'John Doe', status: 'In Progress', total: '$250', date: 'Mar 1, 2026' },
    { id: 'ORD002', customer: 'Jane Smith', status: 'Shipped', total: '$180', date: 'Mar 5, 2026' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar  */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden lg:flex flex-col">
        <div className="p-8">
          <Link href="/" className="text-xl font-bold gradient-text">Admin Panel</Link>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-8">
          <div className="bg-primary/5 text-primary px-4 py-3 rounded-xl font-bold">Dashboard</div>
          <div className="text-gray-500 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">Orders</div>
          <div className="text-gray-500 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">Contacts</div>
          <div className="text-gray-500 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">Users</div>
        </nav>
        <div className="p-8 border-t">
          <Link href="/auth/login" className="text-red-500 font-bold hover:opacity-80 transition-opacity">Logout</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">A</div>
            <span className="font-medium">System Admin</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="premium-card p-8 bg-white">
            <p className="text-gray-500 mb-2">Total Orders</p>
            <h3 className="text-4xl font-bold">124</h3>
            <p className="text-green-500 text-sm mt-2 font-medium">+12% from last month</p>
          </div>
          <div className="premium-card p-8 bg-white">
            <p className="text-gray-500 mb-2">New Inquiries</p>
            <h3 className="text-4xl font-bold">48</h3>
            <p className="text-primary text-sm mt-2 font-medium">+5 today</p>
          </div>
          <div className="premium-card p-8 bg-white">
            <p className="text-gray-500 mb-2">Total Revenue</p>
            <h3 className="text-4xl font-bold">$12,450</h3>
            <p className="text-green-500 text-sm mt-2 font-medium">+8% from last month</p>
          </div>
        </div>

        <div className="premium-card bg-white overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Orders</h2>
            <button className="text-primary font-bold text-sm">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-8 py-4 font-bold text-sm text-gray-500">Order ID</th>
                  <th className="px-8 py-4 font-bold text-sm text-gray-500">Customer</th>
                  <th className="px-8 py-4 font-bold text-sm text-gray-500">Status</th>
                  <th className="px-8 py-4 font-bold text-sm text-gray-500">Total</th>
                  <th className="px-8 py-4 font-bold text-sm text-gray-500">Date</th>
                  <th className="px-8 py-4 font-bold text-sm text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t border-gray-50">
                    <td className="px-8 py-6 font-medium">{order.id}</td>
                    <td className="px-8 py-6">{order.customer}</td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1 rounded-full text-xs font-bold ${order.status === 'Shipped' ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'
                        }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 font-bold">{order.total}</td>
                    <td className="px-8 py-6 text-gray-500 text-sm">{order.date}</td>
                    <td className="px-8 py-6">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
