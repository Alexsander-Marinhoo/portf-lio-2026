'use client'
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { useRef , useState } from "react";

export default function ButtonProject({ href , children }){

    const buttonProject = useRef(null)

    const buttonEnter = () => {
        gsap.to(buttonProject.current, {
            translateY: 0,
            duration: 0.15,
            ease: 'power3',
        })
    }

    const buttonLeave = () => {
        gsap.to(buttonProject.current, {
            translateY: '120%',
            duration: 0.15,
            ease: 'power3',
        })
    }

    return(
        <Link onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} className="relative" href={href}>
            <div className="border-2 border-(--main-color) relative overflow-hidden rounded-4xl text-xl font-bold text-(--main-color) inline-flex gap-2 items-center justify-center font-mono py-2 px-4">
                <div ref={buttonProject} className=" absolute w-full h-full top-0 left-0 rounded-4xl text-xl font-bold text-white bg-(--main-color) inline-flex gap-2 items-center justify-center font-mono py-2 px-4 recorte">
                    { children }
                </div>
                { children }
            </div>
        </Link>
    )
}