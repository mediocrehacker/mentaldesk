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
    <div>
      <div className="page-header-wrapper">
        <div className="page-header">
          <div className="cds--grid">
            <div className="cds--row">
              <div className="cds--col">
                <h1>{worksheet?.data?.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cds--grid">
          <div className="cds--row">
            <div className="cds--col-lg-10 cds--col-md-6 cds--col-sm-4">
              <p>{worksheet?.data?.teaser}</p>
            </div>
          </div>
          <div className="cds--row">
            <div className="cds--col-lg-10 cds--col-md-5 cds--col-sm-4">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            <div className="cds--col-lg-6 cds--col-md-3 cds--col-sm-4">
              <div className="pdf">
                <div className="images">
                  <Image src={screenshootSrc}
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    unoptimized />
                </div>
                <a href={pdfSrc} className="cds--link">Скачать PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
