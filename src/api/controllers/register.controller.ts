import axios, { AxiosResponse } from 'axios';

export async function register(url: string, email: string, username: string, password: string): Promise<AxiosResponse> {
  const data = {
    email,
    username,
    password,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    return response;
  } catch (error) {
    // Обрабатывайте ошибки, если это необходимо
    throw new Error('Network response was not ok');
  }
}
