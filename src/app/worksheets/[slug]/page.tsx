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
  const worksheetsDir = path.join(contentDir, 'worksheets'); 
  const names = fs.readdirSync(worksheetsDir);

  return names.map((name) => ({
    slug: name,
  }))
}

export default async function WorksheetPage({ params }: { params: { slug: string } }) {
  const worksheetsDir = path.join(contentDir, 'worksheets'); 
  const file = fs.readFileSync(path.join(worksheetsDir, `${params.slug}/content.mdx`));
  const worksheet = matter(file);
  const content = await toHtml(worksheet.content);
  const screenshotSrc = `https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/src/app/content/worksheets/${params.slug}/original-1.png`
  const pdfSrc = `/worksheets/${params.slug}/worksheet.pdf`;

  return (
      <div className="">
          <h1 className="text-4xl font-bold mb-8">{worksheet?.data?.title}</h1>
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
      <Image className="lg:max-w-[400px]" src={screenshotSrc}
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
