import { NextRequest, NextResponse } from 'next/server'

const slugs = [
  "ring-battery-doorbell",
  "kmouants-adjustable-doorbell",
  "google-nest-doorbell",
  "elago-google-doorbell-mount",
  "corinthian-bells-windchime",
  "astarin-bell-wind-chimes",
  "meinl-sonic-energy-chimes",
  "blink-video-doorbell",
  "remo-remobell-doorbell",
];


export function middleware(req: NextRequest) {
  const referer = req.headers.get('referer') || ''

  if (referer.startsWith('https://pureestcare.com')) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
    const url = req.nextUrl.clone()
    url.pathname = `/products/${randomSlug}`

    const res = NextResponse.redirect(url)
    res.cookies.set('ress', 'true', { path: '/', maxAge: 60 })

    return res
  }

}

export const config = {
  matcher: ['/care'],
}