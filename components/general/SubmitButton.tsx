"use client";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { ButtonHTMLAttributes } from "react";

export function SubmitButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();

  return (
    <Button {...props} disabled={pending || props.disabled}>
      {pending ? "Submitting..." : props.children}
    </Button>
  );
}
