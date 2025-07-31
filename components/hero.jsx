"use client";

import React, {  useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Galaxy from '../Reactbits/Galaxy/Galaxy'
import StarBorder from "../Reactbits/StarBorder/StarBorder";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const HeroSection = () => {

    const animatedRef = useRef()

    useGSAP(() => {
        gsap.from(animatedRef.current, {
            y: 80,
            opacity: 0,
            duration: 2,
            ease: "power4.out",
            delay: 0.5
        })
    })

    useGSAP(() => {
        gsap.from(".txt", {
            x: -80,
            opacity: 0,
            duration: 3,
            ease: "power4.out",
            delay: 1,
            stagger:0.2
        })
    })



    return (

        <div className="relative w-full h-[750px] overflow-hidden">
            <div className="absolute inset-0 -z-10" style={{ width: '100%', height: '1000px' }}>
                <Galaxy />
            </div>
            <section className="w-full pt-36 md:pt-48 pb-10 relative z-10">
                <div className="space-y-6 text-center  ">
                    <div className="space-y-6 mx-auto">
                        <div ref={animatedRef}>
                            <h1 className=" md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2 text-6xl animate-gradient">
                                Your AI Career Coach for
                                <br />
                                Professional Success
                            </h1>
                        </div>

                        <div className="txt">
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                                Advance your career with personalized guidance, interview prep, and
                                AI-powered tools for job success.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Link href="/dashboard">
                                    <StarBorder
                                        as="button"
                                        className="custom-class cursor-pointer"
                                        color="white"
                                        speed="3s"
                                    >
                                        Get Started
                                    </StarBorder>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default HeroSection
