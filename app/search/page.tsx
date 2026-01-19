import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Fuse from 'fuse.js';
import Search from '../components/Search'
import Slogan from '../components/Slogan'
import ToolCard from '../components/ToolCard';
import { srcImg } from '@/lib/worksheets';
import { Suspense } from 'react'
import Navbar from '@/app/components/Navbar';
import { Footer } from '@/app/Footer';

const worksheetsDir = path.join(process.cwd(), 'app', 'content', 'worksheets'); 
const surveysDir = path.join(process.cwd(), 'app', 'content', 'surveys'); 

enum Doc{
  Worksheet="worksheet",
  Survey="oprosnik",
}

export default async function Page(
  props:{
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string }> }
) {
  const searchParams = props.searchParams.then(sp => ({ q: sp.q }));

  return (
    <>
      <Navbar />
      <main className="wrapper">
        <div className="g-base-200">
          <Slogan />
          <Suspense fallback="loading...">
            <SearchResults searchParams={searchParams} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
    
  )
};

async function SearchResults( props:{ searchParams: Promise<{ [key: string]: string }> }) {

  const { q } = await props.searchParams;
  console.log(q);

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

  const result = fuse.search(q).sort((a,b) => (b.item.file.data.isReady - a.item.file.data.isReady))

  // const result = {
  //   availableData:  result.filter(x => x.item.file.data.isReady),
  //   notAvailableData:  result.filter(x => !x.item.file.data.isReady),
  // };

  return (
    <>
      <Search value={q} />
      <div className="">
      <h1 className="text-xl">Результаты поиска</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4"> 
          {result?.map((worksheet) => {
            return <Worksheet key={worksheet?.item?.slug} worksheet={worksheet?.item} />;
          })}
      </div>
      </div>
    </>
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
