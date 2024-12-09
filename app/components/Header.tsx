'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/Button"
export function Header() {
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
      };
    return (
      <header className="fixed top-0 left-0 right-0 bg-[#67B7D1] text-white p-4 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">SHRIDHARAN FOUNDATION</h1>
        </div>
        <ul className="flex space-x-4">
          <li><Button variant='ghost'onClick={() => scrollToSection('about')}> About Us </Button></li>
          <li><Button variant='ghost' onClick={() => scrollToSection('testimonials')}> Office Bearer </Button></li>
          <li><Button variant='ghost' onClick={() => scrollToSection('objectives')}> Objectives </Button></li>
          <li><Button variant='ghost' onClick={() => scrollToSection('contact')}> Contact Us</Button></li>
        </ul>
      </nav>
      </header>
    )
  }
  
  