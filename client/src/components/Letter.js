import React from 'react'
import Box from '@mui/material/Box';
import {Paper} from '@mui/material';
import background from "../static/images/parchment.jpg";




import "@fontsource/shadows-into-light"

export default function Letter(){

    
    const wax = <img src={require("../static/images/Wax_Stamp-removebg.png")} width={200} alt="Human Male"/>

    
    //Recruited by the Captain or local Lord
    //task is to go on a mission because he can't spare resources
    //war is on the edge of city 'Riftbourg'
    //a spy communicated the last known whereabouts of a shadow priest 
    //the quest is to find the purpose behind the Templars of the Valkyrie and to stop it.



    return(


        <>
        
            <Paper  sx={{m:5, p:5, justifyContent:"center", backgroundImage:`url(${background})`}} style={{backgroundSize:'cover'}}>
                <div className="font-face-gm">                
                    <h1>Adventurer,      </h1>              
                    <br/>
                    <h2>
                    Since the arrival of the Priests in Riftbourg, our city streets have filled with haunting echoes from our once
                    free thinking citizens turned religious zealots. Hooded Priests perform hypnotic rituals and pass them off as miracles.
                    Weekend worship has evolved into marches in the city square chanting the prophesied return of the Angelic army of the 
                    Valkyrie. With each week our Mages connection to the Arcane becomes more distant and people have started disappearing.
                    </h2>
                    <h2>
                    I fear the Templars of the Valkyrie have sinister ambitions, for behind the spectacle of Holy Light a dark shadow has been cast.
                    The Archbishop seemingly operates in this shadow and my spies have tracked him to the Sharakh Forest, well known 
                    for the creatures that haunt it. I hoped to learn how these events are connected but sadly, none of my spies have 
                    checked in nor returned and I fear the worst. 
                    </h2>
                    <h2>
                    I need your skills to track down the Archbishop, find out why he went to the Sharakh Forest, how these so called 'miracles' disrupt the Arcane,
                    who the Valkyrie are, and learn the fate of my spies. This is not a task that can be completed by foot-soldiers, and only one of your skills 
                    would dare be victorious. I do not hide the danger in this quest Adventurer, but I can promise the reward will be worth it if you are successful.
                    </h2>
                    <br/>
                    <h1>
                    Signed,
                    </h1><h1>
                    Lord Crowvus
                    </h1>
                </div>
                <Box  sx={{ position: 'absolute', bottom: -80, right: 80 }}>{wax}</Box>
            </Paper>
            
            
        
        </>
        // <div style={{ backgroundImage:` url(${background}`}}> 
        // Hello World
            
        // </div>
    )
}

