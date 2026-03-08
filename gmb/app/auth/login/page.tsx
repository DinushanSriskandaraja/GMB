"use client";

import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Navbar />
      <div className="w-full max-w-md">
        <div className="premium-card p-10 bg-white">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-500">Enter your credentials to access your account</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="admin@curtainmaster.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-bold text-gray-700">Password</label>
                <Link href="#" className="text-xs text-primary font-bold hover:underline">Forgot Password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <Link href="/admin">
              <button 
                type="button"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold mt-4 hover:opacity-90 transition-opacity"
              >
                Sign In
              </button>
            </Link>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500">
              Don't have an account? <Link href="/auth/register" className="text-primary font-bold hover:underline">Create One</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
