"use client";
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function ProtectedLayout({
  children,
  params: { session },
}: Readonly<{
  children: React.ReactNode;
  params: { session: any };
}>) {
  return (
    <SessionProvider session={session} basePath={`${process.env.NEXT_PUBLIC_BASEPATH}/api/auth/`}>
      {children}
    </SessionProvider>
  )
}
