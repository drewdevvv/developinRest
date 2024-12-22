import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'CTO, TechCorp',
    content: 'develop in rest transformed our development process. Their expertise in software architecture significantly improved our product\'s performance.',
  },
  {
    name: 'Sarah Lee',
    role: 'Founder, StartupX',
    content: 'Working with develop in rest was a game-changer for our startup. Their web development skills brought our vision to life.',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Developer, InnovateCo',
    content: 'The code optimization service from develop in rest boosted our application\'s speed by 40%. Highly recommended!',
  },
]

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

