"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router=useRouter()
  return (
    router.push('/home')
  )
}
export default page;