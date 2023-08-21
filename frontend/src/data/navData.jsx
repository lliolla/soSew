import { TiImage } from 'react-icons/ti';
import { IoMdFolderOpen } from 'react-icons/io';
import { BsClipboard } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';




export const navItem = [
    {
        id: 6,
        title: 'Tableau de bord',
        icon: <MdOutlineSpaceDashboard />,
        link: 'dashboard',
        cat: false,
      },
  {
    id: 1,
    title: 'Patrons',
    icon: <TiImage />,
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
    id: 2,
    title: 'Projets',
    icon: <IoMdFolderOpen />,
    link: 'project',
    cat: false,
  },
  {
    id: 3,
    title: 'Capsules',
    icon: <BsClipboard />,
    link: 'capsule',
    cat: false,
  },
  {
    id: 4,
    title: 'Messages',
    icon: <FaRegEnvelope />,
    link: 'message',
    cat: false,
  },
  {
    id: 5,
    title: 'Setting',
    icon: <FiSettings />,
    link: 'settings',
    cat: false,
  },
 
];


