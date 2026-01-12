import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().max(100, { message: "Nama terlalu panjang" }).optional(),
  email: z
    .string()
    .email({ message: "Email tidak valid" })
    .max(100, { message: "Email terlalu panjang" }),
  message: z
    .string()
    .min(5, { message: "Pesan minimal 5 karakter" })
    .max(5000, { message: "Pesan terlalu panjang" }),
  honeypot: z.string().max(0).optional(), // Must be empty if present
});

export type ContactFormType = z.infer<typeof contactSchema>;
