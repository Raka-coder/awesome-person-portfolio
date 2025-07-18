import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Email tidak valid" }),
  message: z.string().min(5, { message: "Pesan minimal 5 karakter" }),
});

export type ContactFormType = z.infer<typeof contactSchema>;
