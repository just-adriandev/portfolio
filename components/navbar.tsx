'use client'

import Link from "next/link";
import { ModeToggle } from "./themeToggler";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./mobileNavbar";
import { cn } from "@/lib/utils";

export const  navItems = [
    {
        name: "Visão geral",
        href: "/",
    },
    {
        name: "Projetos",
        href: "/projects",
    },
    {
        name: "Contatos",
        href: "/contacts",
    },
]

export function Navbar(){

    const pathname = usePathname()
    

    return(
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex items-center">

                <Link href={'/'}> <h1 className="font-bold text-3xl">AdrianG.</h1> </Link>

                <div className="justify-between mx-auto flex items-center gap-x-5">
                    
                        <div className="hidden sm:flex sm:justify-end items-center gap-x-5">
                            
                                <NavigationMenu>
                                    <NavigationMenuList>

                                    {navItems.map((item, index) =>(
                                        <NavigationMenuItem key={index}>
                                            <Link href={item.href} legacyBehavior passHref>
                                                <NavigationMenuLink className={cn(pathname === item.href ? 'font-bold text-2xl bg-muted' : 'hover:bg-opacity-75%', 'hover:bg-opacity-75% hover:bg-muted group flex gap-x-4 p-3 text-1xl rounded-lg')}>{item.name}</NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    ))}

                                    </NavigationMenuList>
                                </NavigationMenu>
                                
                            
                        </div>

                        <ModeToggle/>

                        <div className="sm:hidden">
                            <MobileNavbar/>
                        </div>
                
                </div>

            </div>
        </nav>
    )
}