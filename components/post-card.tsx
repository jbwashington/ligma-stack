
import { Post } from "contentlayer/generated";
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Mdx } from "./mdx-components";

export const PostCard = async (post: Post) => {
  return (
    <div className="mb-8" >
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
};