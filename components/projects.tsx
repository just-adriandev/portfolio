import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Image from "next/image";

import lhome from '../public/lhome.jpeg'
import ldashboard from '../public/ldashboard.jpeg'
import lstripe from '../public/lstripe.jpeg'
import lassinatura from '../public/lassinatura.jpeg'
import lconfig from '../public/lconfig.jpeg'

import hpostpage from '../public/hpostpage.jpeg'
import hconfig from '../public/hconfig.jpeg'
import hcriarcom from '../public/hcriarcom.jpeg'
import hhome from '../public/hhome.jpeg'
import huptext from '../public/huptext.jpeg'
import { Github, GlobeIcon } from "lucide-react";
import React from "react";


const projeto = [
  {
      id: 1,
      titulo: 'Listo',
      imagem: [lhome, ldashboard, lconfig, lassinatura, lstripe],
      descricao: 'O listo é um micro SAAS de organização completo, feito para ser uma alternativa para quem quer se organizar mas sem diversas opções de coisas que não fazem diferença, Listo é simples mas sólido e completo que conta com recursos de autenticação de usuários, rotas protegidas, temas, nome de usuário e um sistema de assinaturas.',
      link: 'https://listonow.vercel.app',
      githublink:'https://github.com/just-adriandev/listo',
      tags:['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWINDCSS', 'PRISMA', 'SUPABASE', 'SHADCN.UI', 'KINDE', 'POSTGRESQL','STRIPE']
  },
  {
      id: 2,
      titulo: 'Hive',
      imagem: [hhome, hpostpage, hconfig, hcriarcom, huptext],
      descricao: 'O Hive é uma plataforma aberta e gratuíta para que usuários compartilhem conhecimento, dicas e recursos importantes atráves de artigos que são postados, o usuário é o criador e o consumidor. Conta com rotas para a criação de comunidades, criação de posts onde se tem o recurso de votos para filtrar se esse post apresenta conteúdo interessante ou não, comentários no artigo para se aprofundar no assunto apresentado compartilhando outros pontos de vista e complementá-los.',
      link: 'https://hivebra.vercel.app',
      githublink:'https://github.com/just-adriandev/hive',
      tags:['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWINDCSS', 'PRISMA', 'SUPABASE', 'SHADCN.UI', 'UPLOADATHING', 'KINDE', 'POSTGRESQL', ]
  },
]
export default function Projects() {
  return (
    <div className="mt-20 container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="text-center mb-20">
        <h1 className="text-primary text-5xl font-bold">Meus projetos</h1>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {projeto.map((projeto, index) => (
          <div key={projeto.id} className="bg-gray-900 bg-opacity-30 rounded-xl overflow-hidden mb-3">
            <div className="p-2">
              <Carousel>
                <CarouselContent>
                  {projeto.imagem.map((imagem) => (
                    <CarouselItem key={imagem.src}>
                      <Image src={imagem} width={400} height={300} alt={projeto.titulo} className="w-full mb-1 object-cover rounded-lg" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2" />
                <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2" />
              </Carousel>
            </div>

            <div className=" p-4">
              <h1 className="text-4xl font-bold mb-2">{projeto.titulo}</h1>
              <span className="text-lg">{projeto.descricao}</span>
            </div>

            <div className=" p-4 flex gap-x-6 mt-4 mb-5 text-lg text-muted-foreground">
              <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="flex transition duration-500 ease-in-out hover:text-primary items-center underline">
                <GlobeIcon className="w-4 h-4 mr-1" /> Ver em produção.
              </a>
              <a href={projeto.githublink} target="_blank" rel="noopener noreferrer" className="flex transition duration-500 ease-in-out hover:text-primary items-center underline">
                <Github className="w-4 h-4 mr-1" /> Ver no Github.
              </a>
            </div>

            <div className="p-4 flex flex-wrap gap-y-2 mb-4">
              {projeto.tags.map((tag, index) => (
                <span key={index} className="transition duration-500 ease-in-out hover:cursor-pointer bg-slate-800 hover:text-primary rounded-full px-3 py-2 flex text-sm mr-2">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}