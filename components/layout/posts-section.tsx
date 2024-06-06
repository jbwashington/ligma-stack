import { Post } from "contentlayer/generated";
import { PostCard } from "../post-card";
import { SectionWrapper } from "../typography";

export const PostsSection = async ({posts}:{posts: Post[]}) => {

    return (
      <SectionWrapper>
        <h1 className="mb-8 text-2xl">Blog</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </SectionWrapper>
    );

}
