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
    <div className="prose max-w-none lg:pr-[19.5rem]">
      <h1>Профайл</h1>
      <section>
        <UserCard user={session?.user} pagetype={"Server"} />
      </section>
    </div>
  )
}
