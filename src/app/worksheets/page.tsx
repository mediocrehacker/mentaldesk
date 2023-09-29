import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src', 'app', 'content')

export default async function WorksheetsPage() {
  const worksheetsDir = path.join(contentDir, 'worksheets'); 
  const names = fs.readdirSync(worksheetsDir);

  return (
    <div className="prose max-w-none lg:pl-[19.5rem]">
      <h1>Рабочие Листы</h1>
          {names?.map((name) => {
              return <Worksheet key={name} name={name} />;
          })}
    </div>
  )
}

function Worksheet({ name }: { name: string }) {
  const worksheetsDir = path.join(contentDir, 'worksheets'); 
  const file = fs.readFileSync(path.join(worksheetsDir, `/${name}/content.mdx`));
  const worksheet = matter(file);

  return (
    <div>
      <h3>
        <Link className="link" href={`/worksheets/${name}`}>
          {worksheet?.data?.title}
        </Link>
      </h3>
      <p>{worksheet?.data?.teaser}</p>
    </div>
  );
}
