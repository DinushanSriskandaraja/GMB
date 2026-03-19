import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { category } = await request.json();
    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    if (!dbData.categories.includes(category)) {
      dbData.categories.push(category);
      fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));
    }

    return NextResponse.json({ success: true, categories: dbData.categories });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add category' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { category } = await request.json();
    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    dbData.categories = dbData.categories.filter((c: string) => c !== category);
    fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));

    return NextResponse.json({ success: true, categories: dbData.categories });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
  }
}
