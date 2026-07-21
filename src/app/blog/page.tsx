import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/metadata";
import { ButterflyMark } from "@/components/ui/ButterflyMark";
import { SITE } from "@/data/site";

export const metadata = generatePageMetadata({
  title: "Blog · Practical Nutrition, Plainly Written",
  description: `Notes on real-world nutrition from ${SITE.clinician}, ${SITE.credentialLong} — written for patients, parents, and referring clinicians.`,
  path: "/blog/",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

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
        <div className="bg-warm-white border border-border-soft rounded-[18px] px-8 py-14 text-center">
          <ButterflyMark size={44} color="var(--color-olive)" className="mx-auto mb-5 opacity-70" />
          <p className="font-display font-[560] text-[22px] text-brown mb-2" style={{ fontVariationSettings: '"SOFT" 80' }}>
            First posts arrive with launch.
          </p>
          <p className="text-[15.5px] max-w-[46ch] mx-auto">
            Katie publishes here herself — the blog is wired to a lightweight editor, no code
            required.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="bg-warm-white border border-border-soft rounded-[16px] px-8 py-7 no-underline shadow-warm-sm transition-all hover:-translate-y-1 hover:shadow-warm"
            >
              <p className="text-[12px] tracking-[0.16em] uppercase font-semibold text-rose-ink mb-2">
                {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="font-[560] text-[24px] mb-1.5">{post.title}</h2>
              <p className="text-[15.5px]">{post.description}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
