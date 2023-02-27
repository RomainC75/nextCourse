import { reorganizedDataFn } from "./reorganizeData";

const api_url = process.env.DB_FIREBASE

export async function getAllEvents(){
    const ans = await fetch(api_url);
    const data = await ans.json();
    return reorganizedDataFn(data)
}

export async function getFeaturedEvents(){
    const allEvents = await getAllEvents()
    return allEvents.filter(event=>event.isFeatured)   
}

export async function getEventById(id){
    const allEvents = await getAllEvents()
    const foundEvent = allEvents.find(event=>event.id===id)
    return foundEvent ? foundEvent : null
}
