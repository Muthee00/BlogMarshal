import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogPostCard from "@/components/general/BlogPostCard";

const getData = async (userId: String) => {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId as string,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};

async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const userId = await getUser();

  const data = await getData(userId?.id as string);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500 bg-clip-text text-transparent drop-shadow">
          Dashboard
        </h1>
        <Link
          href="/dashboard/create"
          className={buttonVariants({
            className:
              "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow transition-colors flex items-center gap-2",
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create New Post
        </Link>
      </div>
      <div className="rounded-lg bg-gray-800 p-8 shadow-lg flex flex-col items-center min-h-[200px] w-full">
        <p className="text-gray-300 text-lg mb-6 text-center">
          Welcome to your dashboard! Here you can manage your posts and create new content.
        </p>
        {data.length > 0 ? (
          data.map((item) => (
            <BlogPostCard key={item.id} data={item} />
          ))
        ) : (
          <p className="text-gray-400 text-center">No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;