import { useState } from 'react';
import { Link } from "react-router";
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { writing } from 'virtual:content';
import { getSample, type WritingSample } from '@/data/writing-samples';
const site = 'https://snwhip.com';
const url = `${site}/writing`;
const title = 'Writing — Scott N. Whipple';
const description = 'Selected writing samples across editorial, web content, UX, and communications work by Scott N. Whipple.';
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  description,
  isPartOf: {
    '@id': `${site}/#website`
  },
  about: {
    '@id': `${site}/#person`
  }
};
type WritingHero = {
  eyebrow: string;
  heading: string;
  intro: string;
  confidentialityNote: string;
};
type WritingIntroduction = {
  heading: string;
  body: {
    id: string;
    text: string;
  }[];
};
type WritingItem = {
  id: string;
  title: string;
  type: string;
  year: string;
  description: string;
  tags: string[];
  sampleKey: string;
};
type WritingSection = {
  id: string;
  label: string;
  description: string;
  items: WritingItem[];
};
const hero = writing.hero as unknown as WritingHero;
const introduction = (writing as unknown as {
  introduction: WritingIntroduction;
}).introduction;
const sections = writing.sections as unknown as WritingSection[];

// Keys that have a dedicated page route instead of the slide-in panel
const samplePageRoutes: Record<string, string> = {
  'farscape-intelligent-fiction': '/writing/farscape-intelligent-fiction',
  'leaders-and-effective-leadership': '/writing/leaders-and-effective-leadership',
  'apples-new-gravity': '/writing/apples-new-gravity'
};
export default function WritingPage() {
  const [activeSample, setActiveSample] = useState<WritingSample | null>(null);
  function openSample(key: string) {
    const sample = getSample(key);
    if (sample) {
      setActiveSample(sample);
      document.body.style.overflow = 'hidden';
    }
  }
  function closeSample() {
    setActiveSample(null);
    document.body.style.overflow = '';
  }
  return <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── Page Hero ── */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-14 md:pb-20">
          <motion.p initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          ease: 'easeOut' as const
        }} className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4" style={{
          fontFamily: 'var(--font-sans)'
        }}>
            <span>{hero.eyebrow}</span>
          </motion.p>

          <motion.h1 initial={{
          opacity: 0,
          y: 16
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.05,
          ease: 'easeOut' as const
        }} className="text-5xl md:text-7xl font-bold leading-none tracking-tight text-foreground" style={{
          fontFamily: 'var(--font-heading)'
        }}>
            <span>{hero.heading}</span>
          </motion.h1>
        </section>

        {/* ── Thin Rule ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <hr className="border-t border-border" />
        </div>

        {/* ── Introduction ── */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        ease: 'easeOut' as const
      }} className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5" style={{
          fontFamily: 'var(--font-heading)'
        }}>
            <span>{introduction.heading}</span>
          </h2>
          {introduction.body.map(p => <p key={p.id} className="text-base text-foreground/70 leading-relaxed max-w-2xl mb-4 last:mb-0" style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 300
        }}>
              <span>{p.text}</span>
            </p>)}
        </motion.div>

        {/* ── Thin Rule ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <hr className="border-t border-border" />
        </div>

        {/* ── Writing Sections ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
          {sections.map((section, si) => <motion.section key={section.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: si * 0.08,
          ease: 'easeOut' as const
        }} className={si > 0 ? 'mt-16 md:mt-20 pt-16 md:pt-20 border-t border-border' : ''}>
              {/* Section heading */}
              <div className="mb-8">
                <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground" style={{
              fontFamily: 'var(--font-sans)'
            }}>
                  <span>{section.label}</span>
                </h2>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed max-w-xl" style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300
            }}>
                  <span>{section.description}</span>
                </p>
              </div>

              {/* Items or empty state */}
              {section.items.length === 0 ? <div className="py-8 border-t border-border">
                  <p className="text-sm text-muted-foreground" style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300
            }}>
                    Available on request.
                  </p>
                </div> : <div className="flex flex-col">
                  {section.items.map((item, ii) => <article key={item.id} className={`group py-8 border-t border-border ${ii === section.items.length - 1 ? 'border-b' : ''}`}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-10">
                        <div className="flex-1 min-w-0">
                          {/* Type + year eyebrow */}
                          <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2" style={{
                    fontFamily: 'var(--font-sans)'
                  }}>
                            <span>{item.type}</span>
                            <span className="mx-2 opacity-40">·</span>
                            <span>{item.year}</span>
                          </p>

                          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug" style={{
                    fontFamily: 'var(--font-heading)'
                  }}>
                            <span>{item.title}</span>
                          </h3>

                          <p className="mt-3 text-sm text-foreground/65 leading-relaxed max-w-2xl" style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 300
                  }}>
                            <span>{item.description}</span>
                          </p>

                          <div className="flex flex-wrap items-center gap-3 mt-5">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map(tag => <span key={tag} className="text-xs px-2.5 py-1 border border-border text-muted-foreground" style={{
                        fontFamily: 'var(--font-sans)'
                      }}>
                                  {tag}
                                </span>)}
                            </div>

                            {/* Read Sample button or link */}
                            {item.sampleKey && (samplePageRoutes[item.sampleKey] ? <Link to={samplePageRoutes[item.sampleKey]} className="text-xs font-medium px-4 py-1.5 border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors duration-150" style={{
                      fontFamily: 'var(--font-sans)'
                    }}>
                                  Read Sample
                                </Link> : <button onClick={() => openSample(item.sampleKey)} className="text-xs font-medium px-4 py-1.5 border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors duration-150" style={{
                      fontFamily: 'var(--font-sans)'
                    }}>
                                  Read Sample
                                </button>)}
                          </div>
                        </div>
                      </div>
                    </article>)}
                </div>}
            </motion.section>)}
        </div>

      </main>

      {/* ── Sample Reader Modal ── */}
      <AnimatePresence>
        {activeSample && <>
            {/* Backdrop */}
            <motion.div key="backdrop" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.2
        }} className="fixed inset-0 bg-black/50 z-40" onClick={closeSample} aria-hidden="true" />

            {/* Panel */}
            <motion.div key="panel" initial={{
          opacity: 0,
          x: '100%'
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: '100%'
        }} transition={{
          duration: 0.35,
          ease: 'easeOut' as const
        }} className="fixed top-0 right-0 h-full w-full max-w-2xl bg-background z-50 overflow-y-auto shadow-2xl" role="dialog" aria-modal="true" aria-label={activeSample.title}>
              {/* Panel header */}
              <div className="sticky top-0 bg-background border-b border-border px-8 py-5 flex items-start justify-between gap-6 z-10">
                <div>
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-1" style={{
                fontFamily: 'var(--font-sans)'
              }}>
                    {activeSample.type} · {activeSample.year}
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug" style={{
                fontFamily: 'var(--font-heading)'
              }}>
                    {activeSample.title}
                  </h2>
                </div>
                <button onClick={closeSample} className="mt-1 flex-shrink-0 p-1.5 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close sample">
                  <X size={20} />
                </button>
              </div>

              {/* Body copy */}
              <div className="px-8 py-10">
                {activeSample.body.map(p => <p key={p.id} className="text-base text-foreground/80 leading-[1.85] mb-6 last:mb-0" style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300
            }}>
                    {p.text}
                  </p>)}
              </div>

              {/* Panel footer */}
              <div className="px-8 py-6 border-t border-border">
                <button onClick={closeSample} className="text-xs font-medium px-4 py-2 border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors duration-150" style={{
              fontFamily: 'var(--font-sans)'
            }}>
                  Close
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}
