import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return user ? (
    <div className="flex items-center gap-4">
      <Link className="btn btn-ghost" href="/protected">{user.email}</Link>
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link className="btn btn-ghost" href="/auth/login">Вход</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link className="btn btn-soft" href="/auth/sign-up">Регистрация</Link>
      </Button>
    </div>
  );
}
