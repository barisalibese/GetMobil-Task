import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login') &&  request.cookies.get('Admin')?.value===undefined) {
        return  NextResponse.redirect(new URL('/admin/login', request.url));
    }
    if (request.nextUrl.pathname.startsWith('/admin/login')  &&  request.cookies.get('Admin')?.value!==undefined) {
        return  NextResponse.redirect(new URL('/admin', request.url));
    }
}
export const config = {
    matcher: [
        "/admin",
        "/admin/dashboard",
        "/admin/login"
    ],
};