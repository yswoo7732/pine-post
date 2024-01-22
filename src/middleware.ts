import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url))

  // if (response.ok) {
    // console.log(`[${new Date().toISOString()}] Response Status: ${response}`);
  // }
  return console.log(
    `[${new Date().toISOString()}] Request Method: ${request.method}, URL: ${
      request.url
    }`
  );
}
