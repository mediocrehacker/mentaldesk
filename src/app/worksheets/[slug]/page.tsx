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
  const screenshootSrc = `/worksheets/${params.slug}/screenshot.png`;
  const pdfSrc = `/worksheets/${params.slug}/${params.slug}.pdf`;

  return (
    <div className="prose max-w-none lg:pl-[19.5rem]">
          <h1>{worksheet?.data?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div className="">
          <Image className="max-w-xs md:max-w-lg" src={screenshootSrc}
              width={512}
              height={512}
              alt="Изображение рабочего листа"
              unoptimized />
          <a href={pdfSrc} className="cds--link">Скачать PDF</a>
          </div>
      </div>
  );
}
