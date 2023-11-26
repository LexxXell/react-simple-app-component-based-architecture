import { login, register } from './controllers';

const routes = {
  login: '/login',
  register: '/register',
};

export class API {
  baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || '';
  }

  getFullUrl(rout: string) {
    return this.baseUrl ? new URL(rout, this.baseUrl).toString() : rout;
  }

  async login(username: string, password: string): Promise<Response> {
    const url = this.getFullUrl(routes.login);
    try {
      const response = await login(url, username, password);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response;
    } catch (error) {
      console.error('There has been a problem with fetch operation:', error);
      throw error;
    }
  }

  async register(email: string, username: string, password: string): Promise<Response> {
    const url = this.getFullUrl(routes.register);
    try {
      const response = await register(url, email, username, password);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response;
    } catch (error) {
      console.error('There has been a problem with fetch operation:', error);
      throw error;
    }
  }
}
