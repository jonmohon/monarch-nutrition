import fs from "node:fs";
import path from "node:path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: string; // raw markdown-ish body
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

/** Minimal frontmatter + markdown reader — Keystatic writes this format too. */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((file) => parsePost(file))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | null {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(BLOG_DIR, file))) return null;
  return parsePost(file);
}

function parsePost(file: string): BlogPost | null {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return null;
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  if (!meta.title || !meta.date) return null;
  return {
    slug: file.replace(/\.md$/, ""),
    title: meta.title,
    date: meta.date,
    description: meta.description ?? "",
    body: match[2].trim(),
  };
}

/** Tiny markdown renderer: headings, paragraphs, lists. Enough for posts. */
export function renderMarkdown(md: string): string {
  const esc = (s: string) =>
    s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const blocks = md.split(/\n\s*\n/);
  return blocks
    .map((block) => {
      const b = block.trim();
      if (!b) return "";
      if (b.startsWith("## ")) return `<h2>${esc(b.slice(3))}</h2>`;
      if (b.startsWith("### ")) return `<h3>${esc(b.slice(4))}</h3>`;
      if (b.split("\n").every((l) => l.startsWith("- "))) {
        const items = b
          .split("\n")
          .map((l) => `<li>${esc(l.slice(2))}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }
      return `<p>${esc(b).replaceAll("\n", "<br>")}</p>`;
    })
    .join("\n");
}
