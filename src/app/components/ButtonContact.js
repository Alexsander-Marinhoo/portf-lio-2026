import Link from "next/link";
import gsap from "gsap";
import { useRef , useEffect , useState } from "react";

export default function ButtonContactMagnetic({ href , children}){
    const buttonRef = useRef(null)

    useEffect(() => {
        console.log(href)
    })

    const mouseMove = (e) => {
        const {clientY , clientX} = e;
        const {width , height , left , top} = buttonRef.current.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        gsap.to(buttonRef.current , {
            x: x,
            y: y,
            duration: 1,
            ease: "power3.out"
        })

    }

    const mouseLeave = (e) => {
        gsap.to(buttonRef.current , {
            x: 0,
            y: 0,
            duration: 1,
            ease: "elastic.out(1 , 0.3)"
        })
    }
    return(
        <Link ref={buttonRef} onMouseMove={mouseMove} onMouseLeave={mouseLeave} href={href} className="aspect-square bg-(--main-color) inline-block font-[Canopee] rounded-full p-10 text-white">
            <div className="flex items-center h-full w-full font-[canoppe]">
                {children}
            </div>
        </Link>
    )
}