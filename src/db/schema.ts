import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const programs = pgTable('programs', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(), // e.g. "Program Basic Batch 6"
  field: text('field').notNull(), // e.g. "Keperawatan Lansia"
  onlineDate: text('onlineDate').notNull(), // e.g. "7 September 2026 -"
  offlineDate: text('offlineDate').notNull(), // e.g. "14 September 2026 -"
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const jobFieldsTable = pgTable('job_fields', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(), // e.g. "Keperawatan Lansia"
  description: text('description'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const quotasTable = pgTable('quotas', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(), // e.g. "Bidang Keperawatan Lansia"
  subtitle: text('subtitle').notNull(), // e.g. "Khusus Perempuan"
  quotaNumber: text('quotaNumber').notNull(), // e.g. "40 Orang"
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const testimonialsTable = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(), // e.g. "Anisa"
  location: text('location').notNull(), // e.g. "Jakarta, Indonesia"
  image: text('image').notNull(),
  text: text('text').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const statsTable = pgTable('stats', {
  id: serial('id').primaryKey(),
  category: text('category').notNull(), // e.g. "Perawat Lansia"
  count: text('count').notNull(), // e.g. "210"
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

