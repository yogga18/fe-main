// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const urlPath = request.nextUrl.pathname;

//   const protectedWhenNotLoggedIn = urlPath === '/dashboard';
//   const signUpRoute = urlPath === '/register';
//   const loginInRoute = urlPath === '/login';

//   const tokenInBrowser: any = request.cookies.get('userAuth')?.value;

//   if (protectedWhenNotLoggedIn && !tokenInBrowser) {
//     return NextResponse.redirect(new URL('/login', request.nextUrl));
//   }

//   if (tokenInBrowser && signUpRoute) {
//     return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
//   }

//   if (tokenInBrowser && loginInRoute) {
//     return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
//   }
// }

// export const config = {
//   matcher: ['/register', '/login', '/dashboard'],
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const urlPath = request.nextUrl.pathname;

  // Daftar rute yang memerlukan proteksi
  const protectedRoutes = ['/dashboard', '/profile'];

  // Cek apakah halaman yang diakses memerlukan proteksi
  const isProtectedRoute = protectedRoutes.includes(urlPath);

  // Mendapatkan nilai token dari cookie 'userAuth'
  const tokenInBrowser: any = request.cookies.get('userAuth')?.value;

  // Jika halaman memerlukan proteksi dan pengguna belum login, redirect ke halaman login
  if (isProtectedRoute && !tokenInBrowser) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // Jika pengguna sudah login dan mencoba mengakses halaman proteksi, izinkan akses
  if (tokenInBrowser && isProtectedRoute) {
    return;
  }

  // Jika pengguna sudah login dan mencoba mengakses halaman registrasi atau login, redirect ke dashboard
  const signUpRoute = urlPath === '/register';
  const loginInRoute = urlPath === '/login';

  if (tokenInBrowser && (signUpRoute || loginInRoute)) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }
}

export const config = {
  // Daftar rute yang akan di-handle oleh middleware
  matcher: ['/register', '/login', '/dashboard', '/profile'],
};
