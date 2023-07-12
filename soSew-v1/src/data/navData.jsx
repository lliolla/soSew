import {TbWallpaper} from 'react-icons/tb'
import {PiFolderStarLight, PiChalkboardTeacherLight} from 'react-icons/pi'
import {LuMessagesSquare , LuSettings} from 'react-icons/lu'
import { BusinessCenter, ChildCareOutlined } from '@mui/icons-material'

export const navItem = [
{
    id:1,
    item:'Patrons',
    icon:<TbWallpaper/>,
    link:'pattern',
    cat:true,
    
},
{
    id:2,
    item:'Projets',
    icon: <PiFolderStarLight/>,
    link:'project',
    cat:false,
},
{
    id:3, 
    item:'Capsules',
    icon:<PiChalkboardTeacherLight/>,
    link:'capsule',
    cat:false,
},
{
    id:4,
    item:'Messages',
    icon:<LuMessagesSquare  />,
    link:'message',
    cat:false,
},
{
    id:5,
    item:'Setting',
    icon:<LuSettings/>,
    link:'settings',
    cat:false,
}
]

export const catPatern =[
    {
        id:1,
        text:'Adulte',
        icon:"/public/couple.png"

        
    }, 
    {
        id:2,
        text:'Enfants',
        icon:<ChildCareOutlined/>
        
    },
    {
        id:3,
        text:'Accessoires',
        icon:<BusinessCenter/>
        
    },
    ''
]
