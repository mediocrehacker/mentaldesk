import { redirect } from "next/navigation";

export default async function DownloadPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const pdfLink = `/surveys/${params.slug}/survey.pdf`;
  return redirect(pdfLink);
}
