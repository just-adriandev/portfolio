'use client'
import Image from 'next/image'
import pfp from '../public/pfp.jpeg'
import { Button } from './ui/button'
import { Download, Mail } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation';

export  function Hero() {
    return (
        <section className='mt-28 md:mt-25'>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className=" col-span-7 place-self-center text-center sm:text-left w-full sm:w-fit px-6 py-3">
                    <h1 className="mb-4 text-5xl sm:text-7xl font-extrabold">Oi, eu sou o Adrian!</h1>
                    <p className="text-lg lg:text-xl mb-6 text-muted-foreground h-[100px] ">
                        Desenvolvedor web full-stack, curioso profissional e apaixonado por 
                        <span className=' text-3xl ml-2 text-primary'>
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Tecnologia',
                            1000,
                            'Café',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Música',
                            1000,
                            'Programação',
                            1000,
                            'Design',
                            1000,
                            'Inovação',
                            1000,
                            'Investimentos',
                            1000,
                            'Inteligência artificial',
                            1000,
                            'Livros',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                        </span> 
                    </p>

                    <div className='mt-2 flex mx-auto h-12 md:h-16'>
                        <div className=' mb-2 flex gap-x-3 mx-auto'>
                        <a href="mailto:adrianspk1@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button variant={'secondary'} className='transition duration-500 ease-in-out hover:bg-primary hover:text-black border border-primary w-full sm:w-fit px-6 py-3 h-full rounded-full'>
                            <Mail className='w-4 h-4 mr-1'/> Entre em contato
                        </Button>
                        </a>
                            <a href='/CURRICULO.pdf' download='curriculo.pdf'>
                            <Button variant={'secondary'} className='transition duration-500 ease-in-out hover:bg-primary hover:text-black border border-primary w-full sm:w-fit px-6 py-3 h-full rounded-full'><Download className='w-4 h-4 mr-1'/> Curriculo</Button>
                            </a>
                            </div>
                    </div>
                </div>

                <div className="col-span-5 place-self-center mt-14 lg:mt-0">
                    <div className=' rounded-full w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative'>
                        <Image width={300} height={300} className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={pfp} alt="Imagem de perfil" />
                    </div>
                </div>

            </div>
            <div id="About" className="md:mt-22"></div>
        </section>
    )
}