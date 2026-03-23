"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState , useEffect , useRef } from "react";
import gsap from "gsap";
export default function Projetos(){

    const [selectButton , setSelectButton] = useState(0);
    const refModal = useRef(null)
    const refContainerProjects = useRef(null)
    const refContainerModal = useRef(null)

    const valueButton = (index) => {
        setSelectButton(index);
    }

    const reposString = sessionStorage.getItem('githubRepos');
    const reposArray = reposString ? JSON.parse(reposString) : [];


    const buttons = ['todos', 'development', 'design'];
    const projetosFiltro = selectButton === 0 ? reposArray : reposArray.filter(item => item.situacao === buttons[selectButton]);


    const mouseEnter = () => {

        gsap.to(refModal.current, {
            scale: 1,
            duration:0.2,
            ease: 'circ.out',
        })
    }

    const mouseLeave = () => {
        gsap.to(refModal.current,{
            scale: 0,
            duration:0.2,
            ease: 'circ.in'
        })
    }

    const mouseEnterSliderModal = (i) => {
        gsap.to(refContainerModal.current,{
            top: `-${i}00%`,
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1]
        })
    }
    useEffect(() => {
        const containerProjects = refContainerProjects.current;
        containerProjects.addEventListener('mousemove', (e) =>{
            const containerRect = refContainerProjects.current.getBoundingClientRect()
            const { clientX, clientY } = e
            const { left , top } = containerRect
            gsap.to(refModal.current,{
                left: clientX - left - (400 / 2),
                top: clientY - top - (125 / 1),
                duration: 0.4,
                ease: 'power3'
            })
        })
        
    },[])

    return(
        <div>
            
            <Navbar showContact={true} color={'var(--foreground)'}/>
            <div className="px-5 mt-[18vh] lg:px-32">
                <div>
                    <h1 className="font-[canoppe] text-6xl text-(--title-color) block lg:hidden">Alguns dos meus projetos</h1>
                    <h1 className="font-[canoppe] text-9xl text-(--title-color) hidden lg:block">Alguns dos meus <br/> projetos</h1>
                    <div className="flex gap-2 my-5 mt-5 lg:gap-7">
                        {buttons.map((texto , index) => (
                            <button key={index} onClick={() => valueButton(index)} className={`cursor-pointer font-[canoppe] text-md border-2 border-(--main-color) rounded-full px-1 py-1 transition-colors lg:text-4xl px-5 py-2 ${selectButton === index ? 'text-white bg-(--main-color)' : 'text-(--main-color)' } `}>{texto}</button>
                        ))}
                    </div>
                </div>
                <div ref={refContainerProjects} className="mb-40 relative lg:mb-30" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    {projetosFiltro.map((item, index) => (
                        <Link href={`/projetos/${item.slug}`} onMouseEnter={() => mouseEnterSliderModal(index)} className="transition-all" key={`modal_${index}`}>
                            <div className="w-full h-[0.5px] bg-(--texte-p-color) rounded-full"></div>
                            <div className="grid grid-cols-3 px-2 py-10 items-center text-(--texte-p-color) font-mono font-light transition-all hover:px-44 hover:opacity-80 lg:px-40 py-13">
                                <h2 className="text-xl col-span-2 lg:text-2xl xl:text-4xl">{item.nome}</h2>
                                <div className="text-end lg:flex justify-between">
                                    <p className=" text-md lg:text-xl">{item.situacao}</p>
                                    <span className="text-md lg:text-xl">{item.data}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <div className="w-full h-[1px] bg-(--texte-p-color) rounded-full sm:hidden lg:hidden"></div>
                    <div ref={refModal} className="absolute top-0 left-0 bg-[#C7D8C9] w-[400] h-[250] overflow-hidden scale-0 pointer-events-none">
                        <div ref={refContainerModal} className="absolute h-full w-full px-2">
                            {projetosFiltro.map((item , index) => (
                                <div key={index} className=" relative h-full w-full flex items-center justify-center">
                                    <Image src={item.src} alt="imagem projeto" width={1280} height={720}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}