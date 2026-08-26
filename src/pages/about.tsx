import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { about } from 'virtual:content';

const site = 'https://snwhip.com';
const url = `${site}/about`;
const pageTitle = 'About — Scott N. Whipple';
const description =
  'Scott N. Whipple is a communications professional with experience in healthcare, pharmaceuticals, corporate communications, and independent consulting.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${url}#webpage`,
  name: pageTitle,
  url,
  description,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#person` },
};

type AboutHero = { heading: string };
type AboutBodyParagraph = { id: string; text: string };
type AboutContent = {
  hero: AboutHero;
  body: AboutBodyParagraph[];
  closing: string;
};

const page = about as unknown as AboutContent;

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── Page Header ── */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' as const }}
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {page.hero.heading}
          </motion.h1>
        </section>

        {/* ── Rule ── */}
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <hr className="border-t border-border" />
        </div>

        {/* ── Body ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' as const }}
          className="max-w-3xl mx-auto px-6 md:px-10 pt-10 pb-0"
        >
          {page.body.map((p) => (
            <p
              key={p.id}
              className="text-base text-foreground/80 leading-[1.85] mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              {p.text}
            </p>
          ))}
        </motion.div>

        {/* ── Closing statement ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' as const }}
          className="max-w-3xl mx-auto px-6 md:px-10 pt-6 pb-24 md:pb-32"
        >
          <hr className="border-t border-border mb-8" />
          <p
            className="text-lg md:text-xl font-medium text-foreground leading-relaxed"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {page.closing}
          </p>
        </motion.div>
      </main>
    </>
  );
}
