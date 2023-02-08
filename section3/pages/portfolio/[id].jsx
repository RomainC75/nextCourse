import { useRouter, withRouter } from 'next/router'


const PortfolioPage = () => {
    const router = useRouter()
    console.log('==>',router.pathname)
    console.log('==>',router.query)
  return (
    <h1>PortfolioPage</h1>
  )
}

export default PortfolioPage