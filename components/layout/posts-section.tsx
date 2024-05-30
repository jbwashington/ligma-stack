import { Post } from "contentlayer/generated";
import { PostCard } from "../post-card";

export const PostsSection = async ({posts}:{posts: Post[]}) => {

    return (
      <div className="mx-auto max-w-xl py-8">
        <h1 className="mb-8 text-2xl">
        Blog
        </h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    );

}
