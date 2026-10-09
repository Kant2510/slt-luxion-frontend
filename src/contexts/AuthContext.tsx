'use client';

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { apiFetch } from '@/lib/api';
import type { AuthResponse, LoginPayload, RegisterPayload, User } from '@/types/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<User>;
  register: (payload: RegisterPayload) => Promise<User>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, startTransition] = useTransition();

  const fetchCurrentUser = async () => {
    try {
      const res = await apiFetch<{ success: boolean; data: { user: User } }>('/auth/me', {
        method: 'GET',
        cache: 'no-store',
      });
      if (res?.data?.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    startTransition(() => {
      void fetchCurrentUser();
    });
  }, []);

  const login = async (payload: LoginPayload): Promise<User> => {
    setIsLoading(true);
    try {
      const res = await apiFetch<AuthResponse>('/auth/authenticate', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      if (!res.data?.user) {
        throw new Error('Sign in failed: invalid user data received');
      }

      setUser(res.data.user);
      return res.data.user;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (payload: RegisterPayload): Promise<User> => {
    setIsLoading(true);
    try {
      const res = await apiFetch<AuthResponse>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      if (!res.data?.user) {
        throw new Error('Registration failed: invalid user data received');
      }

      setUser(res.data.user);
      return res.data.user;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await apiFetch<{ success: boolean }>('/auth/logout', {
        method: 'POST',
      });
    } catch (e) {
      console.warn('Logout API error:', e);
    } finally {
      setUser(null);
    }
  };

  const refreshUser = async () => {
    await fetchCurrentUser();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
