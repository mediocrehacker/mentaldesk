import '../globals.css';
import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import Navbar from '@/app/components/Navbar';
import { Footer } from '@/app/Footer';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div id="app" className="bg-base-200">
     <Navbar />

     <main className="wrapper">
          {children}
        </main>

     <Footer />
   </div>
  );
}
