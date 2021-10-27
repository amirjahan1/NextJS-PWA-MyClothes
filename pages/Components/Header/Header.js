import React from 'react'
import { blueGrey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import HeaderText from "./HeaderText/HeaderText";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const Header = (props) => {
    const { sx, ...other } = props;
    const textColor = blueGrey[50];
  return(

      <header className="headerbg" >
            <Box className="header"
                 sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     alignContent: 'center',
                     flexDirection: 'column'
                 }}>

                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    color:textColor,

                }}
                >
                <h2 className="headerTitr" >به مای کلودز خوش امدید</h2 >
                    <HeaderText/>
                    <div className="arrow bounce">

                    </div>
                </Box>
                <ArrowDownwardIcon  className="headerIcon"/>
            </Box>

       </header>


  )
}
export default Header