import Navbar from "../components/Navbar";
import Link from "next/link";
import ArrowDown from "../components/icons/ArrowDown";
export default function Contato(){

    const textContact = ['','','','marinhoalexsander9@gmail.com']

    return(
        <div className="relative bg-[#171717]">
            <Navbar showContact={false} color={'#fff'}/>
            <div className="w-[100vw] h-[100vh] px-4 flex items-center lg:px-56">
                <div className="font-[canoppe] md:w-5xl">
                    <h1 className="text-white text-6xl md:text-7xl lg:text-8xl">vamos criar algo incrivel juntos?</h1>
                    <div className="flex justify-center items-center gap-5 text-white">
                        <div className="w-full h-0.5 rounded-full bg-[#585858]"></div>
                        <ArrowDown />
                    </div>
                    <h2 className=" text-[#DBDBDB] text-4xl mt-10">redes de contato</h2>
                    <div className="text-[#DBDBDB] flex gap-3 text-2xl tracking-wider mt-2 md:gap-6">
                        <a href='https://github.com/Alexsander-Marinhoo' target="_blank" className="transition-all hover:tracking-[4]">Git Hub</a>
                        <a href='https://www.instagram.com/tutuzhs/?__pwa=1' target="_blank" className="transition-all hover:tracking-[4]">Instagram</a>
                        <a href='https://www.behance.net/alexsandermarinho' target="_blank" className="transition-all hover:tracking-[4]">Behance</a>
                    </div>
                </div>
            </div>
        </div>
    )
}