import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    dbData.orders = dbData.orders.filter((order: any) => order.id !== id);
    fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete order' }, { status: 500 });
  }
}
