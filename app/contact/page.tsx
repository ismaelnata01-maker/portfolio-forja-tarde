"use client";
import { useEffect, useMemo, useState } from "react";
export default function Contact(){
    const[email, setEmail] = useState("");

    const error = useMemo(()=> {
        return !email.includes("@")
    }, [email]);
    


    /*useState= Cria variável q será usada em todo componente ou pagina*/
    /*useEffect= Faz ação de acordo com a mudança de um valor*/
    /*useMemo= Muda o valor de uma variavel de acordo com o valor de outra variavel*/



    /*const [error, setError] = useState(false);

    useEffect(()=>{
        if(email.includes("@")){
            setError(false);
        }else{
            setError(true)
        }
    },[email]);*/

    function getEmail(){
        /*console.log(email);*/
    

    if(!error){/*Isso é o mesmo q dizer error = false */
        const msg = `Gostaria de entrar em contato!\n\nEmail: ${email}`
    window.open(`https://wa.me/5541999999999?text=${msg}`)
    }else{
        alert("Digite um email válido.")
    }
}
    
    

    return(
        <main className="W-screen h-screen flex flex-col gap-16 items-center justify-center">
            <h1 className="text-6xl">Contato</h1>

            <div>
            <p>Digite seu email para eu entrar em contato</p>
            <input 
            type="email" 
            placeholder="Digite seu email" 
            className="border border-white" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500">Email inválido</p>}
            </div>

            <button className="cursor-pointer border border-white py-2 px-10 rounded-full disabled:cursor-not-allowed disabled:opacity-50" onClick={() => getEmail() }disabled={error}>Enviar</button>
        </main>
    )
}