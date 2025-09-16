export async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Fetch error');
  return res.json();
}

// Example POST utility
export async function apiPost<T>(url: string, data: object): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Post error');
  return res.json();
}
