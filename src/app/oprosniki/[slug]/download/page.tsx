import { redirect } from "next/navigation";
import { options } from "../../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function DownloadPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const session = await getServerSession(options);
  const pdfLink = `/surveys/${params.slug}/survey.pdf`;
  if (session) {
    return redirect(pdfLink);
  } else {
    return redirect("/api/auth/signin");
  }
}
