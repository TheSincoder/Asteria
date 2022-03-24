import {useEffect} from 'react';
import {postUser} from  "../api/apiUser";
import { CancelToken } from 'apisauce';
// import { AppContext } from '../context/AppContext'

export default function useRegister(newUser, setNewUser) {
    // const {setAlert} =useContext(AppContext)

    useEffect(()=>{
            let response
            const source = CancelToken.source()
            const register=async()=>{
                response = await postUser(newUser, source.token);                
                if (response){
                    console.log('Registered');
                    // setAlert({msg:`User ${newUser.username} Created`, cat:'success'})
                    // setUser(response_object.user);
                    setNewUser({});
                }
            };

            if (newUser?.username){
                register();
            };
            return ()=>{
                source.cancel()
            };
        },
        [newUser, setNewUser]
    )
}