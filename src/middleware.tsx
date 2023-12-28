import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const urlPath = request.nextUrl.pathname;

  const protectedWhenNotLoggedIn = urlPath === '/dashboard';
  const signUpRoute = urlPath === '/register';
  const loginInRoute = urlPath === '/login';

  const tokenInBrowser: any = request.cookies.get('userAuth')?.value;

  if (protectedWhenNotLoggedIn && !tokenInBrowser) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  if (tokenInBrowser && signUpRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  if (tokenInBrowser && loginInRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }
}

export const config = {
  matcher: ['/register', '/login', '/dashboard'],
};
