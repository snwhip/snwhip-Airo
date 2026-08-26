import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { communications } from 'virtual:content';

const site = 'https://snwhip.com';
const url = `${site}/communications`;
const pageTitle = 'Selected Work — Scott N. Whipple';
const description =
  'Visual communications work by Scott N. Whipple spanning brand and campaign communications, presentations, marketing collateral, digital content, photography and visual storytelling.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${url}#webpage`,
  name: pageTitle,
  url,
  description,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#person` },
};

type CommunicationsHero = { heading: string };
type CommunicationsBodyParagraph = { id: string; text: string };
type CommunicationsCta = { label: string; href: string };
type CommunicationsContent = {
  hero: CommunicationsHero;
  body: CommunicationsBodyParagraph[];
  cta: CommunicationsCta;
};

const page = communications as unknown as CommunicationsContent;

export default function CommunicationsPage() {
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
            Visual Communications
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

        {/* ── Body + CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' as const }}
          className="max-w-3xl mx-auto px-6 md:px-10 pt-10 pb-24 md:pb-32"
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

          <div className="pt-4">
            <a
              href={page.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground border border-accent hover:border-foreground px-5 py-3 transition-colors duration-150"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span>{page.cta.label}</span>
              <ArrowUpRight size={15} strokeWidth={1.75} />
            </a>
          </div>
        </motion.div>
      </main>
    </>
  );
}
