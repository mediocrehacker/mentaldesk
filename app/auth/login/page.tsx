import Navbar from '@/app/components/Navbar';
import { Footer } from '@/app/Footer';
import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
      <>
        <Navbar />
        <main className="wrapper">
          <Login />
        </main>
        <Footer />
      </>
    )
}


function Login() {
  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
