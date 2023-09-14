import UpdateUser from '../components/UpdateUser'
import { redirect } from 'next/navigation'
import { options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from "next-auth/next"

export default async function NewUserPage() {
  const session = await getServerSession(options)
  if (session) {

  return (
    <div className="prose prose-sm md:prose-base w-full max-w-4xl pt-12 mx-auto">
      <h1>Рады познакомиться с вами</h1>
          <UpdateUser email={session?.user?.email || ""} />
    </div>
  )
  } else {
    return redirect("api/auth/signin")
  }
}
