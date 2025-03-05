"use client"
import { BLUR_DELAY, DATA } from "@/resume-data/data";
import BlurFade from "./blur-fade";
import { ReactNode } from "react";
import { CircleCheckBig, MoveRight } from "lucide-react";
import { Button } from "./ui/button";


interface Project {
  name: string
  title: string
  results: { title: string }[]
  link: string
  code: string | null
  image: string
  tools: string[]
  role: string
  content: () => ReactNode
}

const Project=()=>{

  return(
    <section className="pb-36 md:pb-0">
      <BlurFade delay={BLUR_DELAY * 2} className="mt-4">
        <div className="text-center md:text-start">
          <h2 className="text-5xl md:text-6xl font-bold md:mb-6 inline-flex items-center ">
            Project
            <div className="relative">
              <span className="absolute top-2 size-2 md:size-3 bg-emerald-400 rounded-full" />
            </div>
          </h2>
        </div>
      </BlurFade>

      <div className="flex flex-col gap-1 md:gap-10 pb-20 md:pb-0 font-sans">
        {DATA.projectData.map((project,index)=>(
          <div 
            key={project.title} 
            style={{top:`calc(37px + ${index*30}px)`}}
            className="bg-black rounded-2xl overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-4 after:pointer-events-none md:pt-12 md:px-6 lg:pt-16 lg:px-16 relative md:sticky ">
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 sticky top-9">
              <div className="lg:pb-16">
                <div>
                  <div className="md:inline-flex  gap-2 items-center tracking-widest text-sm lg:text-md text-transparent bg-clip-text">
                    <span className="md:font-bold uppercase text-white">{project.name}</span>
                  </div>
                </div>
                <h3 className="text-xl mt-2 md:mt-5 text-primary md:text-3xl text-white font-bold">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result)=>(
                    <li key={result.title} className="font-sans flex gap-2 items-center text-xs md:text-base text-white/80">
                      <CircleCheckBig className="size-3"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                {project.tools.map((tool,index)=>{
                    return(
                      <span key={index} className="bg-primary/20 text-white px-3 py-1 rounded-full text-xs border">{tool}</span>
                    )
                })}
                </div>
                <div className="flex gap-2">
                  {project.link &&
                  <a href={project.link} target="_blank">
                    <Button className="group mt-8 h-10 bg-white text-black hover:bg-white rounded-full" asChild>
                      <span className="flex gap-2 items-center text-sm mt-1">Demo <MoveRight className="h-4 w-4 -rotate-45 group-hover:rotate-0"/> </span>
                    </Button>
                  </a>}
                  {project.code &&
                  <a href={project.code} target="_blank">
                    <Button className="group mt-8 h-10 bg-white text-black hover:bg-white rounded-full" asChild>
                      <span className="flex gap-2 items-center text-sm mt-1">Code <MoveRight className="h-4 w-4 -rotate-45 group-hover:rotate-0"/> </span>
                    </Button>
                  </a>}
                </div>
              </div>
              <div className="lg:relative">
                <img className="mt-8 border-white/20 -z-30 border-l-2 border-t-2 rounded-t-3xl border-r-2 lg:border-r-0 p-2 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" src={project.image} alt={project.title}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project