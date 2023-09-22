import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src', 'app', 'content')

export default async function OprosnikiPage() {
  const oprosnikiDir = path.join(contentDir, 'oprosniki'); 
  const names = fs.readdirSync(oprosnikiDir);

  return (
    <div className="prose prose-sm md:prose-base w-full max-w-4xl pt-10 mx-auto">
      <h1>Опросники</h1>
          {names?.map((name) => {
              return <Oprosnik key={name} name={name} />;
          })}
    </div>
  )
}

function Oprosnik({ name }: { name: string }) {
  const oprosnikiDir = path.join(contentDir, 'oprosniki'); 
  const file = fs.readFileSync(path.join(oprosnikiDir, `/${name}/content.mdx`));
  const oprosnik = matter(file);
  console.log(oprosnik?.data);
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
