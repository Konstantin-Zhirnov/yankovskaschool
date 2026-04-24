import { HeroSection } from '@/components/HeroSection'
import { ScheduleSection } from '@/components/ScheduleSection'
import { LeftImageSection } from '@/components/LeftImageSection'
import { RightImageSection } from '@/components/RightImageSection'
import { Reveal } from '@/components/Reveal'

export default function ProgramsPage() {
  return (
    <>
      <HeroSection title="Our Programs" />

      <LeftImageSection
        src="/images/programs/recreational-program-rhythmic-gymnastics.jpg"
        title="Recreational program"
      >
        <Reveal delay={0.05}>
          <p>
            Recreational program allow gymnasts to learn basic body movement techniques required in
            rhythmic gymnastics.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p>
            They will learn how to use hand held apparatus such as rope, ball, ribbon and hoop all
            in harmony with music.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p>
            In this program gymnasts will perform at Yankovska school home events – Christmas &
            Summer Shows.
          </p>
        </Reveal>
      </LeftImageSection>

      <RightImageSection
        src="/images/programs/beginners-program-rhythmic-gymnastics.jpg"
        title="Beginners program"
      >
        <Reveal delay={0.05}>
          <p>
            Beginners program classes will introduce the basics of rhythmic gymnastics and
            choreography in a fun, creative and engaging way.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p>
            Gymnasts will work to develop better hand-eye coordination, body posture, flexibility,
            strength and listening skills.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p>
            Tay will train in small groups with their peers, which will also help them develop
            better social and cognitive skills.
          </p>
        </Reveal>
      </RightImageSection>

      <LeftImageSection
        src="/images/programs/interclub-program-rhythmic-gymnastics.jpg"
        title="Interclub program"
      >
        <Reveal delay={0.05}>
          <p>
            In Interclub program gymnasts will take their first steps from Recreational to
            Competitive program, learning a wide variety of body and apparatus skills.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p>
            They will have an opportunity to perform in multiple Invitational events, as well as
            Yankovska school home events – Christmas & Summer Shows.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p>This program is available in individual and group routines.</p>
        </Reveal>
      </LeftImageSection>

      <RightImageSection
        src="/images/programs/competitive-program-rhythmic-gymnastics.jpg"
        title="Competitive program"
      >
        <Reveal delay={0.05}>
          <p>
            In Competitive program gymnasts learn more advanced body techniques, choreography,
            gymnastics and acrobatic elements, as well as work with apparatus.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p>
            They develop strength and flexibility, self-confidence, learn how to set goals and
            desire for achievements.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p>
            At this level they get to experience local, regional, national, and international
            competitions.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p>
            They can reach out for potential scholarship opportunities (for athletes who excel at
            National level).
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p>This program is available in individual and group routines.</p>
        </Reveal>
      </RightImageSection>

      <ScheduleSection />
    </>
  )
}
