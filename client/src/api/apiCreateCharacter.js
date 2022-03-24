import apiClientNoAuth from './clientNoAuth';



const endpoint = '/api/create_character'


export const postCharacter = async(data, cancelToken)=>{
    const response = await apiClientNoAuth(cancelToken).post(endpoint,data);
    return response.ok
}
