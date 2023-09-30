import Image from 'next/image'
import Link from 'next/link'

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
  const screenshootSrc = `/surveys/${params.slug}/original-1.png`;
  const pdfSrc = `/surveys/${params.slug}/survey.pdf`;

  return (
      <div className="">
          <h1 className="text-4xl font-bold mb-8">{survey?.data?.title}</h1>
      <div className="flex flex-col-reverse lg:flex-row gap-16">

          <div className="prose max-w-none basis-4/6" dangerouslySetInnerHTML={{ __html: content }} />
          <div className="basis-2/6 flex flex-col gap-8">

          <div>
            <a href={pdfSrc} className="btn btn-md btn-primary">Отправить клиенту</a>
          </div>
          <div className="flex gap-2">
            <div className="badge badge-outline">Опросник</div>
          </div>
          <div className="">
          <a href={pdfSrc} target="_blank" className="">
      <Image className="lg:max-w-[400px]" src={screenshootSrc}
              width={528}
              height={746}
              alt="Изображение опросника"
              unoptimized />
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
      </div>
  );
}
