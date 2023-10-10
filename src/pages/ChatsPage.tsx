import { redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import {v4 as uuidv4} from "uuid"
import { isAuth } from "../Utils/config";
import ChatHistory from '../Utils/chatshistory.json'
import ImageLogo from '../assets/logo.png'
import ImageIdlMessages from '../assets/idl_messagesj.svg'

export async function loader(){
    if(!isAuth){
        return redirect('/')
    }

    return null

}

export default function ChatsPage(){

    const [chatsListEl, setChatsListEl] = useState([] as JSX.Element[])
    const [chatsFiltered, setChatsFiltered] = useState([{}])
    const [chatMessagesListEl, setChatMessagesListEl] = useState([] as JSX.Element[])

    const [chatMessagesCurrentTitle, setChatMessagesTitle] = useState("")
    const [chatMessagesCurrentNumber, setChatMessagesCurrentNumber] = useState("")
    const [chatMessagesCurrentId, setChatMessagesCurrentId] = useState(-1)

    const [inputControllerSearchBar, setInputControllerSearchBar] = useState("")


    async function handleInputSearchBar(event:any){
        setInputControllerSearchBar(event.target.value)
    }

    useEffect(()=>{
        if(inputControllerSearchBar.length > 0){
            let chatsFiltered = ChatHistory.filter(chat=>(chat.name.toLowerCase().includes(inputControllerSearchBar.toLowerCase()) || chat.lastmsg.toLowerCase().includes(inputControllerSearchBar.toLowerCase())))
            if(chatsFiltered.length == 0){
            }else{
            }
            setChatsFiltered(chatsFiltered)
        }else{
            setChatsFiltered([{}])
        }

    }, [inputControllerSearchBar])

    useEffect(()=>{
        loadChatList()
    }, [chatsFiltered])

    async function loadMessagesFromId(id: number){
        let loadedMessages = [] as JSX.Element[]
        ChatHistory.forEach((chat)=>{
            if(chat.id == id){
                setChatMessagesTitle(chat.name)
                setChatMessagesCurrentNumber(chat.number)
                setChatMessagesCurrentId(chat.id)
                chat.chats.forEach(msg=>{
                    if(msg.sender == "client"){
                        loadedMessages.push(
                            <li key={uuidv4()} className="flex flex-row flex-nowrap items-center gap-4 float-left mb-4 ">
                                <img src={`/profiles/${chat.picture}`} className="w-14" />
                                <div className="bg-gradient-to-r text-white p-2 rounded-md from-appsecondary to-appbase shadow-md shadow-black/20">
                                    <p>{msg.message}</p>
                                </div>
                                <span className="text-sm text-gray-400">{msg.time}</span>
                            </li>   
                        )
                    }else{
                        loadedMessages.push(
                            <li  key={uuidv4()} className="flex flex-row flex-nowrap items-center gap-4 float-right mb-10">
                                <span className="text-sm text-gray-400">{msg.time}</span>
                                <div className="bg-gradient-to-l text-white p-2 rounded-md from-[#0cc7bf] to-appsecondary shadow-md shadow-black/20">
                                    <p className="">{msg.message}</p>
                                </div>
                                <img src={ImageLogo} className="w-12" />
                            </li>
                        )
                    }
                })
            }
        })
        setChatMessagesListEl(loadedMessages)
        
    }

    async function loadChatList(){
        let loadedChatHistory = [] as JSX.Element[]
        
        if(chatsFiltered[0]!= null && Object.keys(chatsFiltered[0]).length == 0){
            ChatHistory.forEach((chat)=>{
                loadedChatHistory.push(
                    <li key={chat.id} onClick={()=> loadMessagesFromId(chat.id)} className={(chat.id == chatMessagesCurrentId?"border-l-appbase border-l-2 ": " ")+" cursor-pointer border-b-[1px] border-gray-300/40 pb-4 mb-5 hover:border-l-2 hover:border-l-appsecondary duration-100 ease-in-out"}>
                        <div className="flex flex-row mx-5 items-center">
                            <img src={`/profiles/${chat.picture}`} className="w-16 lg:w-20 mr-2" />
                            <div className="flex flex-col">
                                <div className="flex flex-row justify-between w-full">
                                    <h3 className="text-left">{chat.name}</h3>
                                    <span className="text-[11px] text-gray-400">{chat.lastmsgtime}</span>
                                </div>
                                <p className="text-appgraybase text-sm py-2">
                                {chat.lastmsg}
                                </p>
                            </div>
                        </div>
                    </li>
                )
            })
        }else{ 
            chatsFiltered.forEach((chat:any)=>{
                loadedChatHistory.push(
                    <li key={chat.id} onClick={()=> loadMessagesFromId(chat.id)} className={(chat.id == chatMessagesCurrentId?"border-l-appbase border-l-2 ": " ")+" cursor-pointer border-b-[1px] border-gray-300/40 pb-4 mb-5 hover:border-l-2 hover:border-l-appsecondary duration-100 ease-in-out"}>
                        <div className="flex flex-row mx-5 items-center">
                            <img src={`/profiles/${chat.picture}`} className="w-16 lg:w-20 mr-2" />
                            <div className="flex flex-col">
                                <div className="flex flex-row justify-between w-full">
                                    <h3 className="text-left">{chat.name}</h3>
                                    <span className="text-[11px] text-gray-400">{chat.lastmsgtime}</span>
                                </div>
                                <p className="text-appgraybase text-sm py-2">
                                {chat.lastmsg}
                                </p>
                            </div>
                        </div>
                    </li>
                )
            })
        }

        setChatsListEl(loadedChatHistory)
    }

    useEffect(()=>{
        loadChatList()
    },[])

    useEffect(()=>{
        loadChatList()
    }, [chatMessagesCurrentId])

    async function closeHistoryMessages(){
        setChatMessagesCurrentId(-1)
        setChatMessagesCurrentNumber("")
        setChatMessagesTitle("")
        setChatMessagesListEl([] as JSX.Element[])
    }

    return(
        <>
        <div className="w-1/4 min-w-[380px] h-full bg-gray-100 border-r-[1px] border-gray-200">
            <div className="w-full h-36 flex justify-center items-center">
                <div className="relative w-4/5">
                    <MagnifyingGlass className="absolute left-0 m-1 ml-3 text-appgraybase" size={20}></MagnifyingGlass>
                    <input onChange={(e)=>handleInputSearchBar(e)} value={inputControllerSearchBar} type="text" className="w-full border-2 rounded-2xl border-gray-300 text-appgraybase px-10 outline-none" name="chatsearch" placeholder="Procurar..."></input>
                </div>
            </div>
            <ul className="w-[85%] h-4/5 mx-auto overflow-y-scroll">
                {chatsListEl}
            </ul>
        </div>
        <div className="w-3/4 h-full flex flex-col">
            <div className="w-auto h-24 flex flex-row justify-between items-center border-b-2 border-gray-200">
                <h1 className="ml-16 font-bold text-2xl text-gray-600">{`${chatMessagesCurrentTitle} - ${chatMessagesCurrentNumber}`}</h1>
                <button onClick={closeHistoryMessages} className="text-appbase mr-6"><X size={32}></X></button>
            </div>
            <div className="w-full h-4/5 overflow-y-scroll p-5 ">
                <ul className="">
                    {chatMessagesListEl[0]==null?
                        <img className="w-7/12 m-20 mx-auto" src={ImageIdlMessages} />
                    :chatMessagesListEl}
                </ul>
            </div>
        </div>
        </>
    )
}