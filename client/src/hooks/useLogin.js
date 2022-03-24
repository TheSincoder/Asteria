import {useEffect} from 'react';
import {getUser} from  "../api/apiBasicAuth";
import { CancelToken } from 'apisauce';
import { useNavigate } from 'react-router-dom';


export default function useLogin(loginCreds, setError, setUser, setLoginCreds) {
    const navigate = useNavigate()
    useEffect(
        ()=>{
            const source = CancelToken.source()
            const login=async()=>{
                const response_object = await getUser(loginCreds.username, loginCreds.password, source.token)
                if (response_object.user?.token){
                    console.log('logged in, more letters');
                    setUser(response_object.user);
                    setError(response_object.error);
                    setLoginCreds({});
                    navigate('/');
                }
            };
            console.log('Whacky Dacky', loginCreds)
            if (loginCreds.username && loginCreds.password){
                login();
            };
            return ()=>{
                source.cancel()
            }
        },
        [loginCreds, setLoginCreds, setUser, setError]
    )
}