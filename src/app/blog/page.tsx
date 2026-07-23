import Image from "next/image";
import Link from "next/link";
import { getAllPosts, CATEGORIES } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/metadata";
import { ButterflyMark } from "@/components/ui/ButterflyMark";
import { SITE } from "@/data/site";

export const metadata = generatePageMetadata({
  title: "Blog · Practical Nutrition, Plainly Written",
  description: `Notes on real-world nutrition from ${SITE.clinician}, ${SITE.credentialLong} — written for patients, parents, and referring clinicians.`,
  path: "/blog/",
});

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <section className="max-w-[900px] mx-auto px-5 lg:px-10 pt-20 pb-24">
      <p className="caps text-center mb-3.5">The Blog</p>
      <h1
        className="font-[560] text-center mb-3"
        style={{ fontSize: "clamp(2rem, 1.4rem + 2.2vw, 3.1rem)" }}
      >
        Practical nutrition, <span className="accent-word">plainly written.</span>
      </h1>
      <p className="text-center max-w-[52ch] mx-auto mb-14">
        Notes from Katie for patients, parents, and referring clinicians — no fads, no filler.
      </p>

      {posts.length === 0 ? (
        <div>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              ["01", "Weight Management & Bariatric Nutrition", "Before and after surgery, and the long unglamorous middle.", "/images/blog-weight.webp", "A plate of seared salmon with roasted vegetables and lemon"],
              ["02", "Feeding Kids & Teens", "Picky plates, growth questions, and calmer mealtimes.", "/images/blog-kids.webp", "A colorful bento lunchbox being packed, a child's hand reaching for a strawberry"],
              ["03", "Insurance & Getting Started", "How coverage, referrals, and first visits actually work.", "/images/blog-start.webp", "A tidy desk with blank forms, a fountain pen, and a cup of coffee"],
            ].map(([n, t, d, img, alt]) => (
              <div
                key={n}
                className="bg-warm-white border border-border-soft rounded-[16px] overflow-hidden text-left"
              >
                <Image
                  src={img}
                  alt={alt}
                  width={600}
                  height={400}
                  sizes="(min-width: 640px) 300px, 90vw"
                  unoptimized
                  className="w-full h-[150px] object-cover"
                />
                <div className="p-6">
                  <div className="folio-num mb-4">{n}</div>
                  <p className="font-display font-[560] text-[19px] text-brown leading-snug mb-1.5" style={{ fontVariationSettings: '"SOFT" 80' }}>
                    {t}
                  </p>
                  <p className="text-[14px] text-muted">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-warm-white border border-border-soft rounded-[18px] px-8 py-10 text-center">
            <ButterflyMark size={40} color="var(--color-olive)" className="mx-auto mb-4 opacity-70" />
            <p className="font-display font-[560] text-[20px] text-brown mb-2" style={{ fontVariationSettings: '"SOFT" 80' }}>
              First posts arrive with launch — these are the shelves they&rsquo;ll fill.
            </p>
            <p className="text-[15px] max-w-[46ch] mx-auto">
              Katie publishes here herself — the blog is wired to a lightweight editor, no code
              required.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group bg-warm-white border border-border-soft rounded-[16px] overflow-hidden no-underline shadow-warm-sm transition-all hover:-translate-y-1 hover:shadow-warm grid sm:grid-cols-[240px_1fr]"
            >
              <Image
                src={post.coverImage ?? CATEGORIES[post.category].image}
                alt=""
                width={480}
                height={360}
                sizes="240px"
                unoptimized
                className="w-full h-[160px] sm:h-full object-cover"
              />
              <div className="px-8 py-7">
                <p className="text-[12px] tracking-[0.16em] uppercase font-semibold text-rose-ink mb-2">
                  {CATEGORIES[post.category].label} ·{" "}
                  {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="font-[560] text-[24px] mb-1.5">{post.title}</h2>
                <p className="text-[15.5px]">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
