import Image from 'next/image'
import Link from 'next/link'

import fs from 'fs'
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


export async function generateStaticParams() {
  const names = fs.readdirSync('./content/worksheets');

  return names.map((name) => ({
    slug: name,
  }))
}

export default async function WorksheetPage({ params }: { params: { slug: string } }) {
  const file = fs.readFileSync(`./content/worksheets/${params.slug}/content.mdx`);
  const worksheet = matter(file);
  const content = await toHtml(worksheet.content);
  const screenshootSrc = `/worksheets/${params.slug}/screenshoot.png`;
  const pdfSrc = `/worksheets/${params.slug}/${params.slug}.pdf`;

  return (
      <div className="prose prose-sm md:prose-base w-full max-w-4xl pt-10 mx-auto">
          <h1>{worksheet?.data?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div className="">
          <Image src={screenshootSrc}
              width={400}
              height={400}
              alt="Изображение рабочего листа"
              unoptimized />
          <a href={pdfSrc} className="cds--link">Скачать PDF</a>
          </div>
      </div>
  );
}
