const api_url = 'https://nextjs-course-59b30-default-rtdb.europe-west1.firebasedatabase.app/sales.json'

const LastSales = ({sales}) => {
    if(!sales){
        <p>No data</p>
    }

  return (
    <ul>
        {sales.map(sale=><li key={sale.id}>
            {sale.username} - {sale.volume}
        </li>)}
    </ul>
  )
}

export default LastSales


export async function getStaticProps(){
    return fetch(api_url)
    .then(ans=>ans.json())
    .then(data=>{
        const transformedSales = Object.keys(data).map(key=>({id:key, ...data[key] }))
        return{
            props:{
                sales: transformedSales,
            },
            revalidate:10
        }
    })
}