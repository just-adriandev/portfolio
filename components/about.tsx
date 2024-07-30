'use client'
import Image from "next/image";
import nerd from '../public/nerdimage.png'
import AboutTabs from "../components/tabs";


export default function About() {
    return (
        <section className=" mt-8">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
                <Image src={nerd} alt="nerd image" width={300} height={300} className="hidden sm:flex mx-auto align-top"/>

                <div>
                    <h1 className="text-primary text-5xl font-bold ">Sobre mim</h1>
                    <p className=" text-base md:text-lg">
                    Desenvolvedor Web Full Stack formado em Gestão de tecnologia da
                    informação. Sempre buscando aprender mais sobre programação,
                    design, gestão de projetos e áreas relacionadas, busco oportunidades
                    para ampliar minhas experiências e colaborar com equipes ou
                    individualmente. <br /> <br />

                    Costumo usar React/NextJs nos meus projetos, mas não tenho limitações para trabalhar com outras tecnologias, gosto de aprender e me testar, meu estilo favorito de trabalho é o minimalista, gosto de entregar projetos completos e sólidos porém com um toque de simplicidade que faz toda a diferença.

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