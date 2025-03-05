
"use client"
import { X,AlignJustify } from "lucide-react";
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Experience from "@/components/experience";
import Project from "@/components/project";
import Home from "@/components/home";
import AboutUS from "@/components/about";
import "./stacked-menu.css"

interface PageData {
  id: string;
  title: string;
  background: string;
  content:any
}

const StackedMenu: React.FC = () => {
  const toggleRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  
  const pages: PageData[] = [
    { id: 'page1', title: 'ABOUT', background: '[#40916C]',content:(<AboutUS/>)},
    { id: 'page2', title: 'EXPERIENCE', background: '[#8D4B55]', content:(<Experience/>)},
    { id: 'page3', title: 'PROJECT', background: '[#6998AB]' , content:(<div className="mb-10 pb-16"><Project/></div>)},
    { id: 'page4', title: 'HOME', background: '[#B1D0E0]', content:(<Home/>) },
  ];

  useEffect(() => {
    const handlePageClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const pageIndex = parseInt(target.getAttribute('data-index') || '0');
      
      if (toggleRef.current?.checked) {
        const pages = document.querySelectorAll('.page');
        pages.forEach((page, index) => {
          (page as HTMLElement).style.left = index > pageIndex ? '100vw' : '0';
        });
        toggleRef.current.checked = false;
      }
      setIsChecked(false);
    };

    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
      page.addEventListener('click', handlePageClick as EventListener);
      (page as HTMLElement).setAttribute('data-index', index.toString());
    });

    return () => {
      pages.forEach(page => {
        page.removeEventListener('click', handlePageClick as EventListener);
      });
    };
  }, []);

  const closeMenu=()=>{
    //@ts-expect-error
    toggleRef.current.checked = false
    setIsChecked(false);
    
  }

  return (
    <div className="center bg-black" >
      <div className="menu overflow-hidden">
        <input 
          type="checkbox" 
          className='hidden'
          data-menu={isChecked}
          id="toggle" 
          ref={toggleRef}
          onClick={()=>setIsChecked(true)}
        />
        <label className="w-[40px] h-[40px] flex justify-center items-center">
          <X className='size-6 text-white flex justify-center items-center cursor-pointer' onClick={closeMenu}/>
        </label>
        {pages.map((page) => (
          <div 
            key={page.id}
            className={cn("page text-white overflow-auto",isChecked ? `border-4 bg-black rounded-2xl` : 'bg-black',)}
            id={page.id}
          >
          
            <div className="head sticky top-0 cursor-pointer z-[99999]">
              <label htmlFor="toggle" className="flex justify-center items-center">
                {isChecked||<AlignJustify className='size-6 mx-2 mt-4 text-white flex justify-center items-center cursor-pointer'/>}
              </label>
              {isChecked && <div className="ml-2 mt-2">{page.title}</div>}
            </div>
            <div className="content">
              <div className="text max-w-4xl container mx-auto h-svh font-sans">
               {page.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedMenu;