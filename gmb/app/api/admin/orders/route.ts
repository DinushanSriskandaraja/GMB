import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function PATCH(request: Request) {
  try {
    const { orderId, status } = await request.json();
    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    const orderIndex = dbData.orders.findIndex((o: any) => o.id === orderId);
    if (orderIndex === -1) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    dbData.orders[orderIndex].status = status;
    fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));

    return NextResponse.json({ success: true, order: dbData.orders[orderIndex] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
  }
}
