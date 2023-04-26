export function getRandomCode() {
  return Math.random().toString(36).substring(7);
}

export function getUniqueCode() {
  return Date.now().toString(36) + getRandomCode();
}
