"use client";

import { createProduct } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function CreateForm() {
  const [state, formAction] = useFormState(createProduct, {
    message: "",
  });
  return <div></div>;
}
