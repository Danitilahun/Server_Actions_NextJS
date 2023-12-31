import { z } from "zod";

export const schema = z.object({
  name: z.string().min(3),
  image: z.string().min(1),
  price: z.number().min(1),
  rating: z.number().min(1).max(5),
});

export const Deleteschema = z.object({
  _id: z.string().min(1),
  name: z.string().min(1),
});
