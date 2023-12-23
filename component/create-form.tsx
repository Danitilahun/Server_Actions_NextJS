"use client";

import { createProduct } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function CreateForm() {
  const [state, formAction] = useFormState(createProduct, {
    message: "",
  });

  const { pending } = useFormStatus();
  return <div></div>;
}
