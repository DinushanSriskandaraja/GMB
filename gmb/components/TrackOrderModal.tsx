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
    
    // Simulate API call
    setTimeout(() => {
      // Mock tracking logic
      const mockOrders: any = {
        'ORD001': { status: 'In Progress', items: 'Silk Curtains (2x)', date: '2026-03-01', mobile: '1234567890' },
        'ORD002': { status: 'Shipped', items: 'Velvet Drapes (1x)', date: '2026-03-05', mobile: '0987654321' },
      };

      const order = mockOrders[orderNumber];

      if (order && order.mobile === mobileNumber) {
        setOrderStatus(order);
      } else if (order && order.mobile !== mobileNumber) {
        setError('Mobile number does not match for this order.');
        setOrderStatus(null);
      } else {
        setError('Order not found. Please check your Order Number.');
        setOrderStatus(null);
      }
      setLoading(false);
    }, 800);
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
      <div className="relative w-full max-w-lg bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-8 sm:p-12">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">Track Your <span className="gradient-text">Order</span></h2>
              <p className="text-slate-400">Enter your details to see order updates.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-full transition-colors"
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
                  className="w-full px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-slate-900/20"
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
                  className="w-full px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-slate-900/20"
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
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  'Track Now'
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Status</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
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
                <div className="absolute top-0 left-0 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-out" 
                    style={{ width: orderStatus.status === 'Shipped' ? '100%' : '50%' }} 
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-3 px-1">
                  <span className={orderStatus.status === 'In Progress' ? 'text-primary' : ''}>Processing</span>
                  <span className={orderStatus.status === 'Shipped' ? 'text-primary' : ''}>Shipped</span>
                  <span>Delivered</span>
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
