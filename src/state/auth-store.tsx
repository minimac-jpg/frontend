import { createContext, type ReactNode, useContext } from "react";
import { authClient } from "@/lib/auth-client";
import type { User } from "../types/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isPending: boolean;
  token: string | null;
}

interface AuthContextValue extends AuthState {
  setAuth: (user: User) => void;
  clearAuth: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function mapUser(
  u: { id: string; name?: string | null; email: string; image?: string | null } | undefined,
): User | null {
  if (!u) return null;
  return {
    id: u.id,
    displayName: u.name ?? u.email,
    email: u.email,
    avatar: u.image ?? "",
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const session = authClient.useSession();
  const user = mapUser(session.data?.user);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isPending: session.isPending,
        token: null,
        setAuth: () => {},
        clearAuth: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthStore(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthStore must be used within AuthProvider");
  }
  return context;
}
