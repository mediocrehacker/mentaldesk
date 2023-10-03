import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import ToolCard from '../components/ToolCard'

const surveysDir = path.join(process.cwd(), 'src', 'app', 'content', 'surveys'); 

export default async function SurveysPage() {
  const names = fs.readdirSync(surveysDir);

  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-8">Опросники</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
        {names?.map((name) => toolCard(name))}
      </div>
    </div>
  )
}

function toolCard(name: string) {
  const file = fs.readFileSync(path.join(surveysDir, `/${name}/content.mdx`));
  const survey = matter(file);
  const screenshotSrc = `https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/src/app/content/surveys/${name}/original-1.png`
  const pdfLink= `/oprosniki/${name}/download`;

  return (
    <ToolCard key={name} name={name} screenshotSrc={screenshotSrc} pdfLink={pdfLink} survey={survey} kindLabel="Опросник" kind="oprosniki" />
  )
}
