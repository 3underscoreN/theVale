import { neon } from "@neondatabase/serverless";

export const sql = (process.env.NODE_ENV === 'production') ?
    neon(`${process.env.DATABASE_URL}`) :
    neon(`${process.env.DATABASE_URL_DEV}`);