export const reorganizedDataFn = (data)=> {
    return Object.keys(data).map(key=>({
    id:key,
    ...data[key]
  }))}