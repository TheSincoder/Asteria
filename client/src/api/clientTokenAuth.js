import {create} from "apisauce";


const apiClient = (token, cancelToken) => create(
    {
        headers:{
        baseURL: window.location.host ==='127.0.0.1'||window.location.host === 'localhost' ? "http://127.0.0.1:5000" : '',
        headers:{
            Authorization: "Bearer "+  token
        },
        cancelToken
    }
}
    )

   

export default apiClient