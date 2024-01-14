export async function GET(path: string) {
  const res = await fetch(path, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await res.json()
  return result;
}

export async function POST(path: string, data: any) {
  const res = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const result = await res.json();
  return result;

}