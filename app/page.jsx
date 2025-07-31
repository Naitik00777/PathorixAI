"use client"

import HeroSection from '../components/hero'
import React, { useEffect, useRef } from 'react'
import { features } from '../data/features'
import { howItWorks } from '../data/howItWorks'
import {
  Card,
  CardContent,
} from "../components/ui/card"
import { faqs } from '../data/faqs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import { ArrowRight, Link } from 'lucide-react'
import { Button } from '../components/ui/button'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const page = () => {

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRef = useRef()
  const section1Ref = useRef()
  const txtRef = useRef()
  const txt1Ref = useRef()
  const txt2Ref = useRef()
  const txt3Ref = useRef()


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scroller:"body", 
        start: "top 70%",
        end:"top -70",
        scrub:2,           
        // markers: true,            
      },
    });

    tl.from(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.4

      }
    ).from(
      subtitleRef.current,
      {
        y: 50,
         opacity: 0,
        duration: 1,
        delay:0.5
      }
    );
  }, []);


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section1Ref.current,
        scroller:"body", 
        start: "top 80%",
        end:"top 582.8",
        scrub:2,           
        // markers: true,            
      },
    });

    tl.from(
      txtRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 1,
      }
    ) 
    tl.from(
      txt1Ref.current,
      {
        y: 50,
        opacity: 0,
        duration: 1,
      }
    ) 
    tl.from(
      txt2Ref.current,
      {
        y: 50,
        opacity: 0,
        duration: 1,
      }
    ) 
    tl.from(
      txt3Ref.current,
      {
        y: 50,
        opacity: 0,
        duration: 1,
      }
    ) 
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".box1",
        scroller:"body", 
        start: "top 70%",
        end:"top -70",
        scrub:2,           
        // markers: true,            
      },
    });

    tl.from(
      ".txt1",
      {
        y: 50,
        opacity: 0,
        duration: 0.4

      }
    ).from(
      ".rxt2",
      {
        y: 50,
         opacity: 0,
        duration: 0.8,
      }
    );
  }, []);


  return (
    <div>
      {/* <div className='grid-background '></div> */}

      <HeroSection />

      <section ref={sectionRef} className='w-full py-12 md:py-24 lg:py-32 bg-background'>
        <div className="container mx-auto px-4 md:px-6">
          <h2 ref={titleRef} className="text-3xl font-bold tracking-tighter text-center mb-12 line_1">Powerfull features for your career growth</h2>

          <div ref={subtitleRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-colors duration-300"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section ref={section1Ref} className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div ref={txtRef}  className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-muted-foreground">Industries Covered</p>
            </div>
            <div ref={txt1Ref} className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-muted-foreground">Interview Questions</p>
            </div>
            <div ref={txt2Ref} className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div ref={txt3Ref} className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 bg-background box1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 txt1">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto rxt2">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto py-24 bg-gradient-to-t from-gray-500 via-white to-gray-500 rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <a href="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

          </div>
        </div>
      </section>

    </div>
  )
}

export default page