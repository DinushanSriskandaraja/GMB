import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const inquiry = await request.json();
    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    const newInquiry = {
      ...inquiry,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0]
    };

    if (!dbData.contacts) dbData.contacts = [];
    dbData.contacts.push(newInquiry);
    
    fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));

    return NextResponse.json({ success: true, inquiry: newInquiry });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 });
  }
}
