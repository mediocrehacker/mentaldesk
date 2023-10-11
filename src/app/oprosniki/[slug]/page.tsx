import Image from 'next/image'
import Link from 'next/link'


import { sendPDF} from "../../../lib/send"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

async function toHtml(content: any) {
  const file = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(content)

  return (String(file))
}

const contentDir = path.join(process.cwd(), 'src', 'app', 'content')

export async function generateStaticParams() {
  const surveysDir = path.join(contentDir, 'surveys'); 
  const names = fs.readdirSync(surveysDir);

  return names.map((name) => ({
    slug: name,
  }))
}

export default async function SurveyPage({ params }: { params: { slug: string } }) {
  const surveysDir = path.join(contentDir, 'surveys'); 
  const file = fs.readFileSync(path.join(surveysDir, `${params.slug}/content.mdx`));
  const survey = matter(file);
  const content = await toHtml(survey.content);
  const screenshotSrc = `https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/src/app/content/surveys/${params.slug}/original-1.png`
  const pdfSrc = `/oprosniki/${params.slug}/download`;
  const pdfGithubSrc = `https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/src/app/content/surveys/${params.slug}/survey.pdf`

  return (
      <div className="">
          <h1 className="text-4xl font-bold mb-8">{survey?.data?.title}</h1>
      <div className="flex flex-col-reverse lg:flex-row gap-16">

          <div className="prose max-w-none basis-4/6" dangerouslySetInnerHTML={{ __html: content }} />
          <div className="basis-2/6 flex flex-col gap-8">

          <div>
            <a href="#send_modal" className="btn btn-md btn-primary">Отправить клиенту</a>
          </div>
          <div className="flex gap-2">
            <div className="badge badge-outline">Опросник</div>
          </div>
          <div className="">
          <a href={pdfSrc} target="_blank" className="">
          <Image className="lg:max-w-[400px]" src={screenshotSrc}
              width={528}
              height={746}
              alt="Изображение опросника"
              />
          </a>
          </div>
          <div>
          <a href={pdfSrc} className="btn btn-md btn-ghost">Скачать PDF</a>
          </div>
          <div>
            <a href={pdfSrc} className="btn btn-md btn-info">Брендировать</a>
          </div>
          </div>
          </div>
        <SendModal pdfSrc={pdfGithubSrc} pdfName={survey.data.title} />
      </div>
  );
}


type Props = {
    pdfSrc: string,
    pdfName: string,
}

function SendModal({ pdfSrc, pdfName} : Props) {
  return(
<div className="modal" id="send_modal">
  <div className="modal-box">
    <div className="flex justify-end">
    <a href="#" className="tooltip" data-tip="Close">
    <svg width="32" height="32" className="fill-current" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
    </a>
    </div>
    <form action={sendPDF}>
      <input name="pdfSrc" type="hidden" defaultValue={pdfSrc} />
      <input name="pdfName" type="hidden" defaultValue={pdfName} />
        <div className="form-control">
          <label className="label">
            <span className="label-text">Имя клиента</span>
          </label>
          <input type="text" id="clientName" name="clientName" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Адрес электронной почты</span>
          </label>
          <input type="email" id="clientEmail" name="clientEmail" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Заголовок письма</span>
          </label>
          <input id="emailTitle" name="emailTitle" type="text" defaultValue={pdfName} className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Отправить клиенту</button>
          <label className="label">
            <span className="label-text-alt"> на его электронную почту</span>
          </label>
        </div>
  </form>
  </div>
</div>
  )
}
