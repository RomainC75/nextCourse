import React from 'react'
import {useRouter} from 'next/router'

const BlogPostsPage = () => {
    const router = useRouter()
    console.log('==>',router.query)
  return (
    <h1>BlogPostsPage</h1>
  )
}

export default BlogPostsPage