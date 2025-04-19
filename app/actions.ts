"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const handleSubmission = async (formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    // Handle unauthenticated state
    redirect("/api/auth/register"); // or throw new Error("Not authenticated");
  }

  const title = formData.get("title");
  const content = formData.get("content");
  const imageUrl = formData.get("url");

  // Optionally validate inputs here

  await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: imageUrl as string,
      authorId: user.id,
      authorName: user.given_name ?? user.email ?? "Anonymous",
      authorImage: user.picture ?? "",
      createdAt: new Date(),
    },
  });

  revalidatePath("/");
  redirect("/dashboard");
};
