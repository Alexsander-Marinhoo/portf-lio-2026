import ButtonContactMagnetic from "./ButtonContact";
import Link from "next/link";
export default function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer className="bg-neutral-900 text-white font-[canoppe] pt-20 lg:pt-50">
            <div className="px-5 lg:flex justify-center items-center gap-5">
                <div className="">
                    <h1 className="text-7xl text-center lg:text-8xl text-shadow-cyan-600">Vamos criar algo <br/> incrivel?</h1>
                    <div className="w-full h-1 bg-[#585858] rounded-full hidden lg:block"></div>
                </div>
                <div className="flex justify-center items-center">
                    <ButtonContactMagnetic href='/contato'>
                        <p className="text-2xl lg:text-4xl">contato</p>
                    </ButtonContactMagnetic>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left px-2 pb-2 pt-20 lg:px-10 pb-5 pt-20">
                <div>
                    <h3 className="text-xl lg:text-3xl">Versão</h3>
                    <div>
                        <p className="text-md lg:text-xl">{year} © by alexsander marinho</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl lg:text-3xl">Redes</h3>
                    <div className="flex gap-4 text-md lg:text-xl">
                        <a href='https://github.com/Alexsander-Marinhoo' target="_blank" className="transition-all hover:tracking-[1]">Git Hub</a>
                        <a href='https://www.instagram.com/tutuzhs/?__pwa=1' target="_blank" className="transition-all hover:tracking-[1]">Instagram</a>
                        <a href='https://www.behance.net/alexsandermarinho' target="_blank" className="transition-all hover:tracking-[1]">Behance</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}