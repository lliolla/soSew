// MUI theme

import { createTheme } from '@mui/material/styles';
//import QuestrialRegular from'../src/assets/fonts/Questrial-Regular.woff2'


const theme = createTheme({
  palette: {
    primary: {//violet
      main: '##4a2136',
      light200:'#cca596' ,
      light100:'#e8c7b9' ,
      dark:'#2a0c20'
    },
    info: {//bleu
        main: '#177e89', 
        light500:'#1fb6cd',
        light100:'#b2e9f0',
        dark:'#125b5f'
      },
      success  :{//green
        main: '#7fc29b',
        light200:'##92d8ad',
      },
      warning  :{//red
        main: '#ca3c25',
        dark:'#ae2c12'
      },
      background  :{//red
        main: '#ca3c25',
        dark:'#b5b8b3',
        light:'#f1f4ee',
    
      },
  },
  typography :{
    fontFamily: 'Roboto, Arial',
 color :'#313638'
  }
  
});

export default theme;