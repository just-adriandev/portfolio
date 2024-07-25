'use client' 

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { navItems } from "./navbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function MobileNavbar () {

    const location = usePathname()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(false)
    }, [location])
    
    return (
        <Sheet open={open} onOpenChange={(state) => setOpen(state)}>

            <SheetTrigger>
                <Button>
                <Menu className="h-4 c"/>
                </Button>
            </SheetTrigger>

            <SheetContent>
                <div className="mt-5 px-2 space-y-1 flex-col justify-end flex">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.href} className={cn(location === item.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75%', 'group flex items-center px-2 py-2 text-md font-medium rounded-md')}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </SheetContent>

        </Sheet>
    )
}