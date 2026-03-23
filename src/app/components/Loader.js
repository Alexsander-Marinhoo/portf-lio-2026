"use client";
import { gsap } from "gsap";
import { useRef , useEffect , useState } from "react";
export default function Loader(){

    const [showLoader, setShowLoader] = useState(false);
    
    //refs para elementos do DOM
    const loaderRef = useRef(null);
    const blockRefs = useRef([])
    const spinnerRef = useRef(null);
    const counterRef = useRef(null);
    const countRefs = useRef([]);
    const digitRefs = useRef([]);

    //valores para carregar no DOM
    const digitsCount = [[0,0] , [2,7] , [6,5] , [9,8] , [9,9] , ['A','L','E','X']];
    const blocksValue = [[]];

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("hasLoaded");
        if (!hasLoaded) {
            setShowLoader(true);
        }
    }, []);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("hasLoaded");

        if (!hasLoaded) {
            setShowLoader(true);
        } else {
            // Se já carregou, encerra o efeito
            return;
        }


        const tl = gsap.timeline({
            delay: 0.3,
            defaults:{
                ease: "expo.out",
            }
        });
        
        if(showLoader){
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
        }



        countRefs.current.forEach((item , index) => {
            const h1Arrays = Array.from(item.querySelectorAll('div h1'));

            tl.to(h1Arrays, {
                y: '0%',
                duration: 1,
                stagger: 0.075
            }, index * 1)

            if(index < countRefs.current.length) {
                tl.to(h1Arrays, {
                y: '-100%',
                duration: 1,
                stagger: 0.075
            }, index * 1 + 1)
            }

        });
        tl.to(spinnerRef.current, {
            opacity: 0,
            duration: 0.3
        });
        tl.to(blockRefs.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            stagger: 0.1,
        })
        tl.call(() => {
            if(showLoader === true){
                const screenLoader = loaderRef.current;
                screenLoader.style.display = 'none';
                document.body.style.overflow = 'auto';
            }

            sessionStorage.setItem("hasLoaded", "true");
            setShowLoader(false);

        })

        return () => {
            tl.kill();
        };
    },[showLoader]);

    // Se showLoader for false, o componente não renderiza nada
    if (!showLoader) return null;


    return(
        <>
            {showLoader && (
                <div ref={loaderRef} className="fixed top-0 left-0 w-[100vw] h-[100svh] z-20 overflow-hidden">
            <div className=" absolute top-0 w-full h-full flex">
                {blocksValue.map((value , index) => (
                    <div key={index} ref={el => blockRefs.current[index] = el} className="w-full h-full bg-(--main-color-dark) clip"></div>
                ))}
            </div>

            <div className="absolute bottom-1/12 left-1/2 -translate-1/2">
                <div ref={spinnerRef} className="w-[60px] h-[60px] border-4 border-(--background) rounded-full border-b-transparent animate-spin"></div>
            </div>

            <div ref={counterRef} className="absolute top-1/2 left-1/2 -translate-1/2 z-20">
                {digitsCount.map((digits, index) => (
                    <div key={index} ref={el => countRefs.current[index] = el} className="absolute top-1/2 left-1/2 -translate-1/2 flex clip">
                        {digits.map((d, digitId) => (
                            <div className="flex flex-1 pt-4 clip" key={digitId} ref={el => digitRefs.current[index * 2 + digitId] = el}>
                                <h1 className="font-[canoppe] text-[15rem] text-(--background) relative will-change-transform recorte">{d}</h1>
                            </div>
                        ))}
                    </div>
                ))} 
            </div>
        </div>
            )}
        </>
    )
}