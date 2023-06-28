import {TbWallpaper} from 'react-icons/tb'
import {PiFolderStarLight, PiChalkboardTeacherLight} from 'react-icons/pi'
import {LuMessagesSquare , LuSettings} from 'react-icons/lu'

export const navItem = [
{
    id:1,
    item:'Patrons',
    icon:<TbWallpaper/>,
    page:'Pattern',
},
{
    id:2,
    item:'Projets',
    icon: <PiFolderStarLight/>,
    page:'Project',
},
{
    id:3, 
    item:'Capsules',
    icon:<PiChalkboardTeacherLight/>,
    page:'Capsule',
},
{
    id:4,
    item:'Messages',
    icon:<LuMessagesSquare  />,
    page:'Message',
},
{
    id:5,
    item:'Setting',
    icon:<LuSettings/>,
    page:'Settings',
}
]