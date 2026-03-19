import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const newItem = await request.json();
    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    const nextId = (Math.max(...dbData.gallery.map((i: any) => parseInt(i.id))) + 1).toString();
    const galleryItem = { ...newItem, id: nextId };
    
    dbData.gallery.push(galleryItem);
    fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));

    return NextResponse.json({ success: true, item: galleryItem });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add gallery item' }, { status: 500 });
  }
}
