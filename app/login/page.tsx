import Link from "next/link";
import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Log in | FIRSTS" };

export default function Login() {
  return (
    <AuthShell
      tag="Log in"
      title="Welcome back."
      subtitle="Pick up right where you left off, whichever path you started on."
      color="var(--fuchsia-blast)"
      footer={
        <p className="mt-6 text-center text-sm text-paper/50">
          Don&apos;t have an account?{" "}
          <Link
            href="/onboarding"
            className="font-semibold text-paper underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
          >
            Get started
          </Link>
        </p>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
