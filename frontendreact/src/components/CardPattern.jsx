
import {
  Card,
  IconButton,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

import { IoMdMore } from "react-icons/io";

import {cardStyles,imgCardStyles} from '../style'
// verification type props : les props sont definie et ne pauvent etre null ou undifined
import PropTypes from "prop-types";

CardPattern.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
  };
  

function CardPattern({name, type, img, des}) {
  return (
    <Card sx={cardStyles}>
      <CardHeader
      title={name}
        action={
          <IconButton aria-label="settings">
            <IoMdMore />
          </IconButton>
        }>
        

      </CardHeader>

      <CardMedia
       component="img"
      
       src={img}
       alt={name} 
       sx={imgCardStyles}
        >
   
      </CardMedia>
      <CardContent>
        <Typography>{des}</Typography>
      </CardContent>
      {type}
      <CardActions></CardActions>
    </Card>
  );
}

export default CardPattern;
