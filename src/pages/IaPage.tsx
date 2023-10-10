import { useState } from "react"
import { redirect } from "react-router-dom"
import { isAuth } from "../Utils/config"
import IconBox from '../assets/icons/teenyicons_box-outline.svg'
import IconPath from '../assets/icons/material-symbols_conversion-path.svg'
import IconFeedback from '../assets/icons/fluent-mdl2_feedback-response-solid.svg'
import IconIdea from '../assets/icons/carbon_idea.svg'
import { PencilSimple, Plus, Trash, Warning } from "@phosphor-icons/react"

export async function loader(){

    if(!isAuth){
        return redirect('/')
    }

    return null
}

export default function IaPage(){

    const [showNotification, setShowNotification] = useState(false)

    const notification = (
        <div className="animate-fadeout-animation fixed z-50 p-4 right-3 bottom-5 w-1/4 h-16 bg-appbase shadow-md shadow-black/40 rounded-md flex items-center justify-between">
            <Warning className="mx-2 text-white" size={40}></Warning>
            <span className="text-sm text-white">
                Essa é apenas uma versão de demonstração do frontend. Backend ainda em desenvolvimento.
            </span>
        </div>
    )
    
    async function handleNotification(){
        if(showNotification)
            return null

        setShowNotification(true)
        setTimeout(()=>[
            setShowNotification(false)
        ],7000)
    }

    return(
        <>
                {showNotification?notification:null}
                <div className="w-full grid grid-cols-2 gap-5 p-8 bg-slate-100 overflow-y-scroll">
                    <div className="relative min-h-[250px] shadow-sm shadow-black/40 border-b-2 border-b-purple-600 rounded-md bg-white">
                        <div className="relative w-full text-center uppercase p-2 bg-purple-600 text-white font-bold">
                            <img src={IconBox} className="absolute left-4 w-6" />
                            Contextos
                        </div>
                        <ul className="p-5 h-28 overflow-y-auto border-b-[1px] border-b-appgraybase/20">
                            <li className="flex flex-row justify-between cursor-pointer ">
                            <input className="text-appgraybase outline-none cursor-pointer text-lg w-full hover:text-appsecondary" readOnly type="text" value={'Pagamento'} />
                            <div className="flex flex-row gap-3">
                                <PencilSimple className="cursor-pointer" size={22}></PencilSimple>
                                <Trash className="cursor-pointer text-appbase" size={22} ></Trash>
                            </div>
                            </li> 
                        </ul>
                        <input type="text" className="absolute bottom-14 mx-auto left-0 right-0 w-1/2 border-[1px] border-gray-400 outline-appsecondary px-2 rounded-sm" />
                        <button onClick={handleNotification} className="absolute left-0 right-0 max-w-fit bottom-2 flex flex-row mx-auto p-2 bg-purple-600 hover:bg-purple-700 duration-200 ease-in text-white font-medium text-sm rounded-sm"><Plus size={16}></Plus> Adicionar</button>
                    </div>
                    <div className="row-span-2 shadow-sm shadow-black/40 border-b-2 border-b-appbase rounded-md bg-white">
                        <div className="relative w-full text-center p-2 bg-appbase text-white text-sm">
                            <img src={IconIdea} className="absolute left-4 w-6" />
                            Como ensinar a Lila sobre o seu negocio:
                        </div>
                        <ol className="p-5">
                            <li className="mb-5">
                                <h4 className="text-appbase font-medium">1. Tudo começa por um <span className="uppercase font-bold">Contexto</span>:</h4>
                                <p className="ml-5 text-appgraybase text-sm">• Um contexto é um tema geral (amplo), por exemplo, o contexto: <span className="text-purple-600">pagamento</span></p>
                            </li>
                            <li className="mb-5">
                                <h4 className="text-appbase font-medium">2. Em seguida você tem <span className="uppercase font-bold">assuntos</span> para um contexto:</h4>
                                <p className="ml-5 text-appgraybase text-sm">• No contexto <span className="text-purple-600">pagamento</span>, você teria então como 
    um assunto possível: <span className="text-sky-500">formas de pagamento aceitáveis</span></p>
                            </li>
                            <li className="mb-5">
                                <h4 className="text-appbase font-medium">3. Por fim, você teria possíveis <span className="uppercase font-bold">respostas</span>:</h4>
                                <p className="ml-5 text-appgraybase text-sm">• Quando o cliente mandar uma mensagem, a inteligência artificial irá identificar o contexto e assunto, o usuário então receberá uma resposta.</p>
                                <p className="ml-5 mt-2 text-appgraybase text-sm">
                                    • No nosso exemplo:
                                    <ul className="ml-4">
                                        <li>• <span className="text-purple-600 font-bold">Contexto</span>: pagamento.</li>
                                        <li>• <span className="text-sky-500 font-bold">Assunto</span>: formas de pagamento.</li>
                                        <li>• <span className="text-green-600 font-bold">Possível resposta</span>: Cartões de crédito e débito, pix e dinheiro.</li>
                                    </ul>
                                </p>

                                <p className="text-appgraybase/90 text-sm mt-10">A grande vantagem é que essa intelgiência artificial faz uso de Processamento de Linguagem Natural (PLN), juntamente com o modelo GPT, isso torna possível ser capaz de enteder o usuário de forma eficiênte.</p>
                                <p className="text-appgraybase/90 text-sm mt-2">Se o cliente digitar utilizando abreviações, como por exemplo: “Vcs estão funcionando hj?”, ou se houver erros ortograficos simples, a IA será capaz de enteder sem grandes dificuldades!</p>
                                <p className="text-appgraybase/90 text-sm mt-2">Dessa você terá todo o poder de uma assistente que se utiliza do modelo GPT, mas que vai se limitar a falar somente sobre o que é importante sobre o seu negócio e não sobre assuntos fora de contexto.</p>
                            </li>
                        </ol>
                    </div>
                    <div className="relative min-h-[250px] shadow-sm shadow-black/40 border-b-2 border-b-sky-500 rounded-md bg-white">
                        <div className="relative w-full text-center uppercase p-2 bg-sky-500 text-white font-bold">
                            <img src={IconPath} className="absolute left-4 w-6" />
                            Assuntos
                        </div>
                        <ul className="p-5 h-28 overflow-y-auto border-b-[1px] border-b-appgraybase/20">
                            <li className="flex flex-row justify-between cursor-pointer ">
                            <input className="text-appgraybase outline-none cursor-pointer text-lg w-full hover:text-sky-500" readOnly type="text" value={'Formas de pagamento'} />
                            <div className="flex flex-row gap-3">
                                <PencilSimple className="cursor-pointer" size={22}></PencilSimple>
                                <Trash className="cursor-pointer text-appbase" size={22} ></Trash>
                            </div>
                            </li>
                        </ul>
                        <input type="text" className="absolute bottom-14 mx-auto left-0 right-0 w-1/2 border-[1px] border-gray-400 outline-sky-500 px-2 rounded-sm" />
                        <button onClick={handleNotification} className="absolute left-0 right-0 max-w-fit bottom-2 flex flex-row mx-auto p-2 bg-sky-500 hover:bg-sky-600 duration-200 ease-in text-white font-medium text-sm rounded-sm"><Plus size={16}></Plus> Adicionar</button>
                    </div>
                    <div className="relative min-h-[400px] col-span-2 shadow-sm shadow-black/40 border-b-2 border-b-green-600 rounded-md bg-white">
                        <div className="relative w-full text-center uppercase p-2 bg-green-600 text-white font-bold">
                            <img src={IconFeedback} className="absolute left-4 w-6" />
                            Respostas
                        </div>
                        <ul className="p-5 max-h-40 overflow-y-auto border-b-[1px] border-b-appgraybase/20">
                            <li className="flex flex-row justify-between cursor-pointer ">
                                <input className="text-appgraybase outline-none cursor-pointer text-lg w-full hover:text-green-600" readOnly type="text" value={'Cartões de crédito e débito, pix e dinheiro'} />
                                <div className="flex flex-row gap-3">
                                    <PencilSimple className="cursor-pointer" size={22}></PencilSimple>
                                    <Trash className="cursor-pointer text-appbase" size={22} ></Trash>
                                </div>
                            </li>
                            
                        </ul>
                        <textarea  className="absolute resize-none bottom-14 mx-auto left-0 right-0 w-3/4 border-[1px] min-h-[100px] border-gray-400 outline-green-600 px-2 rounded-sm" />
                        <button onClick={handleNotification} className="absolute left-0 right-0 max-w-fit bottom-2 flex flex-row mx-auto p-2 bg-green-600 hover:bg-green-700 duration-200 ease-in text-white font-medium text-sm rounded-sm"><Plus size={16}></Plus> Adicionar</button>
                    </div>
                </div>
        </>
    )
}