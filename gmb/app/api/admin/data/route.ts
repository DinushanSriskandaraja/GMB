import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    // Calculate stats dynamically
    const orders = dbData.orders || [];
    const users = dbData.users || [];
    const contacts = dbData.contacts || [];
    const gallery = dbData.gallery || [];
    const categories = dbData.categories || [];
    
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((acc: number, order: any) => acc + (order.total || 0), 0);
    const newInquiries = contacts.length;

    return NextResponse.json({
      orders,
      users,
      contacts,
      gallery,
      categories,
      stats: {
        totalOrders,
        totalRevenue: `$${totalRevenue.toLocaleString()}`,
        newInquiries
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch admin data' }, { status: 500 });
  }
}
