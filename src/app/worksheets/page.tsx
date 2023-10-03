import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import ToolCard from '../components/ToolCard'

const contentDir = path.join(process.cwd(), 'src', 'app', 'content')

export default async function WorksheetsPage() {
  const worksheetsDir = path.join(contentDir, 'worksheets'); 
  const names = fs.readdirSync(worksheetsDir);

  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-8">Рабочие Листы</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
        {names?.map((name) => toolCard(name))}
      </div>
    </div>
  )
}

function toolCard(name: string) {
  const worksheetsDir = path.join(contentDir, 'worksheets'); 
  const file = fs.readFileSync(path.join(worksheetsDir, `/${name}/content.mdx`));
  const worksheet = matter(file);
  const screenshotSrc = `https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/src/app/content/worksheets/${name}/original-1.png`
  const pdfLink= `/worksheets/${name}/download`;

  return (
    <ToolCard key={name} name={name} screenshotSrc={screenshotSrc} pdfLink={pdfLink} survey={worksheet} kindLabel="Рабочий Лист" kind="worksheets" />
  )
}
