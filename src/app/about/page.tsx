import { HeroSection } from '@/components/HeroSection'
import { LeftImageSection } from '@/components/LeftImageSection'
import { RightImageSection } from '@/components/RightImageSection'
import { ChampionsSection } from '@/components/ChampionsSection'
import { Reveal } from '@/components/Reveal'

export default function AboutPage() {
  return (
    <>
      <HeroSection title="About Us" />

      <LeftImageSection
        src="/images/about/rhythmic_gymnastics.jpg"
        title="About Rhythmic Gymnastics"
      >
        <>
          <Reveal delay={0.05}>
            <p>
              {`Rhythmic gymnastics (short: RG) one of the most elegant sport disciplines. It has a
              similar origins to Women's Artistic gymnastics (WAG). Rhythmic gymnasts perform on a
              floor with an apparatus, accompanied by music, in individual or group events.`}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p>
              Rhythmic gymnastics is a sport that combines elements of gymnastics, dance, and hand
              apparatus manipulation. Gymnasts compete and earn the points, determined by a panel of
              judges, for leaps, balances, pirouettes, flexibility, apparatus handling, execution,
              and artistic effect.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p>Rhythmic gymnastics has 5 hand apparatus – rope, hoop, ball, clubs, ribbon.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <p>
              International competitions are split between juniors, under sixteen by their year of
              birth; and seniors, for women sixteen and over again by their year of birth.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p>
              The largest events in the sport are the Olympic Games, World Championships, and World
              Cups.
            </p>
          </Reveal>
        </>
      </LeftImageSection>

      <RightImageSection
        src="/images/about/rhythmic-gymnastics-performance.jpg"
        title="Historical facts of RG"
      >
        <>
          <Reveal delay={0.05}>
            <p>
              Early years of Rhythmic gymnastics was emerged in Russia in 1914 by ballet artists of
              Mariinsky Theatre. They developed a course of aesthetic gymnastics.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p>
              They were influenced by great masters such as Francois Delsarte, Emile
              Jaques-Dalcroze, George Demenii and Isadora Duncan.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p>
              In 1941 there was first competition of Rhythmic gymnastics that took place in Saint
              Petersburg.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p>In 1948 there was first Soviet Union championship of Rhythmic gymnastics.</p>
          </Reveal>

          <Reveal delay={0.25}>
            <p>
              Officially RG was recognized by FIG in 1963, when the first Word Championship took
              place in Hungary.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p>
              That year soviet gymnast Liudmila Savinkova was first Word Championship winner in this
              sport.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p>
              The first time rhythmic gymnastics was in the Olympics was in 1984 in Los Angeles.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p>That year, Canadian gymnast called Lori Fung won the individual competition.</p>
          </Reveal>

          <Reveal delay={0.45}>
            <p>In 1996, rhythmic gymnastics group competitions were added in to the Olympics.</p>
          </Reveal>
        </>
      </RightImageSection>

      <ChampionsSection />
    </>
  )
}
