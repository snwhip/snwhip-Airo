import { Link } from "react-router";
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { getSample } from '@/data/writing-samples';
const sample = getSample('leaders-and-effective-leadership')!;
const site = 'https://snwhip.com';
const url = `${site}/writing/leaders-and-effective-leadership`;
const title = `${sample.title} — Scott N. Whipple`;
const description = sample.description;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${url}#article`,
  name: sample.title,
  url,
  description,
  author: {
    '@id': `${site}/#person`
  },
  isPartOf: {
    '@id': `${site}/#website`
  },
  dateCreated: sample.year
};
export default function LeadersAndEffectiveLeadershipPage() {
  return <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── Page Header ── */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-12">
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          ease: 'easeOut' as const
        }}>
            
            <Link to="/writing" className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150 mb-10" style={{
            fontFamily: 'var(--font-sans)'
          }}>
              
              <ArrowLeft size={13} />
              <span>Writing</span>
            </Link>
          </motion.div>

          <motion.p initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.05,
          ease: 'easeOut' as const
        }} className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4" style={{
          fontFamily: 'var(--font-sans)'
        }}>
            
            <span>{sample.type}</span>
            <span className="mx-2 opacity-40">·</span>
            <span>{sample.year}</span>
          </motion.p>

          <motion.h1 initial={{
          opacity: 0,
          y: 16
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1,
          ease: 'easeOut' as const
        }} className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground mb-8" style={{
          fontFamily: 'var(--font-heading)'
        }}>
            
            <span>{sample.title}</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.15,
          ease: 'easeOut' as const
        }} className="text-base text-foreground/65 leading-relaxed max-w-2xl italic" style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 300
        }}>
            
            <span>{sample.description}</span>
          </motion.p>
        </section>

        {/* ── Rule ── */}
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <hr className="border-t border-border" />
        </div>

        {/* ── Archival note ── */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.18,
        ease: 'easeOut' as const
      }} className="max-w-3xl mx-auto px-6 md:px-10 pt-10 pb-0">
          
          <div className="border-l-2 border-border pl-5 py-1">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-1" style={{
            fontFamily: 'var(--font-sans)'
          }}>
              
              Archival writing sample
            </p>
            <p className="text-sm text-foreground/55 leading-relaxed" style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300
          }}>
              
              This piece is presented substantially as originally written, with minor corrections to
              obvious typographical and transcription errors. Language and perspective have otherwise
              been preserved as representative of the period.
            </p>
          </div>
        </motion.div>

        {/* ── Body ── */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.22,
        ease: 'easeOut' as const
      }} className="max-w-3xl mx-auto px-6 md:px-10 pt-10 pb-16 md:pb-24">
          
          {sample.body.map(p => <p key={p.id} className="text-base text-foreground/80 leading-[1.85] mb-6 last:mb-0" style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 300
        }}>
            
              {p.text}
            </p>)}
        </motion.div>

        {/* ── Footer nav ── */}
        <div className="max-w-3xl mx-auto px-6 md:px-10 pb-16">
          <hr className="border-t border-border mb-8" />
          <Link to="/writing" className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150" style={{
          fontFamily: 'var(--font-sans)'
        }}>
            
            <ArrowLeft size={13} />
            <span>Back to Writing</span>
          </Link>
        </div>
      </main>
    </>;
}
