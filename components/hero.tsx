import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-[#1E3A8A] to-[#4C9F70] bg-clip-text text-transparent">
              develop in Rest
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Empowering your digital journey with innovative solutions and peace of mind.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-[#4C9F70] hover:bg-[#3D8960] text-white" asChild>
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button variant="outline" className="border-[#4C9F70] text-[#4C9F70] hover:bg-[#4C9F70] hover:text-white" asChild>
              <Link href="#services">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

