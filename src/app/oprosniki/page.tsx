import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const oprosnikiDir = path.join(process.cwd(), 'src', 'app', 'content', 'oprosniki'); 

export default async function OprosnikiPage() {
  const names = fs.readdirSync(oprosnikiDir);

  return (
    <div className="prose prose-sm md:prose-base w-full max-w-4xl pt-8 mb-16 mx-auto">
      <h1>Опросники</h1>
          {names?.map((name) => {
              return <Oprosnik key={name} name={name} />;
          })}
    </div>
  )
}

function Oprosnik({ name }: { name: string }) {
  const file = fs.readFileSync(path.join(oprosnikiDir, `/${name}/content.mdx`));
  const oprosnik = matter(file);
  return (
    <div>
      <h3>
        <Link className="link" href={`/oprosniki/${name}`}>
          {oprosnik?.data?.title}
        </Link>
      </h3>
      <p>{oprosnik?.data?.teaser}</p>
    </div>
  );
}
