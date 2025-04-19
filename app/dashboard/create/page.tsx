import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { handleSubmission } from "@/app/actions";
import {SubmitButton} from "@/components/general/SubmitButton";

function Create() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Share your thoughts with the world</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={handleSubmission}>
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <Input name="title" type="text" placeholder="Enter title..." required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <Textarea name="content" placeholder="Write your post..." rows={5} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Image Url
              </label>
              <Input name="url" type="url" placeholder="Enter image url..." required />
            </div>
            <SubmitButton type="submit" className="w-full">
              Publish
            </SubmitButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Create;
