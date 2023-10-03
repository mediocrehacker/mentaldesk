import { redirect } from 'next/navigation'
import { options } from '../../../api/auth/[...nextauth]/options'
import { getServerSession } from "next-auth/next"
import { useRouter } from 'next/router'

export default async function DownloadPage({
  params,
}:{

  params: { slug: string }
})
{
  const session = await getServerSession(options)
  const pdfLink= `/surveys/${params.slug}/survey.pdf`;
  if (session) {
  return (
    redirect(pdfLink)
  )
  } else {
    return redirect("/api/auth/signin")
  }
}
