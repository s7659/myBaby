import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
const preventDefault = (event) => event.preventDefault();

 const ButtonAppBar=()=> {
 
  return (
    <Box sx={{ flexGrow: 5 }}>
      <AppBar position="static" sx={{ backgroundColor:"#E53945" ,textAlign:'center',height:"100px"}}>

        <Toolbar>
        <p style={{marginRight:'110px',marginLeft:'200px',margin:'100'}}></p>
        <nav  alignItems={{ md: "flex-start", xs: "center" }}>
        <Link to={'/HomePage'} style={{textDecoration:'none', margin:'50px'}}>our family!</Link>
        <Link to={'/User '} style={{textDecoration:'none', margin:'50px'}}>who?</Link>
        <Link to={'/Photo'} style={{textDecoration:'none', margin:'50px'}}>pictures</Link>
        <Link to={'/Post'} style={{textDecoration:'none', margin:'50px'}}>Mommy say...</Link>
        <Link to={'/Todo'}style={{textDecoration:'none', margin:'50px'}}>what do?</Link>
     </nav>
      
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar
