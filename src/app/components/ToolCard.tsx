import Image from "next/image"
import Link from 'next/link'

type Props = {
  name: string,
  screenshotSrc: string,
  pdfLink: string,
  kind: string,
  kindLabel: string,
  survey: any, 
}

export default function ToolCard(props: Props) { 

  return (
    <div className="card lg:card-side h-full bg-neutral text-neutral-content lg:card-side bg-base-100">
      <figure className="lg:w-1/3">
      <Link href={`/${props.kind}/${props.name}`}>
       <Img src={props.screenshotSrc} title={props.survey?.data?.title} /> 
       </Link>
      </figure>
      <div className="card-body lg:w-2/3">
      <Link href={`/${props.kind}/${props.name}`}><h2 className="card-title">{props.survey?.data?.title}</h2></Link>
      <p>{props.kindLabel}</p>
      <div className="card-actions justify-end">
        <a href={props.pdfLink} className="btn btn-primary">Скачать PDF</a>
      </div>
      </div>
    </div>
  );
}

function Img({src, title}: {src: string, title: string}) {
  return (
    <div className="p-4 pt-16 lg:pt-4">
      <Image className="" src={src}
             width={192}
             height={272}
             alt={title}
             placeholder="blur"
             blurDataURL={rgbDataURL(255, 255, 255)}
             />
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
