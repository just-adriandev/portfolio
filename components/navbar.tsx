'use client'

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./mobileNavbar";
import { cn } from "@/lib/utils";
import logo from '../public/logo.png'
import Image from "next/image";

export const  navItems = [
    {
        name: "Inicio",
        href: "#",
    },
    {
        name: "Visão geral",
        href: "#About",
    },
    {
        name: "Projetos",
        href: "#projetos",
    },
    {
        name: "Contatos",
        href: "#contatos",
    },
]

export function Navbar(){

    const pathname = usePathname()
    

    return(
        <nav className="mb-10 sm:mb-0 h-[14vh] flex items-center fixed z-10 w-full bg-opacity-90 bg-[#121212]  ">
            <div className="container justify-between flex items-center">

                <div>
                <Link href={'/'}> <Image src={logo} width={50} height={50} alt='imagem da logo'/> </Link>
                </div>

                <div className="flex items-center gap-x-5">
                    
                        <div className="hidden sm:flex sm:justify-end items-center">
                            
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        
                                    {navItems.map((item, index) =>(
                                        <NavigationMenuItem key={index}>
                                            <Link href={item.href} legacyBehavior passHref>
                                                <NavigationMenuLink className={cn(pathname === item.href ? 'font-bold text-2xl bg-muted' : 'hover:bg-opacity-75%', 'hover:bg-opacity-75% hover:bg-muted group flex gap-x-6 p-3 text-1xl rounded-md')}>{item.name}</NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    ))}

                                    </NavigationMenuList>
                                </NavigationMenu>
                                
                            
                        </div>

                        <div className="sm:hidden">
                            <MobileNavbar/>
                        </div>
                
                </div>

            </div>
        </nav>
    )
}