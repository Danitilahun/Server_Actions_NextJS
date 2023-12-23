import CreateForm from "@/component/create-form";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <div className="flex justify-between items-center">
        <h1 className="font-bold py-10 text-2xl">Admin Products</h1>
        <Toaster />
        <CreateForm />
      </div>
    </div>
  );
}
