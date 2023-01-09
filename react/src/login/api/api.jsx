import Axios from "axios";

export const api = Axios.create({
    baseURL: "http://localhost:8000/api"
})

export async function createSession (email, password) {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    
    const response = await api.post("/user/login", data)
            .then((resp) => resp.data[0])
    console.log(data)
    return response
}
