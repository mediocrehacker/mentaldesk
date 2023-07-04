import Link from 'next/link'
import styles from './page.module.scss'

async function getWorksheets() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/worksheets/records?page1&perPage=30');
  const data = await res.json();
  return data?.items as any[];
}

export default async function WorksheetsPage() {
  const worksheets = await getWorksheets();

  return (
    <div>
      <div className="page-header-wrapper">
        <div className="page-header">
          <h1>Рабочие Листы</h1>
        </div>
      </div>
      <div className="container">
        <div className="worksheets-contnent">
          {worksheets?.map((worksheet) => {
            return <Worksheet key={worksheet.id} worksheet={worksheet} />;
          })}
        </div>
      </div>
    </div>
  )
}

function Worksheet({ worksheet }: any) {
  const { id, title, teaser, created } = worksheet || {}

  return (
    <div>
      <h2>
        <Link href={`/worksheets/${id}`}>
          {title}
        </Link>
      </h2>
      <h5>{teaser}</h5>
      <p>{created}</p>
    </div>
  );
}
