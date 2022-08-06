import { get, post, del, put } from "./api.js";


export async function getAlloffers(){
    return get("/data/offers?sortBy=_createdOn%20desc")
}

export async function createanOffer(offer){
    return post("/data/offers", offer)
}

export async function getanOfferbyId(id){
    return get('/data/offers/' + id)
}

export async function deleteanOffer(id){
    return del('/data/offers/' + id)
}

export async function updatetheoffer(id, offer){
    return put('/data/offers/' + id, offer)
}

export async function applyForanOffer(id){
    return post('/data/applications/' + id)
}
export async function getTotalAppl(id){
    return post(`/data/applications?where=offerId%3D%22${id}%22&distinct=_ownerId&count`)
}