"use client";

import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-900/20 flex items-center justify-center p-4">
      <Navbar />
      <div className="w-full max-w-md pt-20">
        <div className="premium-card p-10 bg-transparent">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Join us today</h1>
            <p className="text-slate-400">Create an account to start tracking your orders</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-4 py-2 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-2">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button 
              type="button"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold mt-4 hover:opacity-90 transition-opacity"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-slate-400">
              Already have an account? <Link href="/auth/login" className="text-primary font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
