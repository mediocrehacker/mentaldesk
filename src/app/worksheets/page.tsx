import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter';

export default async function WorksheetsPage() {
  const names = fs.readdirSync('./content/worksheets');

  return (
    <div className="prose prose-sm md:prose-base w-full max-w-4xl pt-10 mx-auto">
      <h1>Рабочие Листы</h1>
          {names?.map((name) => {
              return <Worksheet key={name} name={name} />;
          })}
    </div>
  )
}

function Worksheet({ name }: { name: string }) {
  const file = fs.readFileSync(`./content/worksheets/${name}/content.mdx`);
  const worksheet = matter(file);

  return (
    <div>
      <h3>
        <Link class="link" href={`/worksheets/${name}`}>
          {worksheet?.data?.title}
        </Link>
      </h3>
      <p>{worksheet?.data?.teaser}</p>
    </div>
  );
}
