import { get, post, del, put } from "./api.js";


export async function getAllcars(){
    return get("/data/cars?sortBy=_createdOn%20desc")
}

export async function createCar(car){
    return post("/data/cars", car)
}

export async function getCarbyId(id){
    return get('/data/cars/' + id)
}

export async function deleteCar(id){
    return del('/data/cars/' + id)
}

export async function updateCar(id, car){
    return put('/data/cars/' + id, car)
}

export async function getCarsbyuser(userId){
    return get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getCarsbySearch(querys){
    return get(`/data/cars?where=year%3D${querys}`)
}