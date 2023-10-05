import {Outlet} from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function MainLayout(){
    return (
    <>
        <div className='w-full h-screen flex items-center justify-center bg-slate-100'>
            <div className='absolute top-0 w-full h-1/4 bg-appbase'>

            </div>
            <div className='relative w-3/4 h-4/5 rounded-lg bg-white shadow-lg shadow-black/50 flex flex-row'>
                <Sidebar></Sidebar>
                <Outlet />
            </div>
        </div>


    </>
    )
}