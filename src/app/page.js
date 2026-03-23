'use client';
import Navbar from "./components/Navbar";
import Content from "./components/content";
import ButtonProject from "./components/ButtonProject";
import ButtonContactMagnetic from "./components/ButtonContact";
import Footer from "./components/Footer";
import SliderProjects from "./components/sliderProjects";

import ArrowDown from "./components/icons/ArrowDown";

export default function Home() {
  return (
    <section className="relative w-auto"> 
      <Navbar showContact={true} color={'var(--foreground)'}/>
      <div className="mt-[20vh]">
        <div className="font-[canoppe] text-6xl md:text-8xl 2xl:text-9xl mx-5  xl:mx-64 text-(--title-color)">
          <h1 className="text-center xl:text-left">web designer &</h1>
          <h1 className="text-center xl:text-right">front-end developer</h1>
        </div>
        <div className=" text-sm lg:text-xl text-(--texte-p-color) font-mono font-medium mx-5 my-8 lg:mx-64 text-justify">
          <p>Especializado em transformar conceitos criativos em experiências digitais envolventes.</p>
          <p>Combinando estética e funcionalidade para criar soluções excepcionais.</p>
        </div>
        <div className=" text-center lg:text-left mt-6 mx-5 lg:mx-64">
          <ButtonProject href='/projetos'>
            <p className="text-sm lg:text-md">Veja meus projetos!</p>
            <ArrowDown />
          </ButtonProject>
        </div>
        <div className="mt-[10vh] lg:mt-[30vh] mx-5 lg:mx-64">
          <Content text1='Minha jornada no mundo digital é marcada pela busca por combinar estética e funcionalidade para criar experiências digitais envolventes.' text2='Minha jornada no mundo digital é marcada pela busca por combinar estética e funcionalidade para criar experiências digitais envolventes.'/>
        </div>
        <div  className="flex justify-center lg:justify-end m-15 mx-5 lg:mx-64">
          <ButtonContactMagnetic href='/contato'>
            <p className="text-4xl">contato</p>
          </ButtonContactMagnetic>
        </div>
        <div className="mb-15">
          <div className="mx-5 lg:mx-64">
            <h1 className="font-[canoppe] text-5xl text-center lg:text-left lg:text-7xl text-(--main-color)">Alguns Projetos </h1>
            <h2 className="font-mono text-sm text-center lg:text-left lg:text-xl text-(--foreground)">Alguns dos meus projetos favoritos :)</h2>
          </div>
          <SliderProjects />
          <div className="flex justify-center">
            <ButtonProject href='/projetos'>
              <p className="">Mais Projetos</p>
            </ButtonProject>
          </div>
        </div>
      </div>
      {/* <div className="mt-[30vh]">
        <div className="font-[canoppe] text-9xl mx-64 text-(--title-color)">
          <h1 className="text-left">web designer &</h1>
          <h1 className="text-right">front-end developer</h1>
        </div>
        <div className=" text-xl text-(--texte-p-color) font-mono font-medium mx-64">
          <p>Especializado em transformar conceitos criativos em experiências digitais envolventes.</p>
          <p>Combinando estética e funcionalidade para criar soluções excepcionais.</p>
        </div>
        <div className="mt-6 mx-64">
          <ButtonProject href='/projetos'>
            <p className="">Veja meus projetos!</p>
            <ArrowDown />
          </ButtonProject>
        </div>
        <div className="mt-[30vh] mx-64">
          <Content text1='Minha jornada no mundo digital é marcada pela busca por combinar estética e funcionalidade para criar experiências digitais envolventes.' text2='Minha jornada no mundo digital é marcada pela busca por combinar estética e funcionalidade para criar experiências digitais envolventes.'/>
        </div>
        <div  className="flex justify-end m-15 mx-64">
          <ButtonContactMagnetic href='/contato'>
            <p className="text-4xl">contato</p>
          </ButtonContactMagnetic>
        </div>
        <div className="mb-15">
          <div className="mx-64">
            <h1 className="font-[canoppe] text-7xl text-(--main-color)">Alguns Projetos </h1>
            <h2 className="font-mono text-xl text-(--foreground)">Alguns dos meus projetos favoritos :)</h2>
          </div>
          <SliderProjects />
          <div className="flex justify-center">
            <ButtonProject href='/projetos'>
              <p className="">Mais Projetos</p>
            </ButtonProject>
          </div>
        </div>
      </div> */}
        <Footer />
    </section>
  );
}
