"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState<any>(null);
  const [error, setError] = useState('');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Mock tracking logic using the db.json structure
    const mockOrders: any = {
      'ORD001': { status: 'In Progress', items: 'Silk Curtains (2x)', date: '2026-03-01' },
      'ORD002': { status: 'Shipped', items: 'Velvet Drapes (1x)', date: '2026-03-05' },
    };

    if (mockOrders[orderId]) {
      setOrderStatus(mockOrders[orderId]);
    } else {
      setError('Order not found. Please check your Order ID.');
      setOrderStatus(null);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/50">
      <Navbar />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Track Your <span className="gradient-text">Order</span></h1>
          <p className="text-xl text-gray-600 mb-12">
            Enter your Order ID to get real-time updates on your shipment.
          </p>

          <div className="premium-card p-10 bg-white">
            <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Order ID (e.g., ORD001)"
                className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value.toUpperCase())}
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                Track Now
              </button>
            </form>

            {error && <p className="text-red-500 mt-6 font-medium">{error}</p>}

            {orderStatus && (
              <div className="mt-12 text-left space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="text-gray-500">Order ID:</span>
                  <span className="font-bold">{orderId}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="text-gray-500">Status:</span>
                  <span className="bg-primary/10 text-primary px-4 py-1 rounded-full font-bold">
                    {orderStatus.status}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="text-gray-500">Items:</span>
                  <span className="font-medium text-gray-800">{orderStatus.items}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="text-gray-500">Placed on:</span>
                  <span className="font-medium text-gray-800">{orderStatus.date}</span>
                </div>

                <div className="mt-8 relative pt-8">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: orderStatus.status === 'Shipped' ? '100%' : '50%' }} 
                      />
                   </div>
                   <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest mt-4">
                      <span className={orderStatus.status === 'In Progress' ? 'text-primary' : ''}>Processing</span>
                      <span className={orderStatus.status === 'Shipped' ? 'text-primary' : ''}>Shipped</span>
                      <span>Delivered</span>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
