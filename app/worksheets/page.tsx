import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter';

export default async function WorksheetsPage() {
  const names = fs.readdirSync('./content/worksheets');

  return (
    <div>
      <div className="page-header-wrapper">
        <div className="page-header">
          <h1>Рабочие Листы</h1>
        </div>
      </div>
      <div className="container">
        <div className="worksheets-content">
          {names?.map((name) => {
            return <Worksheet key={name} name={name} />;
          })}
        </div>
      </div>
    </div>
  )
}

function Worksheet({ name }: any) {
  const file = fs.readFileSync(`./content/worksheets/${name}/content.mdx`);
  const worksheet = matter(file);

  return (
    <div>
      <h2>
        <Link href={`/worksheets/${name}`}>
          {worksheet?.data?.title}
        </Link>
      </h2>
      <p>{worksheet?.data?.teaser}</p>
    </div>
  );
}
