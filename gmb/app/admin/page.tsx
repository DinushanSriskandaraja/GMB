"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Brand Colors
const COLORS = {
  primary: '#4CAF50',    // Green
  secondary: '#1F2E5A',  // Blue
  accent: '#F4A300',     // Yellow
};

const ORDER_STATUSES = ['Pending', 'In Progress', 'Shipped', 'Delivered', 'Cancelled'];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [orders, setOrders] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [statsData, setStatsData] = useState({
    totalOrders: 0,
    totalRevenue: '$0',
    newInquiries: 0
  });
  const [loading, setLoading] = useState(true);

  // Form States
  const [newGalleryItem, setNewGalleryItem] = useState({ title: '', category: '', image: '', description: '' });
  const [newCategory, setNewCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/admin/data');
      const data = await res.json();
      if (data.orders) {
        setOrders(data.orders);
        setUsers(data.users || []);
        setContacts(data.contacts || []);
        setGallery(data.gallery || []);
        setCategories(data.categories || []);
        setStatsData(data.stats);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateOrderStatus = async (orderId: string, status: string) => {
    try {
      const res = await fetch('/api/admin/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, status }),
      });
      if (res.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Update status error:', error);
    }
  };

  const handleAddGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGalleryItem),
      });
      if (res.ok) {
        setNewGalleryItem({ title: '', category: '', image: '', description: '' });
        fetchData();
      }
    } catch (error) {
      console.error('Add gallery error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteGalleryItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      const res = await fetch(`/api/admin/gallery/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Delete gallery error:', error);
    }
  };

  const handleDeleteOrder = async (id: string) => {
    if (!confirm('Permanently delete this order record?')) return;
    try {
      const res = await fetch(`/api/admin/orders/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Delete order error:', error);
    }
  };

  const handleManageCategory = async (action: 'ADD' | 'DELETE', categoryName: string) => {
    try {
      const res = await fetch('/api/admin/categories', {
        method: action === 'ADD' ? 'POST' : 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: categoryName }),
      });
      if (res.ok) {
        setNewCategory('');
        fetchData();
      }
    } catch (error) {
      console.error('Category error:', error);
    }
  };

  const stats = [
    { label: 'Total Orders', value: statsData.totalOrders, change: '+12%', icon: 'shopping-bag', color: COLORS.primary },
    { label: 'New Inquiries', value: statsData.newInquiries, change: '+5 today', icon: 'message-circle', color: COLORS.accent },
    { label: 'Total Revenue', value: statsData.totalRevenue, change: '+8%', icon: 'dollar-sign', color: COLORS.secondary },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-start hover:scale-105 transition-transform">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/5" style={{ backgroundColor: `${stat.color}15` }}>
                    <div className="w-6 h-6" style={{ color: stat.color }}>
                       {stat.icon === 'shopping-bag' && <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>}
                       {stat.icon === 'message-circle' && <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>}
                       {stat.icon === 'dollar-sign' && <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
                    </div>
                  </div>
                  <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">{stat.label}</h4>
                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-serif font-bold text-slate-900">{stat.value}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${stat.change.toString().startsWith('+') ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </section>
            {renderOrdersTable("Recent Activity", "Real-time status of latest GMB orders", 5)}
          </>
        );
      case 'Orders':
        return renderOrdersTable("All Orders", "Comprehensive list of all customer orders", orders.length);
      case 'Gallery Manager':
        return (
          <div className="space-y-12">
            {/* Add Gallery Item Form */}
            <section className="bg-white rounded-xl p-12 shadow-2xl border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-8">Add New Gallery Item</h2>
              <form onSubmit={handleAddGalleryItem} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Project Title</label>
                  <input 
                    type="text" 
                    required
                    value={newGalleryItem.title}
                    onChange={e => setNewGalleryItem({...newGalleryItem, title: e.target.value})}
                    placeholder="Minimalist Sheer..."
                    className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Category</label>
                  <select 
                    required
                    value={newGalleryItem.category}
                    onChange={e => setNewGalleryItem({...newGalleryItem, category: e.target.value})}
                    className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/50 appearance-none"
                  >
                    <option value="">Select Category</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Image URL</label>
                  <input 
                    type="text" 
                    required
                    value={newGalleryItem.image}
                    onChange={e => setNewGalleryItem({...newGalleryItem, image: e.target.value})}
                    placeholder="/images/project.png"
                    className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Description</label>
                  <input 
                    type="text" 
                    required
                    value={newGalleryItem.description}
                    onChange={e => setNewGalleryItem({...newGalleryItem, description: e.target.value})}
                    placeholder="Short project description..."
                    className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/50"
                  />
                </div>
                <div className="md:col-span-2 text-right">
                  <button 
                    disabled={isSubmitting}
                    className="bg-[#4CAF50] text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-[#4CAF50]/20 hover:scale-105 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Uploading...' : 'Publish to Gallery'}
                  </button>
                </div>
              </form>
            </section>

            {/* Current Gallery Grid */}
            <section className="bg-white rounded-xl p-12 shadow-2xl border border-slate-100">
               <h2 className="text-2xl font-serif font-bold text-slate-800 mb-8">Manage Gallery</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {gallery.map(item => (
                   <div key={item.id} className="group relative bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                     <div className="aspect-video bg-slate-200">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                     </div>
                     <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-slate-800">{item.title}</h3>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#4CAF50] bg-[#4CAF50]/10 px-2 py-0.5 rounded-md">{item.category}</span>
                        </div>
                        <p className="text-slate-500 text-sm line-clamp-1">{item.description}</p>
                        <button 
                          onClick={() => handleDeleteGalleryItem(item.id)}
                          className="mt-4 w-full py-2 bg-red-50 text-red-500 rounded-xl text-xs font-bold hover:bg-red-500 hover:text-white transition-all"
                        >
                          Remove Item
                        </button>
                     </div>
                   </div>
                 ))}
               </div>
            </section>
          </div>
        );
      case 'Inquiries':
        return (
          <section className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="px-12 py-10 border-b border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-slate-800">Customer Inquiries</h2>
              <p className="text-slate-400 text-sm font-medium mt-1">Messages from the contact form</p>
            </div>
            <div className="p-12">
              {contacts.length === 0 ? (
                <div className="text-center text-slate-400 py-10">No inquiries found.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contacts.map((c, i) => (
                    <div key={i} className="p-8 bg-slate-50 rounded-xl border border-slate-100 relative group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1F2E5A] font-bold shadow-sm">
                          {c.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{c.name}</p>
                          <p className="text-xs text-slate-400">{c.email}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed italic">"{c.message}"</p>
                      <button className="absolute top-8 right-8 text-slate-300 hover:text-red-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      case 'Users':
        return (
          <section className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="px-12 py-10 border-b border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-slate-800">System Users</h2>
              <p className="text-slate-400 text-sm font-medium mt-1">Manage administrative and customer accounts</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-50 uppercase tracking-[0.15em] text-[10px] font-bold text-slate-400">
                    <th className="px-12 py-6">Name</th>
                    <th className="px-12 py-6">Email</th>
                    <th className="px-12 py-6">Role</th>
                    <th className="px-12 py-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {users.map((user, i) => (
                    <tr key={i} className="group hover:bg-slate-50/80 transition-colors">
                      <td className="px-12 py-8 font-bold text-slate-700">{user.name}</td>
                      <td className="px-12 py-8 text-slate-500">{user.email}</td>
                      <td className="px-12 py-8">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          user.role === 'admin' ? 'bg-[#1F2E5A] text-white' : 'bg-[#4CAF50]/10 text-[#4CAF50]'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-12 py-8 text-right">
                        <button className="text-slate-300 hover:text-red-500 transition-colors">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      case 'Settings':
        return (
          <div className="space-y-12">
            <section className="bg-white rounded-xl p-12 shadow-2xl border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-8">Category Management</h2>
              <div className="flex gap-4 mb-8">
                <input 
                  type="text" 
                  value={newCategory}
                  onChange={e => setNewCategory(e.target.value)}
                  placeholder="New category name..."
                  className="flex-1 bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 focus:outline-none"
                />
                <button 
                  onClick={() => handleManageCategory('ADD', newCategory)}
                  className="bg-[#1F2E5A] text-white px-6 py-3 rounded-xl font-bold"
                >
                  Add Category
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                 {categories.map(c => (
                   <div key={c} className="flex items-center gap-3 bg-slate-50 px-6 py-2 rounded-xl border border-slate-100 group">
                      <span className="font-bold text-slate-700">{c}</span>
                      <button 
                        onClick={() => handleManageCategory('DELETE', c)}
                        className="text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                   </div>
                 ))}
              </div>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  const renderOrdersTable = (title: string, subtitle: string, limit: number) => (
    <section className="bg-white rounded-xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
      <div className="px-12 py-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-800">{title}</h2>
          <p className="text-slate-400 text-sm font-medium mt-1">{subtitle}</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:border-[#F4A300] hover:text-[#F4A300] transition-all">Filter</button>
          <button className="px-6 py-2.5 rounded-full bg-[#1F2E5A] text-white text-sm font-bold hover:shadow-lg transition-all">Export Report</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-50 uppercase tracking-[0.15em] text-[10px] font-bold text-slate-400">
              <th className="px-12 py-6">Reference</th>
              <th className="px-12 py-6">Recipient</th>
              <th className="px-12 py-6">Category</th>
              <th className="px-12 py-6">Status Type</th>
              <th className="px-12 py-6">Amount</th>
              <th className="px-12 py-6 text-right">Date Issued</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {orders.slice(0, limit).map((order) => (
              <tr key={order.id} className="group hover:bg-slate-50/80 transition-colors">
                <td className="px-12 py-8">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleDeleteOrder(order.id)}
                      className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                    <span className="font-mono text-xs font-bold text-slate-400">{order.id}</span>
                  </div>
                </td>
                <td className="px-12 py-8 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs uppercase shadow-sm">
                    {order.customer?.split(' ').map((n: string) => n[0]).join('') || order.userId}
                  </div>
                  <span className="font-bold text-slate-700">{order.customer || `User ${order.userId}`}</span>
                </td>
                <td className="px-12 py-8">
                  <span className="text-slate-500 text-sm font-medium">{order.items || order.type}</span>
                </td>
                <td className="px-12 py-8">
                  <select 
                    value={order.status}
                    onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border-none focus:ring-2 focus:ring-[#1F2E5A]/20 cursor-pointer ${
                      order.status === 'Shipped' || order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 
                      order.status === 'Cancelled' ? 'bg-red-100 text-red-600' :
                      'bg-amber-100 text-amber-600'
                    }`}
                  >
                    {ORDER_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
                <td className="px-12 py-8 font-serif font-bold text-lg text-slate-800">${order.total}</td>
                <td className="px-12 py-8 text-right">
                   <span className="text-slate-400 text-xs font-bold">{order.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {activeTab === 'Dashboard' && (
        <div className="px-12 py-8 bg-slate-50/50 flex justify-center">
          <button onClick={() => setActiveTab('Orders')} className="text-[#1F2E5A] font-bold text-sm flex items-center gap-2 group">
            View All Activity Logs
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>
      )}
    </section>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4CAF50]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Premium Sidebar */}
      <aside className="w-72 bg-[#1F2E5A] text-white flex flex-col shadow-2xl z-20 sticky top-0 h-screen">
        <div className="p-10 flex items-center gap-4">
          <div className="w-10 h-10 bg-[#4CAF50] rounded-xl flex items-center justify-center shadow-lg shadow-[#4CAF50]/20">
            <span className="font-bold text-xl italic">G</span>
          </div>
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight">GMB <span className="text-[#4CAF50]">Admin</span></Link>
        </div>

        <nav className="flex-1 px-6 space-y-3 mt-4 overflow-y-auto custom-scrollbar">
          {['Dashboard', 'Orders', 'Gallery Manager', 'Inquiries', 'Users', 'Settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 font-bold text-sm group ${
                activeTab === tab 
                ? 'bg-[#4CAF50] text-white shadow-lg shadow-[#4CAF50]/30 scale-105' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`w-2 h-2 rounded-full transition-all ${activeTab === tab ? 'bg-white scale-150' : 'bg-transparent group-hover:bg-slate-600'}`} />
              {tab}
            </button>
          ))}
        </nav>

        <div className="p-10 border-t border-white/10">
          <Link href="/auth/login" className="flex items-center gap-3 text-[#F4A300] font-bold hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        <header className="bg-white border-b border-slate-200 px-12 py-8 flex justify-between items-center sticky top-0 z-10 backdrop-blur-md bg-white/80">
          <div>
            <h1 className="text-3xl font-serif font-medium text-slate-900 tracking-tight">{activeTab}</h1>
            <p className="text-slate-500 text-sm mt-1">GMB Internal Management Portal</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200">
              <div className="w-9 h-9 bg-[#1F2E5A] rounded-xl flex items-center justify-center text-[#F4A300] font-bold border border-[#F4A300]/20 shadow-inner">GA</div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">GMB Admin</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">System Root</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-12 space-y-12 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
