// MUI theme

import { createTheme } from '@mui/material/styles';
//import QuestrialRegular from'../src/assets/fonts/Questrial-Regular.woff2'
// police


const theme = createTheme({
    palette: {
      //  mode: 'light',
        primary: {
          main: '#3ea38b',
          light:'#b5ded4',
          dark :'#1f6651'
        },
        secondary: {
          main: '#c7695d',
          dark:'#911b00'
        },
        background: {
          default: '#e1f2ee',
          paper: '#fff',
        },
        error: {
          main: '#f44336',
        },
        success: {
          main: '#24da83',
          dark:'#009029'
        },
        info: {
          main: '#00ACC1',
          light:'#b2eaf2',
          dark:'#005f64'
        },

  },
  typography :{
    fontFamily: 'Quicksand', 
    fontWeightLight: '400',
    fontWeightMedium:'600',
    fontWeightRegular:'500',
    fontWeightBold:'700'
  },  
  
});

export default theme;
