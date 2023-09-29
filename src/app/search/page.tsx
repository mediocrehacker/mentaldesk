import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Fuse from 'fuse.js';
import Search from '../components/Search'
import Slogan from '../components/Slogan'

const worksheetsDir = path.join(process.cwd(), 'src', 'app', 'content', 'worksheets'); 
const surveysDir = path.join(process.cwd(), 'src', 'app', 'content', 'surveys'); 

enum Doc{
  Worksheet,
  Survey,
}

export default async function WorksheetsPage({
  params,
  searchParams,
}:{
  params: { slug: string }
  searchParams: { [key: string]: string } })
{
  const q = searchParams.q! || '';

  const worksheets = fs.readdirSync(worksheetsDir).map((slug) => {
    const file = fs.readFileSync(path.join(worksheetsDir, `/${slug}/content.mdx`));
    return { slug: slug, kind: Doc.Worksheet, file: matter(file)};
  });

  const surveys = fs.readdirSync(surveysDir).map((slug) => {
    const file = fs.readFileSync(path.join(surveysDir, `/${slug}/content.mdx`));
    return { slug: slug, kind: Doc.Survey, file: matter(file)};
  });

  const docs = worksheets.concat(surveys);
  
  const fuse = new Fuse(docs, {
    keys: ['file.data.title', 'file.data.teaser', 'file.content']
  });

  const result = fuse.search(q);

  return (
    <div className="g-base-200 lg:pl-[19.5rem]">
      <Slogan />
      <Search value={q} />
      <div className="prose max-w-none">
      <h1>Результаты поиска</h1>
          {result?.map((worksheet) => {
            return <Worksheet key={worksheet?.item?.slug} worksheet={worksheet?.item} />;
          })}
      </div>
    </div>
  )
}

function Worksheet({ worksheet }: any) {
  const kind = Doc[worksheet.kind].toLowerCase();

  return (
    <div>
      <h3>
        <Link className="link" href={`/${kind}s/${worksheet?.slug}`}>
          {worksheet?.file?.data?.title}
        </Link>
      </h3>
      <p>{worksheet?.file?.data?.teaser}</p>
    </div>
  );
}
