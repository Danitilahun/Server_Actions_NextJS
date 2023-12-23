"use client";

import { createProduct } from "@/lib/actions";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function CreateForm() {
  const [state, formAction] = useFormState(createProduct, {
    message: "",
  });

  const { pending } = useFormStatus();
  const ref = useRef<HTMLFormElement>(null);
  return <div></div>;
}
