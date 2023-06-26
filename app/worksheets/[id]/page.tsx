
async function getWorksheet(id: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/worksheets/records/${id}`,
    {
      next: { revalidate: 10 },
    }
 );
  const data = await res.json();
  return data;
}


export default async function WorksheetPag({ params }: any) {
  const worksheet = await getWorksheet(params.id);

  return(
    <div>
      <div className="page-header-wrapper">
          <div className="page-header">
            <h1>{ worksheet.title }</h1>
          </div>
      </div>
      <div className="container">
      <div className="worksheets-contnent">
        <p>{ worksheet.description }</p>
      </div>
    </div>
    </div>
  );
}
