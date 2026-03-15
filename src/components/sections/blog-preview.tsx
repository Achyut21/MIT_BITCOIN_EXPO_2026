"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { type PostMeta } from "@/lib/posts";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function BlogPreviewCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div variants={itemVariants} className="group">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <article className="border-border bg-surface/40 hover:bg-surface/70 hover:border-accent/40 flex h-full flex-col rounded-xl border p-5 transition-all duration-300">
          <div className="text-muted mb-3 flex items-center gap-1.5 text-xs">
            <Calendar className="h-3 w-3 shrink-0" />
            <span>{formattedDate}</span>
          </div>
          <h3 className="text-foreground group-hover:text-accent mb-2 flex-1 text-base leading-snug font-bold transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-muted mb-4 line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
          <div className="text-accent flex items-center gap-1 text-xs font-medium">
            <span>Read more</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function BlogPreviewClient({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-end justify-between"
        >
          <div>
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">From the Blog</h2>
            <div className="bg-accent mt-2 h-1 w-16 rounded-full" />
          </div>
          <Link
            href="/blog"
            className="text-muted hover:text-accent flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
          >
            <span>View all</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <BlogPreviewCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
