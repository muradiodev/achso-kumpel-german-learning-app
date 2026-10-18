import pg from 'pg';

// PostgreSQL connection. Anything with query(text, params) -> { rows } works
// as `db`, which lets the tests run against an in-process Postgres (PGlite).
export function openDatabase(url) {
  return new pg.Pool({ connectionString: url, max: 10 });
}

// Schema, applied on every start. Add new statements at the end; never edit
// one that already ran on the server.
const MIGRATIONS = [
  `CREATE TABLE IF NOT EXISTS users (
     id            TEXT PRIMARY KEY,
     email         TEXT NOT NULL UNIQUE,
     password_hash TEXT NOT NULL,
     profile       JSONB NOT NULL DEFAULT '{}',
     created_at    BIGINT NOT NULL
   )`,
  `CREATE TABLE IF NOT EXISTS sessions (
     token_hash  TEXT PRIMARY KEY,
     user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
     created_at  BIGINT NOT NULL,
     expires_at  BIGINT NOT NULL
   )`,
  'CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id)',
  `CREATE TABLE IF NOT EXISTS progress (
     user_id     TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
     data        JSONB NOT NULL,
     updated_at  BIGINT NOT NULL
   )`,
];

export async function migrate(db) {
  for (const sql of MIGRATIONS) await db.query(sql);
}
