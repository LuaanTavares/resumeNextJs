import { Inter } from 'next/font/google'
import { About } from '@/components/about'
import { Courses } from '@/components/courses'
import { Education } from '@/components/education'
import { Footer } from '@/components/footer'
import { Main } from '@/components/main'
import { Navbar } from '@/components/navbar'
import { Skills } from '@/components/skills'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <div className="bg-black">
        <About />
        <Skills/>
        <Education/>
        <Courses/>
        <Footer/>
      </div>
     
    </>
  )
}
