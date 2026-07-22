import Link from "next/link";
import Image from "next/image";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, CATEGORIES } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/metadata";
import { ButterflyMark } from "@/components/ui/ButterflyMark";
import { DISCLAIMER, SITE } from "@/data/site";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
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
  const post = await getPost(slug);
  if (!post) notFound();
  const category = CATEGORIES[post.category];
  const content = Markdoc.transform(post.node);

  return (
    <article className="max-w-[720px] mx-auto px-5 lg:px-8 pt-20 pb-24">
      <p className="text-[12px] tracking-[0.16em] uppercase font-semibold text-rose-ink mb-3 text-center">
        {category.label} ·{" "}
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
      {post.coverImage ? (
        <div className="rounded-[16px] overflow-hidden shadow-warm mb-10">
          <Image
            src={post.coverImage}
            alt=""
            width={1440}
            height={810}
            sizes="(min-width: 768px) 720px, 92vw"
            className="w-full h-auto object-cover"
          />
        </div>
      ) : null}
      <div className="editorial-intro text-[17px] leading-[1.75] [&_h2]:font-display [&_h2]:text-[26px] [&_h2]:mt-9 [&_h2]:mb-3 [&_h3]:font-display [&_h3]:text-[21px] [&_h3]:mt-7 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:pl-5 [&_li]:list-disc [&_li]:mb-1 [&_ol_li]:list-decimal [&_blockquote]:border-l-2 [&_blockquote]:border-rose [&_blockquote]:pl-5 [&_blockquote]:italic [&_a]:text-orange-ink [&_a]:underline [&_a]:underline-offset-2">
        {Markdoc.renderers.react(content, React)}
      </div>
      <footer className="mt-12 border-t border-border-soft pt-7">
        <div className="flex items-center gap-4">
          <ButterflyMark size={34} color="var(--color-orange)" />
          <div>
            <p
              className="font-display font-[560] text-[18px] text-brown m-0"
              style={{ fontVariationSettings: '"SOFT" 80' }}
            >
              {SITE.clinician}, {SITE.credential}
            </p>
            <p className="text-[13px] text-muted m-0">
              {SITE.credentialLong} · Licensed in Missouri &amp; New Jersey
            </p>
          </div>
        </div>
        <p className="mt-5 text-[12.5px] italic text-muted">{DISCLAIMER}</p>
        <div className="mt-8 bg-tint border border-border-soft rounded-[14px] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[15px] text-brown m-0">
            More on this: <span className="font-semibold">{category.linkLabel}</span>
          </p>
          <Link href={category.link} className="btn btn-brown">
            {post.category === "getting-started" ? "Contact Katie" : "Learn More"}
          </Link>
        </div>
      </footer>
    </article>
  );
}
