import { Link, redirect } from 'react-router-dom'
import {isAuth} from './../Utils/config'

import ImageLine1 from '../assets/line1_unlock.png'
import ImageLine2 from '../assets/line2_unlock.png'
import ImageLogoS from '../assets/logo_s.png'
import { Key } from '@phosphor-icons/react'


export async function loader(){
    if(isAuth){
        return redirect('/chats')
    }

    return null

}

export default function UnlockPage(){
    return(
        <>
        <div className="absolute w-full h-full bg-black/60 z-40 flex justify-center rounded-lg">
            <div className="relative w-4/6 max-w-[750px] h-3/4 max-h-[490px] bg-slate-50 self-center rounded-lg overflow-hidden text-center shadow-black/30 shadow-lg">
                <img className='absolute top-6 -right-1 w-44' src={ImageLine1} />
                <img className='absolute bottom-10 -left-1 w-40' src={ImageLine2} />
                <img className='w-16 mx-auto mt-10' src={ImageLogoS} />
                
                <p className='text-appgraybase w-3/4 mx-auto font-normal mt-5'><span className='text-appbase'>Lila IA</span> é um chatbot que se utiliza de Inteligiência Artificial para 
prestar assistência no WhatsApp. Suporta fácil adaptação para diferentes tipos de negócios.</p>
                <p className='text-appgraybase w-3/4 mx-auto font-normal mt-5'>Para ter acesso a esse projeto, entre com uma chave de acesso. Caso não tenha, solicite uma com <Link className='text-appbase underline' to={''}>Josivan Sousa</Link></p>

                <div className="relative w-3/4 mx-auto my-10">
                    <Key className='absolute left-0 p-1 bg-appbase text-white' width={40} size={25}></Key>
                    <input className='px-[20%]  w-full border border-appbase rounded-sm outline-none text-center font-medium text-appgraybase' type='text' name='key'></input>
                </div>

                <button className='bg-appbase text-sm shadow-black/50 shadow-sm rounded-sm px-2 py-1 text-white hover:bg-appbasehover duration-200 ease-out' name='unlock'>Desbloquear</button>
                <span className='absolute left-0 right-0 bottom-0 text-[11px] text-gray-400'>Esse projeto não representa sua versão final em todo o seu potencial</span>
            </div>
        </div>
        </>
    )
}