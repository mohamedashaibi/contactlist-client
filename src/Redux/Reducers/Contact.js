import {ADD, DELETE, EDIT, GET} from '../Actions/Contact'
import axios from '../../axios'
const initialState = {
    contacts: []
}

export const ContactReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case ADD:
            const newContact = axios.post("/contacts", payload).then((response)=>{return response.data}).catch((err)=>{console.log(err)})
            return ({
                contacts: [...state.contacts, newContact]
            })
        case DELETE:
            const deletedContact = axios.delete("/contacts", payload).then((response)=>{return response.data}).catch((err)=>{console.log(err)})
            return ({
                contacts: state.contacts.filter((el)=>{
                    if(el._id===deletedContact._id){
                        return false
                    }else{
                        return true
                    }
                })
            })
        case EDIT:
            
            break
        case GET:
            console.log("in get")
            axios.get('/').then((response)=>
                {
                    console.log("Data = " + response.data)
                    return({
                        contacts: [...response.data]
                    })
                }).catch((err)=>console.log(err))
                
            break
        default:
            return state

    }
}