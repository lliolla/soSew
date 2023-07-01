// MUI theme
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: ' $purple',
      light:'purple-light' ,// Définissez la valeur de votre variable Sass ici
     
    },
    secondary: {
        main: '$blue', // Définissez la valeur de votre variable Sass ici
      },
    // Définissez d'autres palettes ou options de thème si nécessaire
  },
  jade :{
    main: '#64748B',
  },
  green :{
    main: '#64748B',
  },
});

export default theme;