import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Computer Science Student',
    content: 'WGU eLearning has transformed my educational journey. The flexibility and quality of courses are unmatched!',
  },
  {
    name: 'Michael Chen',
    role: 'Business Administration Graduate',
    content: 'Thanks to WGU eLearning, I was able to advance my career while balancing work and family commitments.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Nursing Student',
    content: 'The interactive simulations and expert instructors have prepared me well for my future in healthcare.',
  },
]

export default function TestimonialsSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </CardHeader>
            <CardContent>
              <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


