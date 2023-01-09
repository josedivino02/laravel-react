import Axios from "axios";

const URL = "http://localhost:8000/api" 

export async function getUsersAll() {
    const resquest = await Axios.get(`${URL}/user/userSituation`)
            
    return {
        type: 'USERS_FETCHED',
        payload: resquest
    }
}

export async function getUserBlock() {
    const resquest = await Axios.get(`${URL}/user/userSituation/2`)
            
    return {
        type: 'USERS_B_FETCHED',
        payload: resquest
    }
}

export async function getUserDelete() {
    const resquest = await Axios.get(`${URL}/user/userSituation/3`)
            
    return {
        type: 'USERS_E_FETCHED',
        payload: resquest
    }
}
