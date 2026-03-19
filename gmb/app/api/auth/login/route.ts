import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    const user = dbData.users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      // In a real app, you'd set a session cookie here
      return NextResponse.json({ success: true, user: { name: user.name, role: user.role } });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
