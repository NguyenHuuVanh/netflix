import { apiService } from '../services';
import { Movie, PaginatedResponse } from '../types';

export const movieEndpoints = {
  // Get trending movies
  getTrending: (): Promise<PaginatedResponse<Movie>> =>
    apiService.get<PaginatedResponse<Movie>>('/movies/trending'),

  // Get movies by category
  getByCategory: (category: string): Promise<PaginatedResponse<Movie>> =>
    apiService.get<PaginatedResponse<Movie>>(`/movies/category/${category}`),

  // Get movie by ID
  getById: (id: string): Promise<Movie> =>
    apiService.get<Movie>(`/movies/${id}`),

  // Search movies
  search: (query: string): Promise<PaginatedResponse<Movie>> =>
    apiService.get<PaginatedResponse<Movie>>(`/movies/search?q=${encodeURIComponent(query)}`),

  // Get top rated movies
  getTopRated: (): Promise<PaginatedResponse<Movie>> =>
    apiService.get<PaginatedResponse<Movie>>('/movies/top-rated'),
};
