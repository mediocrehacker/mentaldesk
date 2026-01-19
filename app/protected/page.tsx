import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import { Suspense } from "react";

async function UserDetails() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <>
      <p>
        <span className="font-bold"> Ваш email:</span>
        <span> {data.claims.user_metadata?.email}</span>
      </p>
    </>
  )
}

export default function ProtectedPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          Добро пожаловать! Здесь вы можете брендировать свои инструменты!
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Информация о вас</h2>
        <Suspense>
          <UserDetails />
        </Suspense>
      </div>
    </div>
  );
}
