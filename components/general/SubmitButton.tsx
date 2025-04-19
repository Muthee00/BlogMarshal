"use client";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { ButtonHTMLAttributes } from "react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button {...props} disabled={pending || props.disabled}>
      {pending ? "Submitting..." : props.children}
    </Button>
  );
}
