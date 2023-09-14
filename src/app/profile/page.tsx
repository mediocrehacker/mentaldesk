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
    <div className="prose prose-sm md:prose-base w-full max-w-4xl pt-10 mx-auto">
      <h1>Профайл</h1>
      <section>
        <UserCard user={session?.user} pagetype={"Server"} />
      </section>
    </div>
  )
}
