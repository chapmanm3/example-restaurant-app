import { z } from 'zod'

export const MenuItem = z.object({
  name: z.string(),
  description: z.string(),
  tags: z.array(z.string())
})

export const ZMenuObject = z.record(z.string(), z.array(MenuItem))
export type MenuObject = z.infer<typeof MenuObject>
