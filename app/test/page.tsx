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
        titulo: 'Projeto 1',
        imagem: [lhome, ldashboard, lconfig, lassinatura, lstripe],
        descricao: 'Descrição do Projeto 1',
        link: 'https://github.com/adriandalmeida/projeto1',
        githublink:'https://github.com/adriandalmeida/projeto1',
        tags:['nextjs', 'react']
    },
    {
        id: 2,
        titulo: 'Projeto 1',
        imagem: [hhome, hpostpage, hconfig, hcriarcom, huptext],
        descricao: 'Descrição do Projeto 1',
        link: 'https://github.com/adriandalmeida/projeto1',
        githublink:'https://github.com/adriandalmeida/projeto1',
        tags:['nextjs', 'react','bla','bla','bla',]
    },
]
export default function Projects2 () {
    return (
    <div>
        {projeto.map((projeto) => (
          <div key={projeto.id} className="transform transition duration-500  hover:scale-110 mt-12 max-w-[90%] sm:max-w-md md:max-w-lg: bg-secondary mx-auto rounded-xl overflow-hidden mb-7">
            <div className="gap-y-1 p-2">
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

              <h1 className="text-2xl font-bold mb-2">{projeto.titulo}</h1>
              <span className="text-sm">{projeto.descricao}</span>

              <div className="flex gap-x-6 mt-2 mb-4 text-sm text-muted-foreground">
                <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="flex items-center hover:decoration-clone text-emerald-950 hover:underline hover:font-medium">
                  <GlobeIcon className="w-4 h-4 mr-1" /> Ver em produção.
                </a>
                <a href={projeto.githublink} target="_blank" rel="noopener noreferrer" className="flex items-center hover:decoration-clone text-emerald-950 hover:underline hover:font-medium">
                  <Github className="w-4 h-4 mr-1" /> Ver no Github.
                </a>
              </div>

              <div className   ="flex flex-wrap mb-4">
                {projeto.tags.map((tag, index) => (
                  <span key={index} className="bg-emerald-950 bg-opacity-20 rounded-full px-2 py-1 text-sm text-emerald-950 mr-2">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
)}