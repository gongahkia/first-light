export function toLocalTime(iso: string, tz: string): string {
  try {
    return new Date(iso).toLocaleString('en-US', { timeZone: tz });
  } catch {
    return iso;
  }
}

export function nowISOString(): string {
  return new Date().toISOString();
}
