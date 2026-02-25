import Card from "@/components/Card";
export default function Projects(){
    return(
        <main className="h-screen w-screen bg-amber-950 flex items-center flex-col gap-4">
            <h1 className="text-6xl mt-4">Meus Projetos</h1>


            <Card src="/lobo4e4.webp" title="lp-nova" description="Site informativo sobre lobos."url="https://github.com/ismaelnata01-maker/lp-nova"/>

            <Card src="/cama-elastica1.jpg" title="Serviços" description="Site sobre serviços de uma empresa que aluga brinquedos." url="https://github.com/ismaelnata01-maker/servico-forja-tarde-Ismael_e_Vinicius"/>

            <Card src="/file.svg" title="Portfolio" description="Meu portfolio feito em React e Next.js." url="https://github.com/ismaelnata01-maker/portfolio-forja-tarde"/>

        </main>
    );
}