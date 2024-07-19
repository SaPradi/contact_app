import { AxiosResponse } from "axios"
import api from "../lib/axios"
import { ContactResponse, ContactsResponse } from "../interfaces"

export const getContacts = ():Promise<AxiosResponse<ContactsResponse>> => {
    return api.get('users')
}
export const getContact = (id:number):Promise<AxiosResponse< ContactResponse | {} >> =>{
    return api.get(`users/${id}`)
}