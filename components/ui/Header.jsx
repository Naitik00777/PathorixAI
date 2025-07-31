import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './button';
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { checkUser } from '../../lib/checkUser';
import GradientText from '../../Reactbits/GradientText/GradientText';

const Header = async () => {
  await checkUser()
  return (

    <header className='fixed top-0 border-b w-full bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>

        <Link href='/'>
          <GradientText
            colors={["#ffffff", "#f5f5f5", "#c0c0c0", "#7a7a7a", "#1a1a1a"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-2xl tracking-wide font-bold"
            >
            Pathorix AI
          </GradientText>
        </Link>

        <div className='flex space-x-2 items-center md:space-x-4'>
          <SignedIn>
            <Link href='/dashboard'>
              <Button variant={'outline'}>
                <LayoutDashboard className='h-4 w-4' />
                <span className='hidden md:block'>
                  Industry insights
                </span>
              </Button>
            </Link>


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarsIcon className='h-4 w-4' />
                  <span className='hidden md:block'>Growth Tools</span>
                  <ChevronDown className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={'/resume'} className='flex items-center gap-2'>
                    <FileText className='h-4 w-4' />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={'/ai-cover-letter'} className='flex items-center gap-2'>
                    <PenBox className='h-4 w-4' />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={'/interview'} className='flex items-center gap-2'>
                    <GraduationCap className='h-4 w-4' />
                    <span>Interview prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant={'outline'}>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                  userButtonPopoverCard: 'shadow-xl',
                  userPreviewMainIdentifier: 'font-semibold'
                }
              }}
              afterSignOutUrl='/'
            />
          </SignedIn>

        </div>
      </nav>
    </header>
  )
}

export default Header
