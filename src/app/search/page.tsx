import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Fuse from 'fuse.js';
import Search from '../components/Search'
import Slogan from '../components/Slogan'

const worksheetsDir = path.join(process.cwd(), 'src', 'app', 'content', 'worksheets'); 

export default async function WorksheetsPage({
  params,
  searchParams,
}:{
  params: { slug: string }
  searchParams: { [key: string]: string } })
{
  const q = searchParams.q!;
  const slugs = fs.readdirSync(worksheetsDir);
  const worksheets = slugs.map((slug) => {
    const file = fs.readFileSync(path.join(worksheetsDir, `/${slug}/content.mdx`));
    return { slug: slug, file: matter(file)};
  });

  const fuse = new Fuse(worksheets, {
    keys: ['file.data.title', 'file.data.teaser', 'file.content']
  });
  
  // if (!q) {
  //   return (<p> Can't find </p>)
  // }

  const result = fuse.search(q);

  return (
    <div className="g-base-200">
      <Slogan />
      <Search value={q} />
      <div className="prose prose-sm md:prose-base w-full max-w-4xl pt-8 mb-16 mx-auto">
      <h1>Результаты поиска</h1>
          {result?.map((worksheet) => {
              return <Worksheet worksheet={worksheet?.item} />;
          })}
      </div>
    </div>
  )
}

function Worksheet({ worksheet }: any) {

  return (
    <div>
      <h3>
        <Link className="link" href={`/worksheets/${worksheet?.slug}`}>
          {worksheet?.file?.data?.title}
        </Link>
      </h3>
      <p>{worksheet?.file?.data?.teaser}</p>
    </div>
  );
}
