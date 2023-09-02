import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "../components/UserCard"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/profile')
  }


  return (
    <main className="main">
      <div className="description">
        <h1>Профайл пользователя</h1>
      </div>
      <section className="flex flex-col gap-6">
        <UserCard user={session?.user} pagetype={"Server"} />
      </section>
    </main>
  )
}
