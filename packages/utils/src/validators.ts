// Simple user/group/checkin validators
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isNonEmptyString(s: any): boolean {
  return typeof s === 'string' && s.trim().length > 0;
}

export function isPositiveNumber(n: any): boolean {
  return typeof n === 'number' && n > 0;
}
