import BlogPostCard from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";

async function getPosts() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
      authorName: true,
      authorImage: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight">Latest Posts</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

export async function BlogPosts() {
  const data = await getPosts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {data.map((item) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}
