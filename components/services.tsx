import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Cpu, Globe, Brain } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and performant web applications tailored to your needs.',
    icon: Globe,
  },
  {
    title: 'Software Architecture',
    description: 'Designing scalable and maintainable software architectures for your projects.',
    icon: Cpu,
  },
  {
    title: 'Code Optimization',
    description: 'Improving the efficiency and speed of your existing codebase.',
    icon: Code,
  },
  {
    title: 'AI Leveraged Technologies',
    description: 'Human to human collaboration with a little help from our friends (AI).',
    icon: Brain,
  },
]

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAF9] dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <service.icon className="w-10 h-10 mb-2 text-[#4C9F70]" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

