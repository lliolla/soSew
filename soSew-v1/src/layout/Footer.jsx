import { Typography,Link } from "@mui/material";



function Footer(props) {
    
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Fait avec amour par Code&Moi
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }


export default Footer