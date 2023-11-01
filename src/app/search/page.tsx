import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Fuse from 'fuse.js';
import Search from '../components/Search'
import Slogan from '../components/Slogan'
import ToolCard from '../components/ToolCard'
import { srcImg } from '../../lib/worksheets'

const worksheetsDir = path.join(process.cwd(), 'src', 'app', 'content', 'worksheets'); 
const surveysDir = path.join(process.cwd(), 'src', 'app', 'content', 'surveys'); 

enum Doc{
  Worksheet="worksheet",
  Survey="oprosnik",
}

export default async function WorksheetsPage({
  params,
  searchParams,
}:{
  params: { slug: string }
  searchParams: { [key: string]: string } })
{
  const q = searchParams.q! || '';

  const worksheets = fs.readdirSync(worksheetsDir).map((slug) => {
    const file = fs.readFileSync(path.join(worksheetsDir, `/${slug}/content.mdx`));
    return { slug: slug, kind: Doc.Worksheet, file: matter(file)};
  });

  const surveys = fs.readdirSync(surveysDir).map((slug) => {
    const file = fs.readFileSync(path.join(surveysDir, `/${slug}/content.mdx`));
    return { slug: slug, kind: Doc.Survey, file: matter(file)};
  });

  const docs = worksheets.concat(surveys);
  
  const fuse = new Fuse(docs, {
    keys: ['file.data.title', 'file.data.teaser', 'file.content']
  });

  const result = fuse.search(q);

  return (
    <div className="g-base-200">
      <Slogan />
      <Search value={q} />
      <div className="">
      <h1>Результаты поиска</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
          {result?.map((worksheet) => {
            return <Worksheet key={worksheet?.item?.slug} worksheet={worksheet?.item} />;
          })}
      </div>
      </div>
    </div>
  )
}

function Worksheet({ worksheet }: any) {
  switch(worksheet.kind) {
    case "worksheet": {
  return (
    toolCardWorksheet(worksheet)
  );
      break;
    }
    case "oprosnik": {
      return (
    toolCardSurvey(worksheet)
      );
      break;
    }
  }
}


function toolCardWorksheet(worksheet: any) {
  const name = worksheet?.slug;
  const screenshotSrc = srcImg(worksheet?.isReady, name)
  const pdfLink = `/worksheets/${name}/worksheet.pdf`;

  return <ToolCard key={name} name={name} screenshotSrc={screenshotSrc} pdfLink={pdfLink} survey={worksheet.file} kindLabel="Рабочий Лист" kind="worksheets" />;
}

function toolCardSurvey(worksheet: any) {
  const name = worksheet?.slug;
  const screenshotSrc = `/surveys/${name}/screenshot-1.png`;
  const pdfLink = `/surveys/${name}/survey.pdf`;

  return <ToolCard key={name} name={name} screenshotSrc={screenshotSrc} pdfLink={pdfLink} survey={worksheet.file} kindLabel="Опросник" kind="oprosniki" />;
}
