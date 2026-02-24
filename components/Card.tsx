import Image from "next/image"
export default function Card(){
    return(
    <div className="flex flex-col h-48 w-48 rounded-lg bg-white">
        <div className="flex-1 relative">
            <Image 
            src="/eu.png"
            alt="imagem do projeto"
            fill
            />
        </div>
        <div className="flex-1"></div>
    </div>
    )
}