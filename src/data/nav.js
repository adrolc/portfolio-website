import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineComputer} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'

const nav = [
    {
        id: 1,
        name: 'Home',
        icon: <AiOutlineHome />,
        link: "#"
    },
    {
        id: 2,
        name: 'Experience',
        icon: <MdOutlineComputer />,
        link: "#experience"
    },
      {
        id: 3,
        name: 'Portfolio',
        icon: <AiOutlineFundProjectionScreen />,
        link: "#portfolio"
      },
      {
        id: 4,
        name: 'Contact',
        icon: <AiOutlineMessage />,
        link: "#contact"
      },
  ]

export {nav}