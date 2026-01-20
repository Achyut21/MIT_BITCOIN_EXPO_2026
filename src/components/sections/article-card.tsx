"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardItemProps {
  href: string;
  category: string;
  source: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function ArticleCardItem({ href, category, source, title, description, icon, index }: ArticleCardItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <Card className="bg-surface border-border hover:border-accent/50 transition-all duration-300 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                {icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">{category}</span>
                  <span className="text-muted/40">•</span>
                  <span className="text-xs text-muted">{source}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {title}
                </h3>
                
                <p className="mt-2 text-sm text-muted line-clamp-2">
                  {description}
                </p>
              </div>

              {/* Arrow */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-border/50 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export function ArticleCard() {
  const articles = [
    {
      href: "https://medium.com/mitbitcoinclub/mit-bitcoin-expo-2026-freedom-for-all-1ea60d941bfc",
      category: "Announcement",
      source: "Medium",
      title: "MIT Bitcoin Expo 2026: Freedom for All",
      description: "Learn more about the theme, vision, and what to expect at MIT Bitcoin Expo 2026.",
      icon: (
        <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
    },
    {
      href: "https://mitbtcexpo.org/",
      category: "Previous Event",
      source: "MIT Bitcoin Expo",
      title: "MIT Bitcoin Expo 2025",
      description: "Explore last year's event — speakers, panels, and highlights from MIT Bitcoin Expo 2025.",
      icon: (
        <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto space-y-4">
        {articles.map((article, index) => (
          <ArticleCardItem
            key={article.href}
            {...article}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
