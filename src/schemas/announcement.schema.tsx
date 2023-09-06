import { z } from "zod";

export const announcementSchema = z.object({
    id: z.number(),
    brand: z.string().min(2).max(100),
    model: z.string().min(1).max(100),
    year: z.string().min(2).max(100),
    fuel: z.string().min(2).max(100),
    km: z.number().min(0).max(9999999999.99),
    color: z.string().min(2).max(100),
    good_deal: z.boolean(),
    active: z.boolean(),
    value: z.number().min(0).max(9999999999.99),
    value_fipe: z.number().min(0).max(9999999999.99),
    description: z.string().nullable().nullish(),
    cover_img: z.string(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
})

export const announcementCreateSchema = announcementSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});


export const announcementUpdateSchema = announcementCreateSchema.partial();

export type TypeAnnouncement = z.infer<typeof announcementSchema>

export type createAnnouncement = z.infer<typeof announcementCreateSchema>

export type updateAnnouncement = z.infer<typeof announcementUpdateSchema>
