export default function Content({ text1 , text2 }){
    return(
        <div className="flex flex-col gap-10 gap-4 lg:grid grid-cols-3">
            <p className="font-[Felgine] text-2xl lg:text-4xl col-span-2 text-(--title-color) text-justify">{text1}</p>
            <p className="font-mono text-(--texte-p-color) italic text-md lg:text-lg text-justify">{text2}</p>
        </div>
    )
}