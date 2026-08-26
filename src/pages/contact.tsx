import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { contact } from 'virtual:content';

const site = 'https://snwhip.com';
const url = `${site}/contact`;
const pageTitle = 'Contact — Scott N. Whipple';
const description =
  'Get in touch with Scott N. Whipple to discuss content, communications, or digital work.';

// href managed in code, not content
const linkedinHref = 'https://www.linkedin.com/in/scott-whipple-n';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${url}#webpage`,
  name: pageTitle,
  url,
  description,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#person` },
};

export default function ContactPage() {
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
            {contact.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' as const }}
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {contact.hero.heading}
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
          className="max-w-3xl mx-auto px-6 md:px-10 pt-10 pb-24 md:pb-32"
        >
          <p
            className="text-base text-foreground/80 leading-[1.85] mb-12"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          >
            {contact.intro}
          </p>

          <div className="flex flex-col gap-4">
            <p
              className="text-base text-foreground leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
            >
              {contact.details.name}
            </p>
            <p
              className="text-base text-foreground/70 leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              {contact.details.location}
            </p>
            <a
              href={`mailto:${contact.details.email}`}
              className="text-base text-accent hover:text-foreground transition-colors duration-200"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              {contact.details.email}
            </a>
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-accent hover:text-foreground transition-colors duration-200"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              {contact.details.linkedinLabel}
            </a>
          </div>
        </motion.div>
      </main>
    </>
  );
}
