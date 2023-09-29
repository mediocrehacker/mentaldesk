import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const surveysDir = path.join(process.cwd(), 'src', 'app', 'content', 'surveys'); 

export default async function SurveysPage() {
  const names = fs.readdirSync(surveysDir);

  return (
    <div className="">
      <h1 className="text-4xl font-bold lg:pl-[19.5rem]">Опросники</h1>
      <div className="flex flex-wrap gap-8 mt-8"> 
          {names?.map((name) => {
              return <Survey key={name} name={name} />;
          })}
     </div>
    </div>
  )
}

function Survey({ name }: { name: string }) { 
  const file = fs.readFileSync(path.join(surveysDir, `/${name}/content.mdx`));
  const survey = matter(file);
  const screenshotSrc = `/surveys/${name}/screenshot-1.png`;
  const pdfSrc = `/surveys/${name}/survey.pdf`;

  return (
    <div className="card w-[320px] md:w-[420px] lg:w-[450px] xl:w-[550px] bg-neutral text-neutral-content lg:card-side bg-base-100 shadow-xl">

      <figure className="lg:w-1/2">
       <Link href={`/oprosniki/${name}`}>
       <Img src={screenshotSrc} title={survey?.data?.title} /> 
       </Link>
      </figure>
      <div className="card-body lg:w-1/2">
      <Link href={`/oprosniki/${name}`}><h2 className="card-title">{survey?.data?.title}</h2></Link>
    <p>Опросник</p>
    <div className="card-actions justify-end">
      <a href={pdfSrc} className="btn btn-primary">Скачать PDF</a>
    </div>
  </div>
</div>
  );
}

function Img({src, title}: {src: string, title: string}) {
  return (
    <div className="h-full flex justify-center items-end relative">
      <Image className="object-left-top object-none max-w-64 max-h-64 lg:max-w-32 lg:max-h-48 mt-8" src={src}
             width={200}
             height={200}
             alt={"Опросник: " + title}
              unoptimized />
      </div>
  )
}
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
