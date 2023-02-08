import React from 'react'
import { useRouter, withRouter } from 'next/router'

const clientprojet = () => {
    const router = useRouter()
    console.log('==>',router.query)
  return (
    <div>clientprojet</div>
  )
}

export default clientprojet