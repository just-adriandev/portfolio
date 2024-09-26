'use client'
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";


export default function Contacts() {
    return (
        <section id="contatos" className="mt-10 mb-5">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">

                <div>
                    <h1 className="text-primary text-5xl font-bold ">Contatos</h1>
                    <p className=" text-base md:text-lg">
                    Esse foi um resumo sobre mim e o que eu faço, caso deseje entrar em contato comigo você pode me encontrar nos links disponiveis, agradeço a visita e até a proxima. &#128516;
                    </p>
                </div>

                <div className="flex mt-5 gap-x-10">
                    <div className="flex mt-5 mx-auto gap-x-10 flex-row">
                    <Link target="_blank" href='https://github.com/just-adriandev'><Github width={40} height={40} className="transition duration-500 ease-in-out hover:text-primary underline"/></Link>
                        <a href="mailto:adrianspk1@gmail.com" target="_blank" rel="noopener noreferrer"><Mail width={40} height={40} className="transition duration-500 ease-in-out hover:text-primary underline"/></a>
                        <Link target="_blank" href='https://www.linkedin.com/in/adrian-gra%C3%A7a-5ab504226/'><Linkedin width={40} height={40} className="transition duration-500 ease-in-out hover:text-primary underline"/></Link>   
                    </div>
                </div>

            </div>

            <div className="flex mx-auto">
                <div className="flex mx-auto m-5">
                    <Link href="#home">
                        <ArrowUp width={60} height={60} className="transition duration-500 ease-in-out hover:bg-primary bg-slate-800 rounded-full p-3"/>
                    </Link>
                </div>
            </div>

        </section>
        
    )
}