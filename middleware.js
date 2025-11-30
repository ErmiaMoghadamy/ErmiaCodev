import { NextResponse } from "next/server"

export async function middleware(request) {
    const path = request.nextUrl.pathname
    const requestHeaders = new Headers(request.headers);
    
    if (path.startsWith("/Fa/") || path === "/Fa") {
        requestHeaders.set("X-lang", "fa")
    } else {
        requestHeaders.set("X-lang", "en")
    }

    return NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|assets|robots.txt).*)',
    ]
}