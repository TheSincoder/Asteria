import apiClient from './clientBasicAuth';

const endpoint = "/api/character";

export const getCharacter = async (data, cancelToken)=>{
    let error;
    let character;
    

    const response = await apiClient(data, cancelToken).get(endpoint);
    
    if (response.ok){
        character=response.data
    }else if (response.status ===401){
        error="No Character by that name exists"
    }else{
        error='An Unexpected Error has Occured. Please Try Again'
    }
    
    
    return{
        error,
        character
        
    };
}