import { useFormStatus } from "react-dom";

export default function DeleteForm({
  _id,
  name,
}: {
  _id: string;
  name: string;
}) {
  const { pending } = useFormStatus();
}
