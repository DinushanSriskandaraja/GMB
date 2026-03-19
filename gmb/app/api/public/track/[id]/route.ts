import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const mobile = searchParams.get('mobile');

    if (!mobile) {
      return NextResponse.json({ error: 'Mobile number required' }, { status: 400 });
    }

    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    // In our db.json, we don't have mobile in orders yet, 
    // but the TrackOrderModal logic expects it. 
    // Usually, we'd find the user by userId and check their mobile.
    // For now, let's assume we might have mobile in the order object directly 
    // if we update it, or we check the user table.
    
    const order = dbData.orders.find((o: any) => o.id === id);

    if (!order) {
      return NextResponse.json({ error: 'Order not found. Please check your reference.' }, { status: 404 });
    }

    if (order.mobile !== mobile) {
      return NextResponse.json({ error: 'Mobile number does not match this order.' }, { status: 403 });
    }

    return NextResponse.json({ order });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
