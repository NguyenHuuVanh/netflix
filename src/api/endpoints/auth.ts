import { apiService } from '../services';
import { User } from '../types';

export const authEndpoints = {
  // Login user
  login: (email: string, password: string): Promise<{ user: User; token: string }> =>
    apiService.post<{ user: User; token: string }>('/auth/login', { email, password }),

  // Register user
  register: (email: string, password: string, name: string): Promise<{ user: User; token: string }> =>
    apiService.post<{ user: User; token: string }>('/auth/register', { email, password, name }),

  // Get current user profile
  getProfile: (): Promise<User> =>
    apiService.get<User>('/auth/profile'),

  // Logout user
  logout: (): Promise<{ message: string }> =>
    apiService.post<{ message: string }>('/auth/logout'),

  // Refresh token
  refreshToken: (): Promise<{ token: string }> =>
    apiService.post<{ token: string }>('/auth/refresh'),
};
