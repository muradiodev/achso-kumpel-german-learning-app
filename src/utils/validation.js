export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

export const isPasswordValid = (value) => value.length >= 8;

export const isPhone = (value) => /^\+?[0-9 ()-]{6,20}$/.test(value.trim());

// Inserts dots while typing: "1503199" -> "15.03.199"
export function formatBirthDateInput(value) {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  const parts = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 8)].filter(Boolean);
  return parts.join('.');
}

// Returns a Date for a valid "DD.MM.YYYY", otherwise null.
export function parseBirthDate(value) {
  const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(value);
  if (!match) return null;
  const [, d, m, y] = match.map(Number);
  const date = new Date(y, m - 1, d);
  if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) return null;
  return date;
}

export function ageFrom(date, now = new Date()) {
  let age = now.getFullYear() - date.getFullYear();
  const beforeBirthday =
    now.getMonth() < date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() < date.getDate());
  if (beforeBirthday) age -= 1;
  return age;
}
