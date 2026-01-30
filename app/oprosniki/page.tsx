import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import ToolCard from '../components/ToolCard';
import Navbar from '../components/Navbar';
import { Footer } from '../Footer';

const surveysDir = path.join(process.cwd(), 'app', 'content', 'surveys'); 

async function Surveys() {
  "use cache"
  
  const names = fs.readdirSync(surveysDir);

  return (
    <>
      {names?.map((name) => toolCard(name))}
    </>
  )
}

export default async function Page() {
  return (
    <>
      <Navbar />
      <main className="wrapper">
        <h1 className="text-4xl font-bold mb-8">Опросники</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Surveys />
        </div>
      </main>
      <Footer />
    </>
    
  )
}

function toolCard(name: string) {
  const file = fs.readFileSync(path.join(surveysDir, `/${name}/content.mdx`));
  const survey = matter(file);
  const screenshotSrc = `https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/src/app/content/surveys/${name}/original-1.png`
  const pdfLink= `/surveys/${name}/survey.pdf`;

  return (
    <ToolCard key={name} name={name} screenshotSrc={screenshotSrc} pdfLink={pdfLink} survey={survey} kindLabel="Опросник" kind="oprosniki" />
  )
}
