import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

import next from '../public/1.png'
import react from '../public/2.png'
import ts from '../public/3.png'
import js from '../public/4.png'
import html from '../public/5.png'
import css from '../public/6.png'
import canva from '../public/7.png'
import git from '../public/8.png'
import node from '../public/9.png'
import boot from '../public/10.png'
import sass from '../public/11.png'
import tail from '../public/12.png'
import mysql from '../public/13.png'
import postgre from '../public/14.png'
import Image from "next/image"

const stacks = [
    {
        id: 1,
        imagem: [
        {image: next, description:'Next.js'},
        {image:react, description:'React'},
        {image:ts, description:'Typescript'},
        {image:js, description:'JavaScript'},
        {image:html, description:'HTML'},
        {image:css, description:'CSS'},
        {image:canva, description:'Canva'},
        {image:git, description:'Git'},
        {image:node, description:'Node'},
        {image:boot, description:'Bootstrap'},
        {image:sass, description:'SASS'},
        {image:tail, description:'TailwindCss'},
        {image:mysql, description:'MySql'},
        {image:postgre, description:'PostgreSql'},
        ]
},
]
 
export default function AboutTabs() {
    return (
        <Tabs defaultValue="tec" className="w-[400px]">
      
      <TabsList className="grid font-semibold w-full grid-cols-3">
        <TabsTrigger value="tec">Tecnologias</TabsTrigger>
        <TabsTrigger value="exp">Experiência</TabsTrigger>
        <TabsTrigger value="frm">Formação</TabsTrigger>
      </TabsList>

      <TabsContent value="tec">
      <ul className="hover:cursor-pointer flex flex-wrap justify-center">
          {stacks[0].imagem.map((tech, index) => (
            <li key={index} className="mr-4 mb-4" data-tooltip-id={`tooltip-${index}`} data-tooltip-content={tech.description}>
              <Image src={tech.image} alt="tech stacks" width={80} height={80} />
            </li>
          ))}
        </ul>

        {stacks[0].imagem.map((tech, index) => (
          <Tooltip id={`tooltip-${index}`} key={index} />
        ))}
      </TabsContent>

      <TabsContent value="exp">
        <div className=" mt-5 mb-3"><h1 className=" font-semibold text-2xl ">
          2022 - 2024 | InsideSite
        </h1></div>
          
        <div><p className=" text-muted-foreground font-medium">
        Trabalhei na criação de websites do front-end ao back-end, também assumindo projetos que já estavam em andamento, utilizando NEXT.JS. Além de fazer a manutenção e otimização dos mesmos para garantir que estivessem sempre funcionando com a performance máxima. <br /> <br />
        Entreguei produtos de alta disponibilidade, reduzindo os tempos de carregamentos em até 20%, a escalabilidade reduzindo linhas de codigos desnecessarias que resultaram em um codigo limpo, e com SEO eficiente para aumentar a visibilidade, melhorando significativamente seu alcance e engajamento em todos os aspectos.
        </p></div>
      </TabsContent>

      <TabsContent value="frm">
      <div className=" mt-5 mb-3"><h1 className=" font-semibold text-2xl ">2019 - 2021 | UNIP</h1></div>
          <div><p className=" text-muted-foreground font-medium">Ensino superior em gestão de tecnologia da informação.</p></div>

      <div className=" mt-5 mb-3"><h1 className=" font-semibold text-2xl ">2021 - 2022 | UDEMY</h1></div>
          <div><p className=" text-muted-foreground font-medium">Desenvolvimento web full stack.</p></div>
      
      <div className=" mt-5 mb-3"><h1 className=" font-semibold text-2xl ">2021 - 2022 | FM2S</h1></div>
          <div><p className=" text-muted-foreground font-medium">Gestão de projetos | Lean seis sigma - yellow belt</p></div>
      </TabsContent>
    </Tabs>
    )
}