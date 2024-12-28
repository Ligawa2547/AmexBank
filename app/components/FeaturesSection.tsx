import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, Award, Clock } from 'lucide-react'

const features = [
  {
    title: 'Diverse Course Catalog',
    description: 'Access a wide range of courses across various disciplines.',
    icon: BookOpen,
  },
  {
    title: 'Expert Instructors',
    description: 'Learn from industry professionals and experienced academics.',
    icon: Users,
  },
  {
    title: 'Flexible Learning',
    description: 'Study at your own pace with 24/7 access to course materials.',
    icon: Clock,
  },
  {
    title: 'Recognized Certifications',
    description: 'Earn valuable certificates upon course completion.',
    icon: Award,
  },
]

export default function FeaturesSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose WGU eLearning?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


