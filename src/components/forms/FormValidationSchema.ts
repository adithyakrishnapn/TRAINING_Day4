import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .regex(
      /^[A-Za-z]+(?: [A-Za-z]+)*$/,
      "Name can contain only letters and single spaces",
    )
    .min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),

  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  interest: z
    .string()
    .regex(
      /^[A-Za-z][A-Za-z0-9.]*(?: [A-Za-z0-9.]+)*$/,
      "Interest must start with a letter and use only single spaces",
    )
    .min(5, "Interest must be at least 5 characters"),

  message: z
    .string()
    .regex(
      /^[A-Za-z][A-Za-z0-9.,!?'"()-]*(?: [A-Za-z0-9.,!?'"()-]+)*$/,
      "Message must start with a letter and use single spaces",
    )
    .min(20, "Message must be at least 20 characters"),
});
