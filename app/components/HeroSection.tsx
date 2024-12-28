import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Empower Your Future with WGU eLearning
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Access world-class education anytime, anywhere. Join Western Governors University's innovative online learning platform.
      </p>
      <div className="space-x-4">
        <Link href="/signup">
          <Button size="lg" variant="secondary">Get Started</Button>
        </Link>
        <Link href="/courses">
          <Button size="lg" variant="outline">Explore Courses</Button>
        </Link>
      </div>
    </section>
  )
}


