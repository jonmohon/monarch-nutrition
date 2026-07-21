import { SITE, FAQ } from "@/data/site";

/**
 * JSON-LD builders. Only evidence-confirmed facts (evidence-matrix.md).
 * No NPI, no carrier names, no phone until Katie confirms them.
 */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/images/og.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: "US",
    },
    areaServed: SITE.statesLicensed.map((s) => ({ "@type": "State", name: s })),
    founder: { "@id": `${SITE.url}/#katie` },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#katie`,
    name: `${SITE.clinician}, ${SITE.credential}`,
    jobTitle: SITE.credentialLong,
    worksFor: { "@id": `${SITE.url}/#business` },
    url: `${SITE.url}/about/`,
  };
}

/** FAQPage schema — confirmed-answerable questions only. */
export function faqSchema() {
  const items = FAQ.filter((f) => f.inSchema);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
