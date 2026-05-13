import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import REDIRECTS from "./redirects.json";

export const runtime = 'experimental-edge'

/**
 * Static redirect map
 * key = OLD path
 * value = NEW path
 */

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  /**
   * 1️⃣ GLOBAL REDIRECT LOGIC (ALL PATHS)
   */
  if (REDIRECTS[pathname]) {
    const url = request.nextUrl.clone()
    url.pathname = REDIRECTS[pathname]

    return NextResponse.redirect(url, 301)
  }

  /**
   * 2️⃣ WORK PAGE COOKIE LOGIC (ONLY /work/*)
   */
  if (pathname.startsWith('/work')) {
    let country =
      request.headers.get('cloudfront-viewer-country') ||
      request.headers.get('CloudFront-Viewer-Country')

    if (!country && process.env.NODE_ENV === 'development') {
      country = 'IN'
    }

    if (!country) {
      country = 'UNKNOWN'
    }

    const response = NextResponse.next()

    response.cookies.set('user-country', country, {
      path: '/',
      sameSite: 'lax',
    })

    return response
  }

  /**
   * 3️⃣ DEFAULT
   */
  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
