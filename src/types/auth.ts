export interface User {
  id: string;
  username: string;
  email?: string | null;
  fullName?: string | null;
  phone?: string | null;
  bio?: string | null;
  role?: 'admin' | 'user';
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  data: {
    accessToken?: string;
    user: User;
  };
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  password: string;
  email?: string;
  fullName?: string;
  phone?: string;
}

export interface UpdateProfilePayload {
  fullName?: string;
  email?: string;
  phone?: string;
  bio?: string;
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
}
