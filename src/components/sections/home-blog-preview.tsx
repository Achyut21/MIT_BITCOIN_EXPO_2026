import { getAllPosts } from "@/lib/posts";
import { BlogPreviewClient } from "./blog-preview";

export function HomeBlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  return <BlogPreviewClient posts={posts} />;
}
