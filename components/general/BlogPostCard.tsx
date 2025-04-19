import Image from "next/image";
import Link from "next/link";

interface IAppProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const BlogPostCard = ({ data }: IAppProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 p-6 rounded-2xl mb-6 shadow-lg flex flex-col sm:flex-row gap-6 items-center hover:shadow-2xl transition-shadow duration-300 w-full">
        <Link
          href={`/post/${data.id}`}
          aria-label={`Read more about ${data.title}`}
          className="w-full sm:w-1/3"
        >
          <div className="relative h-48 w-full rounded-lg overflow-hidden border-2 border-blue-500 shadow-md">
            <Image
              src={data.imageUrl}
              alt={data.title}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </Link>

        <div className="flex-1 w-full">
          <h2 className="text-2xl font-bold text-blue-300 mb-2">
            {data.title}
          </h2>
          <p className="text-gray-300 mb-3 line-clamp-3">{data.content}</p>
          <div className="flex items-center gap-3 mt-4 justify-end">
            <img
              src={data.authorImage}
              alt={data.authorName}
              className="w-9 h-9 rounded-full border border-blue-400 object-cover"
            />
            <div className="text-sm text-gray-400">
              <p className="font-medium">{data.authorName}</p>
              <p className="text-xs text-gray-500">
                {new Date(data.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
