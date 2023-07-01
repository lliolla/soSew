import { Box } from "@mui/material"
import dataPattern from '../data/patternData';

function Pattern() {
  return (
    <> <Box height={100}/>
    <div> Patern</div> 
   { dataPattern.map(item=>(
    <div className="card" key={item.id}>
        <div className="card-title">{item.name}</div>
        <div className="card-content">{item.type}</div>
        <div className="card-img">{item.img}</div>
        <button></button>
    </div>
   ))
   }
    </>
  )
}

export default Pattern