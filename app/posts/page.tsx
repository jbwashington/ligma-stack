import { allPosts as posts } from "contentlayer/generated";
import { PostsSection } from "@/components/layout/posts-section";
import { H1 } from "@/components/typography";

export default function PostsPage() {
  return (
    <div>
      <H1 className="container">Articles</H1>
      <PostsSection posts={posts} />
    </div>
  );
}
