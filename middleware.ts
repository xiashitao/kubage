import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.cookies.has('token')) {
    request.headers.set(
      'Authorization',
      request.cookies.get('token')?.value || ''
    );
  }

  const response = NextResponse.next();
  if (request.headers.has('Authorization')) {
    response.cookies.set('token', request.headers.get('Authorization') || '');
  }
  return response;
}
