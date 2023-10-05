import { Link } from 'react-router-dom'
import ImageLogo from '../assets/logo.svg'
import IconChats from '../assets/icons/gridicons_chat.svg'
import IconIA from '../assets/icons/mdi_robot-happy-outline.svg'
import { GithubLogo } from '@phosphor-icons/react'
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr/LinkedinLogo'
import { useLocation } from 'react-router-dom'

export default function Sidebar(){
    const location = useLocation()

    return(
        <>
        <aside className="absolute w-20 h-full bg-gradient-to-b from-appbase to-appsecondary text-white font-medium">
            <img className="w-14 mx-auto py-6" src={ImageLogo} />
            <nav className='text-center'>
                <ul className='gap-5 text-sm'>
                    <Link to={'chats'} >
                        <li className={'mb-6 hover:border-l-2 hover:border-l-appsecondary '+(location.pathname == '/chats'?'border-l-2 border-white':'')}>
                            <img className='w-12 mx-auto' src={IconChats}></img>
                            <span className='uppercase '>Chats</span>
                        </li>
                    </Link>
                    <Link to={'ia'} >
                        <li className={'mb-6 hover:border-l-2 hover:border-l-appsecondary '+(location.pathname == '/ia'?'border-l-2 border-white':'')}>
                            <img className='w-12 mx-auto' src={IconIA}></img>
                            <span className='uppercase'>IA</span>
                        </li>
                    </Link>

                </ul>
            </nav>
            <div className='absolute bottom-0 flex flex-col w-full'>
                <div className='flex flex-row justify-center'>
                    <Link to={''} className='hover:text-appbase duration-200 ease-out' ><GithubLogo size={25} /></Link>
                    <Link to={''} className='hover:text-appbase duration-200 ease-out'><LinkedinLogo size={25}/></Link>
                </div>
                <span className='text-center text-sm font-medium'>iFuzzing</span>
            </div>
        </aside>
        <div className='w-20 block h-full'></div>
        </>
    )
}