import fs from 'fs'
import matter from 'gray-matter';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
 
async function toHtml(content: any ) {
  const file = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(content)
 
  return(String(file)) 
}


export async function generateStaticParams() {
  const names = fs.readdirSync('./content/worksheets');
 
  return names.map((name) => ({
    slug: name,
  }))
}

export default async function WorksheetPage({ params }: { params: { slug: string }} ) {
  const file = fs.readFileSync(`./content/worksheets/${params.slug}/content.mdx`);
  const worksheet = matter(file);
  const content = await toHtml(worksheet.content);

  return(
    <div>
      <div className="page-header-wrapper">
          <div className="page-header">
            <h1>{ worksheet?.data?.title }</h1>
          </div>
      </div>
      <div className="container">
        <div className="markdown">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}
