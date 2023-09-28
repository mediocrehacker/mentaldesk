import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const surveysDir = path.join(process.cwd(), 'src', 'app', 'content', 'surveys'); 

export default async function SurveysPage() {
  const names = fs.readdirSync(surveysDir);

  return (
    <div className="prose prose-sm md:prose-base w-full max-w-4xl pt-8 mb-16 mx-auto">
      <h1>Опросники</h1>
          {names?.map((name) => {
              return <Survey key={name} name={name} />;
          })}
    </div>
  )
}

function Survey({ name }: { name: string }) {
  const file = fs.readFileSync(path.join(surveysDir, `/${name}/content.mdx`));
  const survey = matter(file);
  return (
    <div>
      <h3>
        <Link className="link" href={`/oprosniki/${name}`}>
          {survey?.data?.title}
        </Link>
      </h3>
      <p>{survey?.data?.teaser}</p>
    </div>
  );
}
