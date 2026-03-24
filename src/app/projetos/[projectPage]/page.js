    'use client'
    import Footer from "@/app/components/Footer";
    import Navbar from "@/app/components/Navbar";
    import Link from "next/link";
    import Image from "next/image";
    import { ArrowUpRight , GithubIcon, } from "lucide-react";

    import { useParams , notFound } from "next/navigation";
    import { useEffect } from "react";

    import ButtonContactMagnetic from "@/app/components/ButtonContact";
    import ButtonProject from "@/app/components/ButtonProject";
    import Content from "@/app/components/content";
    export default function projectPage() {
        
        const reposString = sessionStorage.getItem('githubRepos');
        const reposArray = reposString ? JSON.parse(reposString) : [];
        const params = useParams();
        const slugParam = params.projectPage ?? "";
        const project = reposArray.find(item => item.slug === slugParam);

        if(!project){
            notFound()
        }

        const getColor = {
            Figma: 'text-[#E69AFF] border-[#E69AFF]',
            Next: 'text-[#A89AFF] border-[#A89AFF]',
            HTML: 'text-[#FA4D4D] border-[#FA4D4D]',
            Development:'text-[#FADE4D] border-[#FADE4D]',
            Design: 'text-[#5C45FD] border-[#5C45FD]',
            Vue:'text-[#68D38A] border-[#68D38A]',
            React_Native: 'text-[#4595FD] border-[#4595FD]'
        }
        return(
            <section>
                <Navbar showContact={true} color='var(--foreground)' />
                <div className="flex flex-col justify-center items-center mt-[20vh] px-5">
                    <h1 className="font-[canoppe] text-6xl lg:text-9xl text-center text-(--foreground)">{project.nome}</h1>
                    <div className="flex justify-center items-center font-mono gap-3">
                        <span className="underline text-sm lg:text-md">{project.situacao} / {project.data}</span>
                        {project.condicoes.map((item , index) => (
                            <p key={index} className={`${getColor[item.situacao]} border-2 rounded-full py-1 px-2 font-bold text-sm lg:text-md`}>{item.situacao}</p>
                        ))}
                    </div>
                    <div className="mt-10 mb-4 block lg:hidden">
                        {project.urlSite === "" ? (
                            <div className="bg-(--texte-p-color) px-3 py-1 rounded-2xl mt-8">
                                <p className="text-md font-mono text-(--background)">Design Finalizado</p>
                            </div>
                        ) : (
                            <ButtonProject href={project.urlSite || '/'}>
                                <p className="">visite</p>
                                <ArrowUpRight size={30} />
                            </ButtonProject>
                        )}
                    </div>
                    <div className="mb-30 h-[600] w-[85vw] rounded-3xl shadow-md relative">
                        <Image className="object-cover object-center rounded-3xl lg:mt-10" src={project.src} fill alt="imagem de projeto"/>
                        <div className="absolute top-0 right-0 -translate-2/4 hidden lg:block">
                            {project.urlSite === "" ? (
                                <div className="bg-(--texte-p-color) px-3 py-1 rounded-2xl mt-8">
                                    <p className="text-md font-mono text-(--background)">Design Finalizado</p>
                                </div>
                            ) : (
                                <ButtonContactMagnetic href={project.urlSite || '/'} target="_blank">
                                    <p className="text-xl font-[canoppe]">visite</p>
                                    <ArrowUpRight size={30} />
                                </ButtonContactMagnetic>
                            )}
                        </div>
                    </div>
                    <div className="mx-5 mb-30 xl:mx-48">
                        <Content text1={project.texto1} text2={project.texto2}/>
                        <div className="flex justify-center py-5 lg:justify-end">
                            <ButtonProject href={project.urlGit || '/'}>
                                {project.situacao === 'design' ? (
                                    <p className="">Veja no Behance!</p>
                                ) : (
                                    <p className="">Veja no GitHub!</p>
                                )}
                            </ButtonProject>
                        </div>
                    </div>
                    {/* <div className="bg-[#b1c0b3] w-full px-72 py-30 rounded-t-4xl">
                        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/5GyG_ZDaXA4?si=APIzTp6j4aQvTgNr&controls=0&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
                    </div> */}
                </div>
                <Footer />
            </section>
        )
    }