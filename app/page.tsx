import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { ContactForm } from '@/components/contact-form'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Services />

        <div id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAF9] dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
            <div className="flex justify-center items-center min-h-[500px]">
              <ContactForm className="mx-auto" />
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-6 bg-[#4C9F70] text-white">
        <div className="container px-4 md:px-6 text-center">
          <p>&copy; 2024 develop in Rest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

