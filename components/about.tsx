'use client'
import Image from "next/image";
import nerd from '../public/nerdimage.png'
import AboutTabs from "../components/tabs";


export default function About() {
    return (
        <section className=" mt-8">
            <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 justify-items-start">

                <div className="flex md:mx-auto max-h-full self-start ">
                <Image src={nerd} alt="nerd image" width={400} height={200} className="hidden sm:flex"/>
                </div>

                <div>
                    <h1 className="text-primary text-5xl font-bold ">Sobre mim</h1>
                    <p className=" text-base md:text-lg">
                    Desenvolvedor Web Full-Stack formado em Gestão de tecnologia da
                    informação. Sempre buscando aprender mais sobre programação,
                    design, gestão de projetos e áreas relacionadas, busco oportunidades
                    para ampliar minhas experiências e colaborar com equipes ou
                    individualmente. <br /> <br />

                    Costumo usar React/NextJs e PHP como base nos meus projetos, além dos otros frameworks, mas não tenho limitações para aprender e trabalhar com novas tecnologias, gosto de aprender e testar possibilidades diferentes.
                    </p>
                    <div className="flex flex-row mt-8">
                        <AboutTabs/>
                    </div>
                </div>
            </div>
            <div id="projetos"></div>
        </section>
        
    )
}