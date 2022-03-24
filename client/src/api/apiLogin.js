import apiClient from './clientBasicAuth';

const endpoint = "/api/login";

export const getLogin = async (username, password, cancelToken)=>{
    let error;
    let user;
    

    const response = await apiClient(username, password, cancelToken).get(endpoint);
    
    if (response.ok){
        user=response.data
    }else if (response.status ===401){
        error="Invalid Email/Password"
    }else{
        error='An Unexpected Error has Occured. Please Try Again'
    }
    
    
    return{
        error,
        user
        
    };
}