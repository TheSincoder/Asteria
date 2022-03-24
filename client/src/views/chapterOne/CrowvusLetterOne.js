import React from 'react';

import Letter from '../../components/Letter';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';

export default function HomePage() {
    

    return(
        <>       
            <Letter/>
            <Link to='/c1a' style={{color: 'inherit', textDecoration:"none"}}>
                <Box textAlign='center'>
            <Button sx={{width: '96%', justifyContent: 'center', alignItems: 'center', }}>Continue</Button>
            </Box>
            </Link>
        </>
    );
};