import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { FounderSection } from '@/components/FounderSection'
import { ProgramsSection } from '@/components/ProgramsSection'
import { ContactSection } from '@/components/ContactSection'

export default function Page() {
  return (
    <main>
      <Hero />

      <AboutSection />

      <FounderSection />

      <ProgramsSection />

      <ContactSection />
    </main>
  )
}
