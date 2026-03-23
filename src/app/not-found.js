import Image from "next/image"
import Link from "next/link"
export default function NotFound() {

  const year = new Date().getFullYear();

  return (
    <div className="relative w-[100vw] h-[100vh] md:grid grid-cols-2">
      <div className="flex justify-center items-center block md:hidden">
        <Image src='/sm-logo.svg' width={300} height={300} alt="emoji triste" />
      </div>
      <div className="flex justify-center justify-center hidden md:flex">
         <Image src='/sm-logo.svg' width={600} height={600} alt="emoji triste" />
      </div>
      <div className="flex flex-col justify-center text-center gap-6 md:text-left">
        <div>
          <h1 className="font-[Felgine] text-5xl text-(--title-color) md:text-6xl lg:text-8xl">Página não encontrada.</h1>
          <p className="font-[Felgine] text-2xl text-(--title-color) mb-12 lg:text-3xl">Infelizmente não encontramos a rota informada.</p>
          <Link href='/' className="font-[canoppe] text-(--title-color) text-3xl border-2 rounded-full px-7 py-3">
            visitar home
          </Link>
        </div>
      </div>
    </div>
  )
}
