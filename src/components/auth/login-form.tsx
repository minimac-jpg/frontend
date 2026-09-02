import { useNavigate } from "@tanstack/react-router";
import { KeyRound, Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useAuth } from "../../hooks/use-auth";
import { GithubIcon, GoogleIcon, MicrosoftIcon } from "./social-icons";

const SOCIAL_PROVIDERS = [
  { provider: "google", label: "Google", Icon: GoogleIcon },
  { provider: "github", label: "GitHub", Icon: GithubIcon },
  { provider: "microsoft", label: "Microsoft", Icon: MicrosoftIcon },
] as const;

type SocialProvider = (typeof SOCIAL_PROVIDERS)[number]["provider"];

export function LoginForm({ redirectTo }: { redirectTo?: string }) {
  const { login, isLoggingIn, loginError } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [signupError, setSignupError] = useState<string | null>(null);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [socialError, setSocialError] = useState<string | null>(null);
  const [socialLoading, setSocialLoading] = useState<SocialProvider | null>(null);

  const safeRedirect =
    redirectTo?.startsWith("/") && !redirectTo.startsWith("//") ? redirectTo : "/";

  const handleSocial = async (provider: SocialProvider) => {
    setSocialError(null);
    setValidationError(null);
    setSignupError(null);
    setSocialLoading(provider);
    try {
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: safeRedirect,
      });
      if (error) {
        setSocialError(error.message ?? "Sign in failed");
      }
    } catch {
      setSocialError("Sign in failed");
    } finally {
      setSocialLoading(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!email.trim() || !password || (mode === "signup" && !name.trim())) {
      setValidationError(
        mode === "signup"
          ? "Name, email and password are required"
          : "Email and password are required",
      );
      return;
    }

    if (mode === "signup") {
      setIsSigningUp(true);
      setSignupError(null);
      try {
        // better-auth creates a session on signup; normalize app state by
        // running the standard sign-in flow right after.
        const { error } = await authClient.signUp.email({
          name: name.trim(),
          email: email.trim(),
          password,
        });
        if (error) {
          setSignupError(error.message ?? "Signup failed");
          return;
        }
        await login({ email: email.trim(), password });
        navigate({ to: safeRedirect, replace: true });
      } catch {
        setSignupError("Signup failed");
      } finally {
        setIsSigningUp(false);
      }
      return;
    }

    try {
      await login({ email: email.trim(), password });
      navigate({ to: safeRedirect, replace: true });
    } catch {
      // error is captured in loginError
    }
  };

  const isBusy = isLoggingIn || isSigningUp;
  const error = validationError ?? (mode === "signup" ? signupError : loginError?.message) ?? null;

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col gap-1 p-6 pb-0 text-center">
          <h2 className="text-xl font-semibold whitespace-nowrap">
            {mode === "signup" ? "Create your account" : "Sign in to Maple"}
          </h2>
          <p className="text-sm text-muted-foreground">
            {mode === "signup"
              ? "Access is limited to allowlisted emails"
              : "Enter your credentials to continue"}
          </p>
        </div>
        <div className="p-6">
          {socialError && (
            <div
              className="mb-4 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive"
              role="alert"
            >
              {socialError}
            </div>
          )}
          <div className="flex flex-col gap-3">
            {SOCIAL_PROVIDERS.map(({ provider, label, Icon }) => (
              <Button
                key={provider}
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => handleSocial(provider)}
                disabled={isBusy || socialLoading !== null}
              >
                {socialLoading === provider ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Icon className="size-4" />
                )}
                {label}
              </Button>
            ))}
          </div>
          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">Or continue with Email</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          {isBusy ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="size-6 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-4">
                {error && (
                  <div
                    className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive"
                    role="alert"
                  >
                    {error}
                  </div>
                )}
                {mode === "signup" && (
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                      htmlFor="name-input"
                    >
                      Name
                    </label>
                    <Input
                      id="name-input"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      disabled={isBusy}
                    />
                  </div>
                )}
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    htmlFor="email-input"
                  >
                    Email
                  </label>
                  <Input
                    id="email-input"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    disabled={isBusy}
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    htmlFor="password-input"
                  >
                    Password
                  </label>
                  <Input
                    id="password-input"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete={mode === "signup" ? "new-password" : "current-password"}
                    disabled={isBusy}
                  />
                </div>
                <Button type="submit" disabled={isBusy} className="w-full">
                  <KeyRound className="size-4" />
                  {mode === "signup" ? "Create Account" : "Sign In"}
                </Button>
                <button
                  type="button"
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                  onClick={() => {
                    setMode(mode === "signup" ? "signin" : "signup");
                    setValidationError(null);
                    setSignupError(null);
                  }}
                >
                  {mode === "signup" ? "Have an account? Sign in" : "Need an account? Sign up"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
