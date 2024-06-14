import { z } from 'zod';

export const schema = z.object({
  id: z.number().optional(),
  name: z.string().min(3, 'Insira um nome válido').optional(),
  photo: z.object({
    base64: z.string().optional()
  })
})
