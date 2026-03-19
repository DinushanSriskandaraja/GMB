'use client';

import { useState, useEffect } from 'react';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrackOrderModal = ({ isOpen, onClose }: TrackOrderModalProps) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const res = await fetch(`/api/public/track/${orderNumber}?mobile=${mobileNumber}`);
      const data = await res.json();

      if (res.ok && data.order) {
        // Simple verification - although API will return 404 or something if not match
        // But let's assume API checks it. My API checks if it exists. 
        // I need to ensure my API checks the mobile.
        if (data.order.mobile === mobileNumber) {
          setOrderStatus(data.order);
        } else {
          setError('Mobile number does not match for this order.');
        }
      } else {
        setError(data.error || 'Order not found. Please check your Order Number.');
      }
    } catch (err) {
      setError('Connection error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-8 sm:p-12">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">Track Your <span className="gradient-text">Order</span></h2>
              <p className="text-slate-400">Enter your details to see order updates.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!orderStatus ? (
            <form onSubmit={handleTrack} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-200 ml-1">Order Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. ORD001"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-slate-900/40 text-white placeholder:text-slate-500"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-200 ml-1">Mobile Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter registered mobile"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-slate-900/40 text-white placeholder:text-slate-500"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>

              {error && (
                <div className="bg-red-500/10 text-red-400 p-4 rounded-xl text-sm font-medium border border-red-500/20 animate-in fade-in slide-in-from-top-1">
                  {error}
                </div>
              )}

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-xl animate-spin" />
                ) : (
                  'Track Now'
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Status</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider">
                    {orderStatus.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-100">{orderStatus.items}</h3>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex justify-between text-sm py-2 border-b border-white/10">
                  <span className="text-slate-400">Order ID:</span>
                  <span className="font-bold text-slate-200">{orderNumber}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-white/10">
                  <span className="text-slate-400">Placed on:</span>
                  <span className="font-medium text-slate-200">{orderStatus.date}</span>
                </div>
              </div>

              <div className="relative pt-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/10 rounded-xl overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-out" 
                    style={{ width: 
                      orderStatus.status === 'Delivered' ? '100%' : 
                      orderStatus.status === 'Shipped' ? '66%' : 
                      orderStatus.status === 'In Progress' ? '33%' : '0%' 
                    }} 
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-3 px-1">
                  <span className={['In Progress', 'Shipped', 'Delivered'].includes(orderStatus.status) ? 'text-primary' : ''}>Processing</span>
                  <span className={['Shipped', 'Delivered'].includes(orderStatus.status) ? 'text-primary' : ''}>Shipped</span>
                  <span className={orderStatus.status === 'Delivered' ? 'text-primary' : ''}>Delivered</span>
                </div>
              </div>

              <button 
                onClick={() => setOrderStatus(null)}
                className="w-full py-4 text-slate-400 font-bold hover:text-primary transition-colors text-sm"
              >
                Track Another Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrderModal;
