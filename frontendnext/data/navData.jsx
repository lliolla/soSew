import { FaRegEnvelope } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import {  AiOutlineHome,AiOutlineShop,AiOutlineFolderOpen,AiOutlineFileText,AiFillTool,AiOutlineRead} from "react-icons/ai";


export const listItem = [
    {
        id: 1,
        title: 'Tableau de bord',
        icon: <AiOutlineHome />,
        link: 'dashboard',
        cat: false,
      },
    {
        id: 2,
        title: 'Patrons',
        icon: <AiOutlineFolderOpen />,
        link: 'pattern',
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
        icon: <AiOutlineFileText />,
        link: 'project',
        cat: false,
      },
     
    {
        id: 4,
        title: 'Capsule',
        icon: <AiOutlineShop/>,
        link: 'dashboard/capsule',
        cat: false,
      },
    {
        id: 5,
        title: 'Techniques',
        icon: <AiFillTool/>,
        link: 'dashboard/techniques',
        cat: false,
      },
    {
        id: 6,
        title: 'Ressources',
        icon: < AiOutlineRead/>,
        link: 'dashboard/ressources',
        cat: false,
      },
   
  
      {
        id: 7,
        title: 'Messages',
        icon: <FaRegEnvelope />,
        link: 'message',
        cat: false,
      },
      {
        id: 8,
        title: 'Setting',
        icon: <FiSettings />,
        link: 'settings',
        cat: false,
      },
 
];


