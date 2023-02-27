import { useRouter } from 'next/router'

const ClientProjetsPage = () => {
    const router = useRouter()

    const loadProject = () =>{
        router.push({
            pathname:'/clients/[id]/[clientprojectid]',
            query:{
                id:'myid',
                clientprojectid:'projectid'
            }
        })
        // router.replace('/clients/bob/projecta')
    }

  return (
    <div>
        <h1>ClientProjetsPage</h1>
        <button onClick={()=>loadProject()}>Load Project A</button>
    </div>
  )
}

export default ClientProjetsPage