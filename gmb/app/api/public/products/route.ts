import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    return NextResponse.json({
      tabs: dbData.productTabs || [],
      categoryMetadata: dbData.categoryMetadata || {},
      styles: dbData.productStyles || [],
      rooms: dbData.categories || [],
      products: dbData.products || []
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
