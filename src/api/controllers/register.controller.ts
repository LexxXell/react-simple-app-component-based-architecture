export async function register(url: string, email: string, username: string, password: string): Promise<Response> {
  const data = {
    email,
    username,
    password,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });
  return response;
}
