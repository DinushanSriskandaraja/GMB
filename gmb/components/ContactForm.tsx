'use client';

// Force re-render after hydration fix
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const ContactFormContent = () => {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState<'general' | 'quote'>('general');
  const [products, setProducts] = useState([{ category: 'Curtains', count: 1 }]);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', address: '' });
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const type = searchParams.get('form');
    if (type === 'quote') {
      setFormType('quote');
    }
  }, [searchParams]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Image file (JPG, PNG, WebP)');
        return;
      }
      
      setPdfFile(file);
      setIsScanning(true);
      
      // Simulate scanning thread
      setTimeout(() => {
        setIsScanning(false);
      }, 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isScanning) return;
    
    setLoading(true);
    setStatus('idle');

    const payload = {
      ...formData,
      type: formType,
      products: formType === 'quote' ? products : undefined,
      hasAttachment: !!pdfFile
    };

    try {
      const res = await fetch('/api/public/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '', address: '' });
        setProducts([{ category: 'Curtains', count: 1 }]);
        setPdfFile(null);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const addProduct = () => {
    setProducts([...products, { category: 'Curtains', count: 1 }]);
  };

  const removeProduct = (index: number) => {
    if (products.length > 1) {
      setProducts(products.filter((_, i) => i !== index));
    }
  };

  const updateProduct = (index: number, field: 'category' | 'count', value: string | number) => {
    const newProducts = [...products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setProducts(newProducts);
  };

  return (
    <section className="pt-4 pb-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tab Selection */}
          <div className="flex p-1 bg-slate-100 rounded-xl mb-6 max-w-sm mx-auto">
            <button
              onClick={() => setFormType('general')}
              className={`flex-1 py-1.5 px-4 text-sm rounded-xl font-bold transition-all ${
                formType === 'general' 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              General Inquiry
            </button>
            <button
              onClick={() => setFormType('quote')}
              className={`flex-1 py-1.5 px-4 text-sm rounded-xl font-bold transition-all ${
                formType === 'quote' 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Request Quote
            </button>
          </div>

          <div className="premium-card p-6 md:p-8 glassmorphism border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-slate-800">
              {formType === 'general' ? 'Send a Message' : 'Request a Professional Measurement'}
            </h2>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-600 font-bold text-center animate-bounce text-sm">
                ✨ Thank you! Your request has been sent successfully.
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-500 font-bold text-center text-sm">
                ❌ Something went wrong. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all bg-white text-slate-800 placeholder:text-slate-400" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (234) 567-890"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all bg-white text-slate-800 placeholder:text-slate-400" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all bg-white text-slate-800 placeholder:text-slate-400" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 ml-1">House Address</label>
                  <input 
                    type="text" 
                    required={formType === 'quote'}
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    placeholder="123 Luxury Ave, Suite 456"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all bg-white text-slate-800 placeholder:text-slate-400" 
                  />
                </div>
              </div>

              {formType === 'quote' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">Upload Previous Quotation or Images (Optional)</label>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Max 5MB • PDF, JPG, PNG</span>
                  </div>
                  
                  <div className="relative group">
                    <div className={`relative border-2 border-dashed rounded-xl p-5 transition-all duration-500 text-center overflow-hidden ${
                      pdfFile ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-primary/50 bg-slate-50/50'
                    }`}>
                      {isScanning && (
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm animate-pulse">
                          <div className="relative w-full max-w-[200px] h-1 bg-slate-100 rounded-full overflow-hidden mb-2">
                            <div className="absolute inset-0 bg-primary w-1/3 animate-[scan_2s_ease-in-out_infinite]" />
                          </div>
                          <p className="text-primary text-sm font-bold animate-bounce">Scanning File Content...</p>
                        </div>
                      )}

                      <input 
                        type="file" 
                        accept="application/pdf,image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      />

                      <div className="flex flex-col items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${pdfFile ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                          {pdfFile ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700">{pdfFile ? pdfFile.name : 'Click or Drag Quotation / Images'}</p>
                          <p className="text-xs text-slate-500">{pdfFile ? `${(pdfFile.size / 1024 / 1024).toFixed(2)} MB • File Scanned` : 'Ensure file is clear and legible for measurement'}</p>
                        </div>
                      </div>
                    </div>
                    
                    <style jsx>{`
                      @keyframes scan {
                        0% { left: -40%; }
                        100% { left: 100%; }
                      }
                    `}</style>
                  </div>

                  <div className="flex justify-between items-center mb-1 pt-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Preferred Products & Windows</label>
                    <button 
                      type="button"
                      onClick={addProduct}
                      className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors flex items-center gap-1.5 text-xs font-bold"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add Product
                    </button>
                  </div>
                  
                  {products.map((product, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end bg-slate-50 p-3 rounded-xl border border-slate-100 relative group">
                      <div className="md:col-span-7 space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Product Category</label>
                        <select 
                          value={product.category}
                          onChange={(e) => updateProduct(index, 'category', e.target.value)}
                          className="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all bg-white text-slate-800"
                        >
                          <option>Curtains</option>
                          <option>Blinds</option>
                          <option>Sheers</option>
                          <option>Motorized Blinds</option>
                        </select>
                      </div>
                      <div className="md:col-span-4 space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Windows</label>
                        <input 
                          type="number" 
                          min="1"
                          value={product.count}
                          onChange={(e) => updateProduct(index, 'count', parseInt(e.target.value))}
                          className="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all bg-white text-slate-800" 
                        />
                      </div>
                      <div className="md:col-span-1 flex justify-center pb-1">
                        <button 
                          type="button"
                          onClick={() => removeProduct(index)}
                          className={`text-red-400 hover:text-red-600 transition-colors ${products.length === 1 ? 'opacity-0 cursor-default' : 'opacity-100'}`}
                          disabled={products.length === 1}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="How can we help you today?"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all bg-white text-slate-800 placeholder:text-slate-400"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading || isScanning}
                className="w-full bg-[var(--accent-yellow)] text-white py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-[#F4A300]/20 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                {isScanning ? 'Scanning File...' : (formType === 'general' ? 'Send Message' : 'Request Free Measurement')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
};

export default ContactForm;
