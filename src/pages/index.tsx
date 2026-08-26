import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { home } from 'virtual:content';
const categoryHrefs: Record<string, string> = {
  'cat-1': '/writing',
  'cat-2': '/web-digital',
  'cat-3': '/communications'
};
const site = 'https://snwhip.com';
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [{
    '@type': 'WebSite',
    '@id': `${site}/#website`,
    name: 'Scott N. Whipple',
    url: `${site}/`
  }, {
    '@type': 'Person',
    '@id': `${site}/#person`,
    name: 'Scott N. Whipple',
    jobTitle: 'Content & Communications',
    url: `${site}/`
  }, {
    '@type': 'WebPage',
    '@id': `${site}/#webpage`,
    url: `${site}/`,
    name: 'Scott N. Whipple — Content & Communications',
    isPartOf: {
      '@id': `${site}/#website`
    },
    about: {
      '@id': `${site}/#person`
    },
    datePublished: '2026-08-13',
    dateModified: '2026-08-13'
  }]
};
export default function HomePage() {
  return <>
      <Helmet>
        <title>Scott N. Whipple — Content &amp; Communications</title>
        <meta name="description" content="Portfolio of Scott N. Whipple — Content & Communications. 15+ years translating complexity into clarity for the web." />
        <link rel="canonical" href={site} />
        <meta property="og:title" content="Scott N. Whipple — Content & Communications" />
        <meta property="og:description" content="15+ years translating complexity into clarity — for the web, for people." />
        <meta property="og:url" content={site} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden max-w-5xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-16 md:pb-20">

          {/* Approved hero artwork — background layer, behind all text */}
          {/* hero-artwork: desktop 45% opacity, mobile 30% opacity */}
          <style>{`
            .hero-artwork { opacity: 0.30; }
            @media (min-width: 640px) { .hero-artwork { opacity: 0.45; } }
          `}</style>
          <img src="/airo-assets/images/uploads/hero-qkr67se7m1-1786994387999-file-tgkhawg0rf" alt="" aria-hidden="true" className="hero-artwork pointer-events-none absolute" style={{
          top: '-6%',
          right: '-2%',
          width: '58%',
          minWidth: '300px',
          maxWidth: '640px',
          height: 'auto',
          objectFit: 'contain',
          objectPosition: 'top right',
          zIndex: 0
        }} />
          {/* Text content — explicit stacking above artwork */}
          <div className="relative" style={{
          zIndex: 1
        }}>
            <motion.div initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            ease: 'easeOut' as const
          }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none text-foreground" style={{
              fontFamily: '"DM Sans", var(--font-sans)',
              letterSpacing: '-0.03em'
            }}>
                {home.hero.name}
              </h1>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.15,
            ease: 'easeOut' as const
          }} className="mt-5 md:mt-6">
              <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-muted-foreground" style={{
              fontFamily: 'var(--font-sans)'
            }}>
                {home.hero.title}
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.25,
            ease: 'easeOut' as const
          }} className="mt-3 md:mt-4">
              <p className="text-sm text-foreground/50 italic" style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300
            }}>
                {home.hero.tagline}
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.38,
            ease: 'easeOut' as const
          }} className="mt-6 md:mt-8 max-w-xl">
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed" style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300
            }}>
                {home.hero.statement}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Thin Rule ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <hr className="border-t border-border" />
        </div>

        {/* ── Work Categories ── */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-border">
            {home.categories.map((cat, i) => <motion.div key={cat.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: i * 0.12,
            ease: 'easeOut' as const
          }} className="group px-0 md:px-8 first:pl-0 last:pr-0 py-8 md:py-0 border-b border-border md:border-b-0 last:border-b-0">
                <Link to={categoryHrefs[cat.id] ?? '/'} className="block">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-200" style={{
                fontFamily: 'var(--font-heading)'
              }}>
                    <span>{cat.label}</span>
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed" style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300
              }}>
                    <span>{cat.description}</span>
                  </p>
                  <span className="inline-flex items-center mt-5 text-xs font-medium tracking-widest uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{
                fontFamily: 'var(--font-sans)'
              }} aria-hidden="true">
                    View work <span className="ml-2">→</span>
                  </span>
                </Link>
              </motion.div>)}
          </div>
        </section>

        {/* ── Thin Rule ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <hr className="border-t border-border" />
        </div>

        {/* ── Skills Strip ── */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-12">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          ease: 'easeOut' as const
        }}>
            <p className="text-xs text-muted-foreground leading-relaxed" style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            letterSpacing: '0.04em'
          }}>
              {home.skills.map((skill, i) => <span key={skill.id}>
                  <span>{skill.name}</span>
                  {i < home.skills.length - 1 && <span className="mx-2 opacity-40">·</span>}
                </span>)}
            </p>
          </motion.div>
        </section>
      </main>
    </>;
}
