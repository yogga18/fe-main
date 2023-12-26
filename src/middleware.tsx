import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const urlPath = request.nextUrl.pathname;

  const protectedWhenNotLoggedIn = urlPath === '/dashboard';
  const signUpRoute = urlPath === '/register';
  const loginInRoute = urlPath === '/login';

  const tokenInBrowser: any = request.cookies.get('userAuth')?.value;

  // console.log('tokenInBrowser', tokenInBrowser);

  const handleDecode = () => {
    if (tokenInBrowser !== undefined) {
      const tokenInBrowserJSON = JSON?.parse(tokenInBrowser);

      try {
        const decoded = jwt.decode(tokenInBrowserJSON.data);

        // console.log('decoded', decoded);
      } catch (error) {
        console.error('Gagal mendekode token:', error);
      }
    } else {
      return 'cookies masih kosong';
    }
  };

  handleDecode();

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
