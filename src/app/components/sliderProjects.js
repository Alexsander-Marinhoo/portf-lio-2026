'use client';
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { useRef , useEffect } from "react";

export default function SliderProjects(){

    const refContainerSlider = useRef(null);
    const refSlider1 = useRef(null);
    const refSlider2 = useRef(null);

    const getColor = {
        Figma: 'text-[#E69AFF] border-[#E69AFF]',
        Next: 'text-[#A89AFF] border-[#A89AFF]',
        HTML: 'text-[#FA4D4D] border-[#FA4D4D]',
        Development:'text-[#FADE4D] border-[#FADE4D]',
        Design: 'text-[#5C45FD] border-[#5C45FD]',
        Vue:'text-[#68D38A] border-[#68D38A]',
        React_Native: 'text-[#4595FD] border-[#4595FD]'
    }
    const reposString = sessionStorage.getItem('githubRepos');
    const reposArray = reposString ? JSON.parse(reposString) : [];

    useEffect(() => {
        gsap.to(refSlider1.current, {
            x: 150,
            scrollTrigger: {
                trigger: refContainerSlider.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        })
        gsap.to(refSlider2.current, {
            x: -150,
            scrollTrigger: {
                trigger: refContainerSlider.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                // markers: true
            }
        })
    }, [])

    return(
        <div className="my-15 flex flex-col items-center justify-center gap-10 relative overflow-hidden py-10" ref={refContainerSlider}>
            <div className="flex gap-8 w-[250vw] md:w-[180vw] lg:w-[120vw]" ref={refSlider1}>
                {reposArray.slice(0 , 4).map((project , index) => (
                    <Link href={`/projetos/${project.slug}`} key={index} className="w-1/4 h-auto flex flex-col gap-2 items-center justify-center font-mono transition-all rounded-2xl hover:scale-102">
                        <Image className="object-fill shadow-md rounded-2xl border-2 border-(--main-color)" src={project.src} alt='imagem de projeto' width={1920} height={1080} />
                        <div className="w-full flex justify-end items-end gap-2 font-bold">
                            {project.condicoes.map((item , ix) => (    
                                <p key={ix} className={`border-2 font-sans rounded-4xl px-2 text-sm ${getColor[item.situacao]}`}>{item.situacao}</p>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex gap-8 w-[250vw] md:w-[180vw] lg:w-[120vw]" ref={refSlider2}>
                {reposArray.slice(4 , 8).map((project , index) => (
                    <Link href={`/projetos/${project.slug}`} key={index} className="w-1/4 h-auto flex flex-col gap-2 items-center justify-center font-mono transition-all rounded-2xl hover:scale-102">
                        <Image className="object-fill shadow-md rounded-2xl border-2 border-(--main-color)" src={project.src} alt='imagem de projeto' width={1920} height={1080} />
                        <div className="w-full flex justify-end items-end gap-2 font-bold">
                            {project.condicoes.map((item , ix) => (    
                                <p key={ix} className={`border-2 font-sans rounded-4xl px-2 text-sm ${getColor[item.situacao]}`}>{item.situacao}</p>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}