'use client'

import { useRef } from 'react'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import { gsap } from 'gsap'

export default function Showreel() {
  const el = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(el.current, {
        clipPath:
          'polygon(calc(20% + 6rem) 0%, 80% 0%, 80% calc(80% - 6rem), calc(80% - 6rem) 80%, 20% 80%, 20% 6rem)',
        scale: 0.6,
        transformOrigin: 'top center',
        scrollTrigger: {
          trigger: el.current,
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: 1.5,
        },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={el} className="clipped-corners aspect-video">
      <iframe
        src="https://player.vimeo.com/video/829920535?controls=0&autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1"
        className="pointer-events-none h-full w-full"
        allowFullScreen
      />
    </section>
  )
}