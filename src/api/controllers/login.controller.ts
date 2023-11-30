import axios, { AxiosResponse } from 'axios';

export async function login(url: string, username: string, password: string): Promise<AxiosResponse> {
  const data = {
    username: username,
    password: password,
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
    throw new Error('Network response was not ok');
  }
}
