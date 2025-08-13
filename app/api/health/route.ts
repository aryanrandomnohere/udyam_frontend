import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL ? 'configured' : 'missing'
  })
}
