import {createContext, useState} from "react";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    //Saving the User to the Local Storage
    const getUserFromLS=()=>{
        let user = localStorage.getItem('user');
        if(user){
            return JSON.parse(user)
        }
    }

   //defining User
    const [user, _setUser]=useState(getUserFromLS());
    


  

    const values={
        user,
        setUser:(user)=>{
            localStorage.setItem('user',JSON.stringify(user))
            _setUser(user)
        },
       
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider