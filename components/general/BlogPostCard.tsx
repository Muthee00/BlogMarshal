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
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
              priority
            />
          </div>
        </Link>

        <div className="flex-1 w-full">
          <h2 className="text-2xl font-bold text-blue-300 mb-2">
            {data.title}
          </h2>
          <p className="text-gray-300 mb-3 line-clamp-3">{data.content}</p>
          <div className="flex items-center gap-3 mt-4 justify-end">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
              <Image
                src={data.authorImage}
                alt={data.authorName}
                fill
                className="object-cover"
              />
            </div>
           
            <div className="text-sm text-slate-200 flex flex-col items-start">
              <p className="font-medium">{data.authorName}</p>
              {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(new Date(data.createdAt))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
