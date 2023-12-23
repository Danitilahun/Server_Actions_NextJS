"use server";
import { revalidatePath } from "next/cache";
import ProductModel from "./product-model";
import dbConnect from "./db-connect";
import { Deleteschema, schema } from "./validation";

export async function createProduct(prevState: any, formData: FormData) {
  const parse = schema.safeParse({
    name: formData.get("name"),
    image: formData.get("image"),
    price: Number(formData.get("price")),
    rating: Math.ceil(Math.random() * 5),
  });

  if (!parse.success) {
    console.log(parse.error);
    return { message: "Form data is not valid" };
  }

  const data = parse.data;
  try {
    await dbConnect();
    const product = new ProductModel(data);
    await product.save();
    revalidatePath("/");
    return { message: `Created product ${data.name}` };
  } catch (e) {
    return { message: "Failed to create product" };
  }
}

export async function deleteProduct(formData: FormData) {
  const data = Deleteschema.parse({
    _id: formData.get("_id"),
    name: formData.get("name"),
  });
}
