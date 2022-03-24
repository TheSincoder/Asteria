import apiClientNoAuth from './clientNoAuth'
import apiClientTokenAuth from './clientTokenAuth'


const endpoint = '/api/register'


export const postUser = async(data, cancelToken)=>{
    const response = await apiClientNoAuth(cancelToken).post(endpoint,data);
    return response.ok
}


export const putUser = async(token, data, cancelToken)=>{
    const response = await apiClientTokenAuth(token).put(endpoint,data);
    return response.ok
}