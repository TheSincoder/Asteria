import {createContext, useState} from "react";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    //Saving the Character to the Local Storage
    const getCharacterFromLS=()=>{
        let character = localStorage.getItem('character');
        if(character){
            return JSON.parse(character)
        }
    }

   //defining Character
    const [character, _setCharacter]=useState(getCharacterFromLS());
    


  

    const values={
        character,
        setCharacter:(character)=>{
            localStorage.setItem('character',JSON.stringify(character))
            _setCharacter(character)
        },
       
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider