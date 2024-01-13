import { Form } from '@/components/Form'
import { Hero } from '@/components/Hero'
import { SelectSection } from '@/components/SelectSection'
import { Testimonial } from '@/components/Testimonial'
import { SelectProvider } from '@/contexts/SelectContext'

export default function Home() {
  return (
    <SelectProvider>
      <Hero />
      <SelectSection />
      <Testimonial />
      <Form />
    </SelectProvider>
  )
}
