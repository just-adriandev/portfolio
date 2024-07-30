'use client'
import Image from "next/image";
import nerd from '../public/nerdimage.png'
import AboutTabs from "../components/tabs";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";


export default function Contacts() {
    return (
        <section id="contatos" className="mt-10 mb-5">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">

                <div>
                    <h1 className="text-primary text-5xl font-bold ">Contatos</h1>
                    <p className=" text-base md:text-lg">
                    Aqui mostrei um pouco sobre mim, caso deseje entrar em contato comigo você pode me encontrar em um dos links abaixo, agradeço a visita e até a proxima. &#128516;
                    </p>
                </div>

                <div className=" mx-auto gap-x-10 flex flex-row">
                <Link target="_blank" href='https://github.com/just-adriandev'><Github width={40} height={40} className="hover:text-primary underline"/></Link>
                <a href="mailto:adrianspk1@gmail.com" target="_blank" rel="noopener noreferrer"><Mail width={40} height={40} className="hover:text-primary underline"/></a>
                <Link target="_blank" href='https://www.linkedin.com/in/adrian-gra%C3%A7a-5ab504226/'><Linkedin width={40} height={40} className="hover:text-primary underline"/></Link>
                </div>

            </div>

        </section>
        
    )
}