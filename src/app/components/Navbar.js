
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "./icons/MenuIcon";
import { X , Circle } from "lucide-react";

export default function Navbar({showContact, color}){
    return(
        // <nav className="px-32 py-5 fixed top-0 w-full flex justify-between z-10 md:px-5">
        <nav className="px-5 py-2 fixed top-0 w-full flex justify-between z-10 md:px-16 py-5 lg:px-32">
            <Link href='/' className="">
                <div className="block md:hidden">
                    <Image src='/sm-logo.svg' alt='logo navbar' width={80} height={80}  />
                </div>
                <div className="hidden md:block">
                    <Image src='/logo-nav.svg' alt='logo navbar' width={150} height={150}  />
                </div>
            </Link>
            <div className="flex items-center justify-center gap-10" >
                {showContact && (    
                <Link href='/contato'>
                    <div className="bg-(--main-color) rounded-full py-2 px-5 text-white text-sm md:text-md font-bold font-mono">Entre em Contato!</div>
                </Link>
                )}
                {/* <MenuIcon color={color}/> */}
                {/* <div className="bg-(--main-color-dark) font-[Canopee] text-white text-7xl py-5 px-10 rounded-4xl rounded-tr-2xl absolute top-5 right-32">
                    <Link className="flex gap-2 items-center" href='/contato'><Circle size={20}/>contato</Link>
                    <Link className="flex gap-2 items-center" href='/projetos'><Circle size={20}/>projetos</Link>
                </div> */}
            </div>
        </nav>
    )
}