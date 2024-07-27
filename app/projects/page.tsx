import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Image from "next/image";

import lhome from '@/public/lhome.jpeg'
import ldashboard from '@/public/ldashboard.jpeg'
import lstripe from '@/public/lstripe.jpeg'
import lassinatura from '@/public/lassinatura.jpeg'
import lconfig from '@/public/lconfig.jpeg'

import hpostpage from '@/public/hpostpage.jpeg'
import hconfig from '@/public/hconfig.jpeg'
import hcriarcom from '@/public/hcriarcom.jpeg'
import hhome from '@/public/hhome.jpeg'
import huptext from '@/public/huptext.jpeg'
import { Github, GlobeIcon } from "lucide-react";

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
export default function Projects2 () {
    return (
    <div>
        {projeto.map((projeto) => (
          <div key={projeto.id} className="transform transition duration-500  hover:scale-110 mt-10 max-w-[90%] sm:max-w-md md:max-w-lg bg-gray-900 bg-opacity-30 mx-auto rounded-xl overflow-hidden mb-3">
            <div className="p-2">
              <Carousel>
                <CarouselContent>
                  {projeto.imagem.map((imagem) => (
                    <CarouselItem key={imagem}>
                      <Image src={imagem} width={700} height={500} alt={projeto.titulo} className ="w-full mb-1 object-cover rounded-lg" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <h1 className="text-4xl font-bold mb-2">{projeto.titulo}</h1>
              <span className="text-lg">{projeto.descricao}</span>

              <div className="flex gap-x-6 mt-4 mb-16 text-sm text-muted-foreground">
                <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="flex text-sky-700 items-center underline hover:font-medium">
                  <GlobeIcon className="w-4 h-4 mr-1" /> Ver em produção.
                </a>
                <a href={projeto.githublink} target="_blank" rel="noopener noreferrer" className="flex text-sky-700 items-center underline hover:font-medium">
                  <Github className="w-4 h-4 mr-1" /> Ver no Github.
                </a>
              </div>

              <div className="flex flex-wrap gap-y-2 mb-4">
                {projeto.tags.map((tag, index) => (
                  <span key={index} className="rounded-full bg-emerald-950 px-3 py-2 flex text-sm mr-2">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
)}