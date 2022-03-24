import { useEffect, useContext } from 'react';
import { CancelToken } from 'apisauce';
import {putUser} from '../api/apiUser';
import {AppContext} from '../context/AppContext';

export default function useEditUser(theUser) {
    let response
    const {user} = useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const editUser=async()=>{
                response = await putUser(user.token, theUser, source.token);
                if (response){
                    console.log(response)
                }else if(response!==undefined && response === false){
                  console.log(response)
                    ///redirect to the login page
                }
            }
            if(theUser?.name){
                editUser();

            };
            return ()=>{source.cancel()}
        },[theUser]
    )

}