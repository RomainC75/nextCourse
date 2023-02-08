import React from 'react'

const UserProfilePage = (props) => {
  return (
    <h1>{props.username}</h1>
  )
}

export default UserProfilePage

export async function getServerSideProps(context){
    const {params, req, res} = context

    console.log('SERVER SIDE +++++++++++++++++++++++++++++++')

    return {
        props:{
            username: 'bob'
        }
    }
}