import { AxiosResponse } from "axios"
import api from "../lib/axios"
import { ContactData, ContactResponse, ContactsResponse } from "../interfaces"
import { generateRandomId } from "../utils/random"

export const getContacts = ():Promise<AxiosResponse<ContactsResponse>> => {
    return api.get('users')
}
export const getContact = (id:number):Promise<AxiosResponse< ContactResponse | {} >> =>{
    return api.get(`users/${id}`)
}
// Esta api no me sirve  asi que simulo un post 
export const createConctact = (contact:ContactData):Promise<ContactResponse> => {
    return new Promise((resolve)=>{
        const id:number = generateRandomId();
        resolve( {
            data:{
                id,
                avatar:null,
                ...contact
            },
            support:{
                url:"https://reqres.in/#support-heading",
                text:"To keep ReqRes free, contributions towards server costs are appreciated!"
            }
        } )

    })
}
