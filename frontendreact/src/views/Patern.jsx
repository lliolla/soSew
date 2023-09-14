
import dataPattern from "../data/patternData";
import CardPattern from "../components/CardPattern";
import { Container } from "@mui/material";
import {patternContainerStyles} from '../style'


function Pattern() {
  return (

    <Container sx={patternContainerStyles}>
    <div> Patern</div>
      {dataPattern.map((item) => (
        <CardPattern
          key={item.id}
          name={item.name}
          type={item.type}
          img={item.img}
          des={item.des}
        />
      ))}
        </Container>       
      


  );
}

export default Pattern;
