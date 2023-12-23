"use client";

import { createProduct } from "@/lib/actions";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function CreateForm() {
  const [state, formAction] = useFormState(createProduct, {
    message: "",
  });

  const { pending } = useFormStatus();
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message.indexOf("Created product") === 0) {
      (document.getElementById("my_modal_3") as any)!.close();
      ref.current?.reset();
      toast(state.message);
    } else if (state.message) {
      toast(state.message);
    }
  }, [state.message]);
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() =>
          (document.getElementById("my_modal_3")! as any).showModal()
        }
      >
        Create Product
      </button>
    </div>
  );
}
