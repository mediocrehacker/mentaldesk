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
  const screenshootSrc = `/surveys/${params.slug}/screenshot.png`;
  const pdfSrc = `/surveys/${params.slug}/${params.slug}.pdf`;

  return (
      <div className="prose prose-sm md:prose-base w-full max-w-4xl pt-10 mx-auto">
          <h1>{survey?.data?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div className="">
          <Image className="max-w-xs md:max-w-lg" src={screenshootSrc}
              width={512}
              height={512}
              alt="Изображение опросника"
              unoptimized />
          <a href={pdfSrc} className="cds--link">Скачать PDF</a>
          </div>
      </div>
  );
}
