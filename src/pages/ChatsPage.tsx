import { redirect } from "react-router-dom";
import { MagnifyingGlass, Trash } from "@phosphor-icons/react";
import { isAuth } from "../Utils/config";
import ImageProfileTest from '../assets/profile_test1.png'
import ImageLogo from '../assets/logo.png'

export async function loader(){
    if(!isAuth){
        return redirect('/')
    }

    return null

}

export default function ChatsPage(){
    return(
        <>
        <div className="w-1/4 min-w-[380px] h-full bg-gray-100 border-r-[1px] border-gray-200">
            <div className="w-full h-36 flex justify-center items-center">
                    <div className="relative w-4/5">
                        <MagnifyingGlass className="absolute left-0 m-1 ml-3 text-appgraybase" size={20}></MagnifyingGlass>
                        <input type="text" className="w-full border-2 rounded-2xl border-gray-300 text-appgraybase px-10 outline-none" name="chatsearch" placeholder="Procurar..."></input>
                    </div>
            </div>
            <ul className="w-[85%] mx-auto">
                <li className="cursor-pointer border-b-[1px] border-gray-300/40 pb-4 mb-5 border-l-2 border-l-appbase hover:border-l-appsecondary duration-100 ease-in-out">
                    <div className="flex flex-row mx-5 items-center">
                        <img src={ImageProfileTest} className="w-16 lg:w-20 mr-2" />
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between w-full">
                                <h3 className="text-left">Madona Oster</h3>
                                <span className="text-[11px] text-gray-400">1:10 PM</span>
                            </div>
                            <p className="text-appgraybase text-sm py-2">
                            Analysis of for align nalysis of for align...
                            </p>
                        </div>
                    </div>
                </li>
                <li className="cursor-pointer border-b-[1px] border-gray-300/40 pb-4 mb-5 hover:border-l-2 hover:border-l-appsecondary duration-100 ease-in-out">
                    <div className="flex flex-row mx-5 items-center">
                        <img src={ImageProfileTest} className="w-16 lg:w-20 mr-2" />
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between w-full">
                                <h3 className="text-left">Madona Oster</h3>
                                <span className="text-[11px] text-gray-400">1:10 PM</span>
                            </div>
                            <p className="text-appgraybase text-sm py-2">
                            Analysis of for align nalysis of for align...
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="w-3/4 h-full flex flex-col">
            <div className="w-auto h-24 flex flex-row justify-between items-center border-b-2 border-gray-200">
                <h1 className="ml-16 font-bold text-2xl text-gray-600">Madona Oster</h1>
                <button className="text-appbase mr-6"><Trash size={32}></Trash></button>
            </div>
            <div className="w-full h-max p-5 ">
                <ul>
                    <li className="flex flex-row flex-nowrap items-center gap-4 float-left mb-4">
                        <img src={ImageProfileTest} className="w-14" />
                        <div className="bg-gradient-to-r text-white p-2 rounded-md from-appsecondary to-appbase">
                            <p>ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <span className="text-sm text-gray-400">1:10 PM</span>
                    </li>
                    <li className="flex flex-row flex-nowrap items-center gap-4 float-right">
                        <span className="text-sm text-gray-400">1:10 PM</span>
                        <div className="bg-gradient-to-l text-white p-2 rounded-md from-appbase to-appsecondary shadow-md shadow-black/50">
                            <p className="">Integer aliquet interdum interdum. Etiam sapien dui, blandit vel congue nec, condimentum eu erat.</p>
                        </div>
                        <img src={ImageLogo} className="w-12" />
                    </li>
                </ul>
            </div>
        </div>


        </>
    )
}