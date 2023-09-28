import { FaRegEnvelope } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import {  AiOutlineHome,AiOutlineShop,AiOutlineFolderOpen,AiOutlineFileText,AiFillTool,AiOutlineRead} from "react-icons/ai";


export const listItem = [
    {
        id: 1,
        title: 'Tableau de bord',
        icon: <AiOutlineHome size={21} className='mr-2' />,
        link: '/dashboard',
        cat: false,
      },
    {
        id: 2,
        title: 'Patrons',
        icon: <AiOutlineFolderOpen size={21} className='mr-2' />,
        link: '/dashboard/patrons',
        cat: true,
        catPatern:[
            {
                id: 1,
                text: 'Adulte',
                icon: null
              },
              {
                id: 2,
                text: 'Enfants',
                icon: null,
              },
              {
                id: 3,
                text: 'Accessoires',
                icon:null,
              },
        ]
      },
      {
        id: 3,
        title: 'Projets',
        icon: <AiOutlineFileText size={22} className='mr-2' />,
        link: '/dashboard/projets',
        cat: false,
      },
     
    {
        id: 4,
        title: 'Capsule',
        icon: <AiOutlineShop size={22} className='mr-2'/>,
        link: '/dashboard/capsule',
        cat: false,
      },
    {
        id: 5,
        title: 'Techniques',
        icon: <AiFillTool size={22} className='mr-2'/>,
        link: '/dashboard/techniques',
        cat: false,
      },
    {
        id: 6,
        title: 'Ressources',
        icon: < AiOutlineRead size={22} className='mr-2'/>,
        link: '/dashboard/ressources',
        cat: false,
      },
   
  
      {
        id: 7,
        title: 'Messages',
        icon: <FaRegEnvelope size={21} className='mr-2' />,
        link: '/dashboard/message',
        cat: false,
      },
      {
        id: 8,
        title: 'Setting',
        icon: <FiSettings size={21} className='mr-2'/>,
        link: '/dashboard/settings',
        cat: false,
      },
 
];


