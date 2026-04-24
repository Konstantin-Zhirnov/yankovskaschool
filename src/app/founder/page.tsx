import { HeroSection } from '@/components/HeroSection'
import { LeftImageSection } from '@/components/LeftImageSection'
import { Reveal } from '@/components/Reveal'

export default function FounderPage() {
  return (
    <>
      <HeroSection title="Our Founder" />

      <LeftImageSection src="/images/founder/sasha_yankovska.jpg" title="Sasha Yankovska">
        <Reveal delay={0.05}>
          <p>
            Sasha Yankovska began her gymnastics career at age 5 and trained at the Olympic Reserve
            School.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p>
            She is a multiple prize-winner and champion of international tournaments, achieving the
            title of Master of Sports of Ukraine by age 16.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p>
            Since starting her coaching career in Canada in 2012, Sasha has been dedicated to
            passing on her extensive knowledge and passion for rhythmic gymnastics to young
            athletes.
          </p>
        </Reveal>
      </LeftImageSection>
    </>
  )
}
