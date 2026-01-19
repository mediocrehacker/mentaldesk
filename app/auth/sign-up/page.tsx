import Navbar from '@/app/components/Navbar';
import { Footer } from '@/app/Footer';
import { SignUpForm } from "@/components/sign-up-form";

export default function Page() {
  return (
      <>
        <Navbar />
        <main className="wrapper">
          <Signup />
        </main>
        <Footer />
      </>
    )
}


function Signup() {
  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
