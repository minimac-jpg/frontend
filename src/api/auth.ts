import { authClient } from "@/lib/auth-client";
import type { User } from "../types/auth";

function mapUser(
  u: { id: string; name?: string | null; email: string; image?: string | null },
): User {
  return {
    id: u.id,
    displayName: u.name ?? u.email,
    email: u.email,
    avatar: u.image ?? "",
  };
}

export async function login(email: string, password: string): Promise<User> {
  const { data, error } = await authClient.signIn.email({ email, password });
  if (error) throw new Error(error.message ?? "Login failed");
  if (!data?.user) throw new Error("Login returned no user");
  return mapUser(data.user);
}

export async function logout(): Promise<void> {
  await authClient.signOut();
}

export async function whoami(): Promise<User> {
  const { data, error } = await authClient.getSession();
  if (error || !data?.user) throw new Error("Not authenticated");
  return mapUser(data.user);
}
