import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const accountId = process.env.GOOGLE_ACCOUNT_ID;

    if (!accountId) {
      return NextResponse.json(
        { error: 'Missing GOOGLE_ACCOUNT_ID in environment variables' },
        { status: 400 }
      );
    }

    const res = await oauth2Client.request({
      url: `https://mybusinessbusinessinformation.googleapis.com/v1/accounts/${accountId}/locations?readMask=name,title`,
      method: 'GET',
    });

    return NextResponse.json(res.data);
  } catch (error: any) {
    console.error('Error fetching locations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch locations', details: error.message },
      { status: 500 }
    );
  }
}
