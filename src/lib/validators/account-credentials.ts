import { z } from "zod";

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, {
        message: 'Password must be at least 8 characters long',
      })
      .max(32, {
        message: 'Password must be at most 32 characters long',
      }),
  })

