"use client"
import { BLUR_DELAY, DATA } from "@/resume-data/data";
import BlurFade from "./blur-fade";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from "next/link";


const AboutUS=()=>{
    return(
        <div className="text-white flex flex-col justify-center min-h-[calc(100vh-3rem)]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center md:text-start">
                    <h2 className="text-3xl md:text-6xl font-bold mb-5 inline-flex items-center">
                        <BlurFade delay={BLUR_DELAY * 2} className="mt-4">About US</BlurFade>
                        
                        <div className="relative">
                            <span className="absolute top-2 size-1 md:size-3 bg-emerald-400 rounded-full" />
                        </div>
                    </h2>
                </div>

                <BlurFade delay={BLUR_DELAY * 4 }>
                    <ReactMarkdown children={DATA.personalData.aboutMe} remarkPlugins={[remarkGfm]} className="prose max-w-full text-balance font-sans text-lg text-gray-300/80 dark:prose-invert"/>
                </BlurFade>

                <div className="flex gap-3 capitalize py-4 mb-16 sm:flex-row">
                    {DATA.personalData.link?.map((lnk)=>(
                        <Link key={lnk.name} href={lnk.url} className="hover:underline">
                            {lnk.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutUS