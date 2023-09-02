import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter';

export default async function WorksheetsPage() {
  const names = fs.readdirSync('./content/worksheets');

  return (
    <div>
      <div className="page-header-wrapper">
        <div className="page-header">
          <div className="cds--grid">
            <div className="cds--row">
              <div className="cds--col">
                <h1>Рабочие Листы</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cds--grid">
          <div className="cds--row">
            <div className="cds--col-lg-12 cds--col-md-6 cds--col-sm-4">
              {names?.map((name) => {
                return <Worksheet key={name} name={name} />;
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Worksheet({ name }: { name: string }) {
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
