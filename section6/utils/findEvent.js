export const findEvent = (data, slug) =>{
    console.log('slug : ',slug)

    return data.filter(event=>{
        const date = new Date(event.date)
        const year = date.getFullYear()
        const month = date.getMonth() 
        return year===parseInt(slug[0]) && month+1===parseInt(slug[1])
    })
}