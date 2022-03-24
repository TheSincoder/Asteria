import React from 'react'
import {Paper} from '@mui/material';
import background from "../static/images/parchment.jpg";




import "@fontsource/shadows-into-light"

export default function Letter(){

        
   



    return(


        <>
        
            <Paper  sx={{m:5, p:5, justifyContent:"center", backgroundImage:`url(${background})`}} style={{backgroundSize:'cover'}}>
                <div className="font-face-gm">                
                    <h1>Day 5  </h1>              
                    
                    <h2>
                    I followed the Archbishop into the forest, expecting to get to the Sepulcher by now. I've been lost 
                    in the fog for five days and lost the Archbishop on the 2nd day. Food is running low and I fear I am
                    being tracked by one of the Sharakh monsters. Some days I swear I can hear it breathing on my neck. 
                    </h2>
                    <h2>
                    Last I saw the Archbishop, he was headed towards the base of one of the larger trees. I attempted to 
                    follow but there was a large flash of blinding light and by the time my eyes adjusted he was gone. I 
                    went to the same tree and found nothing, he was gone. The forest ground cover leaves little to form
                    footprints and I couldn't track him that way either.
                    </h2>
                    <h2>
                    If I don't make it back I hope someone finds this journal. The only useful information I've been able
                    to acquire is the position of the tree where I lost him. Use the crystal pendent on my necklace and by
                    it's arcane power it should lead you directly to the tree, even in the fog. 
                    </h2>
                    <br/>
                    <h1>
                    Signed,
                    </h1><h1>
                    Koreal
                    </h1>
                </div>
                
            </Paper>
            
            
        
        </>
      
    )
}