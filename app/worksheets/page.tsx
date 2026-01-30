import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import ToolCard from '../components/ToolCard';
import { srcImg } from '@/lib/worksheets'
import Navbar from '../components/Navbar';
import { Footer } from '../Footer';

const contentDir = path.join(process.cwd(), 'app', 'content')

export default async function Page() {
  return (
    <>
      <Navbar />
      <main className="wrapper">
        <h1 className="text-4xl font-bold mb-8">Опросники</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Worksheets />
        </div>
      </main>
      <Footer />
    </>
    
  )
}


async function Worksheets() {
  "use cache"
  const worksheetsDir = path.join(contentDir, 'worksheets'); 
  const worksheets = fs.readdirSync(worksheetsDir).map((slug) => {
    const file = fs.readFileSync(path.join(worksheetsDir, `/${slug}/content.mdx`));
    return { name: slug, file: matter(file)};
  });
  
  const result = worksheets.sort((a,b) => (b.file.data.isReady - a.file.data.isReady))

  return (
    <>
      {result.map((worksheet) => toolCard(worksheet.name, worksheet.file))}
    </>
  )
}

function toolCard(name: string, worksheet: any) {
  const screenshotSrc = srcImg(worksheet.data.isReady, name)
  const pdfLink= `/worksheets/${name}/worksheet.pdf`;

  return (
    <ToolCard key={name} name={name} screenshotSrc={screenshotSrc} pdfLink={pdfLink} survey={worksheet} kindLabel="Рабочий Лист" kind="worksheets" />
  )
}
