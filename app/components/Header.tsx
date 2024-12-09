'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false); // Close the mobile menu after clicking
  };

  const NavItems = () => (
    <>
      <li><Button variant="ghost" onClick={() => scrollToSection('about')} className="text-white hover:text-black">About Us</Button></li>
      <li><Button variant="ghost" onClick={() => scrollToSection('testimonials')} className="text-white hover:text-black">Office Bearer</Button></li>
      <li><Button variant="ghost" onClick={() => scrollToSection('objectives')} className="text-white hover:text-black">Objectives</Button></li>
      <li><Button variant="ghost" onClick={() => scrollToSection('contact')} className="text-white hover:text-black">Contact Us</Button></li>
    </>
  )

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#67B7D1] text-white p-4 z-50">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">SHRIDHARAN FOUNDATION</h1>
        </div>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          <NavItems />
        </ul>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#67B7D1] text-white">
            <nav className="flex flex-col space-y-4 mt-8">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

