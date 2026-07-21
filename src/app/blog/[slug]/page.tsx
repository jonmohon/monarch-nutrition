import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, renderMarkdown } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/metadata";
import { ButterflyMark } from "@/components/ui/ButterflyMark";
import { DISCLAIMER, SITE } from "@/data/site";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    ogType: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="max-w-[720px] mx-auto px-5 lg:px-8 pt-20 pb-24">
      <p className="text-[12px] tracking-[0.16em] uppercase font-semibold text-rose-ink mb-3 text-center">
        {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1
        className="font-[560] text-center leading-[1.12] mb-10"
        style={{ fontSize: "clamp(2rem, 1.4rem + 2.2vw, 3rem)" }}
      >
        {post.title}
      </h1>
      <div
        className="prose-monarch editorial-intro text-[17px] leading-[1.75] [&_h2]:font-display [&_h2]:text-[26px] [&_h2]:mt-9 [&_h2]:mb-3 [&_h3]:font-display [&_h3]:text-[21px] [&_h3]:mt-7 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:pl-5 [&_li]:list-disc [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
      />
      <footer className="mt-12 border-t border-border-soft pt-7">
        <div className="flex items-center gap-4">
          <ButterflyMark size={34} color="var(--color-orange)" />
          <div>
            <p className="font-display font-[560] text-[18px] text-brown m-0" style={{ fontVariationSettings: '"SOFT" 80' }}>
              {SITE.clinician}, {SITE.credential}
            </p>
            <p className="text-[13px] text-muted m-0">
              {SITE.credentialLong} · Licensed in Missouri &amp; New Jersey
            </p>
          </div>
        </div>
        <p className="mt-5 text-[12.5px] italic text-muted">{DISCLAIMER}</p>
        <div className="mt-7 text-center">
          <Link href="/contact/" className="btn btn-brown">
            Work With Katie
          </Link>
        </div>
      </footer>
    </article>
  );
}
