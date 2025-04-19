import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// Fix: define your expected props structure properly
type PostPageProps = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id,
    },
  });

  if (!data) {
    notFound();
  }

  return data;
}

export default async function PostPage({ params }: PostPageProps) {
  const data = await getData(params.id);

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <Link
        className={`${buttonVariants({
          variant: "secondary",
        })} mb-6 inline-block`}
        href="/"
      >
        ← Back to posts
      </Link>

      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-xl p-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {data.title}
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <img
            src={data.authorImage}
            alt={data.authorName}
            className="w-10 h-10 rounded-full border border-blue-400"
          />
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {data.authorName}
            </p>
            <p className="text-xs text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(data.createdAt))}
            </p>
          </div>
        </div>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden border-2 border-blue-500 shadow-md mb-6">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <Card>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {data.content}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
