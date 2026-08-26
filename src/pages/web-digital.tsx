import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { web_digital } from 'virtual:content';

const site = 'https://snwhip.com';
const url = `${site}/web-digital`;
const title = 'Web & Digital Content — Scott N. Whipple';
const description =
  'Web content, UX writing, accessibility, and digital communications work by Scott N. Whipple.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  description,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#person` },
};

type WebDigitalHero = { eyebrow: string; heading: string };
type WebDigitalIntroduction = { heading: string; body: { id: string; text: string }[] };
type WebDigitalItem = {
  id: string;
  title: string;
  project: string;
  platform: string;
  description: string;
  roles: string[];
  url: string;
};
type WebDigitalSection = {
  id: string;
  label: string;
  description: string;
  items: WebDigitalItem[];
};

const hero = web_digital.hero as unknown as WebDigitalHero;
const introduction = (web_digital as unknown as { introduction: WebDigitalIntroduction }).introduction;
const sections = web_digital.sections as unknown as WebDigitalSection[];

export default function WebDigitalPage() {
  return (
    <>
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span>{hero.eyebrow}</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' as const }}
            className="text-5xl md:text-7xl font-bold leading-none tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span>{hero.heading}</span>
          </motion.h1>
        </section>

        {/* ── Rule ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <hr className="border-t border-border" />
        </div>

        {/* ── Introduction ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-16"
        >
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground mb-5"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span>{introduction.heading}</span>
          </h2>
          {introduction.body.map((p) => (
            <p
              key={p.id}
              className="text-base text-foreground/70 leading-relaxed max-w-2xl mb-4 last:mb-0"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              <span>{p.text}</span>
            </p>
          ))}
        </motion.div>

        {/* ── Rule ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <hr className="border-t border-border" />
        </div>

        {/* ── Sections ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
          {sections.map((section, si) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: si * 0.08, ease: 'easeOut' as const }}
              className={si > 0 ? 'mt-16 md:mt-20 pt-16 md:pt-20 border-t border-border' : ''}
            >
              <div className="mb-8">
                <h2
                  className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <span>{section.label}</span>
                </h2>
                <p
                  className="mt-2 text-sm text-foreground/60 leading-relaxed max-w-xl"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                >
                  <span>{section.description}</span>
                </p>
              </div>

              {section.items.length === 0 ? (
                <div className="py-8 border-t border-border">
                  <p
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                  >
                    Available on request.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col">
                  {section.items.map((item, ii) => (
                    <article
                      key={item.id}
                      className={`py-8 border-t border-border ${ii === section.items.length - 1 ? 'border-b' : ''}`}
                    >
                      {/* Project + platform eyebrow */}
                      <p
                        className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <span>{item.project}</span>
                        <span className="mx-2 opacity-40">·</span>
                        <span>{item.platform}</span>
                      </p>

                      {/* Title */}
                      <h3
                        className="text-xl md:text-2xl font-bold text-foreground leading-snug"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        <span>{item.title}</span>
                      </h3>

                      {/* Description — split on double newline for paragraphs */}
                      <div className="mt-4 space-y-3 max-w-2xl">
                        {item.description.split('\n\n').map((para, pi) => (
                          <p
                            key={pi}
                            className="text-sm text-foreground/65 leading-relaxed"
                            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Role tags */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {item.roles.map((role) => (
                          <span
                            key={role}
                            className="text-xs px-2.5 py-1 border border-border text-muted-foreground"
                            style={{ fontFamily: 'var(--font-sans)' }}
                          >
                            {role}
                          </span>
                        ))}
                      </div>

                      {/* External link */}
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-5 text-xs font-medium px-4 py-1.5 border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors duration-150"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          Visit Site
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              )}
            </motion.section>
          ))}
        </div>

      </main>
    </>
  );
}
