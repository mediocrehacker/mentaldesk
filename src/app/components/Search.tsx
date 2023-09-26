export default function Search({value}: any) {
  const v = value;

  return (
    <form action="search" method="GET" className="pt-12">
      <div className="form-control w-full max-w-4xl">
      <input type="text" name="q" defaultValue={v} placeholder="Поиск по названию " className="input input-bordered input-primary input-lg w-full max-w-4xl" />
      <label className="label">
      <span className="label-text-alt">рабочие листы, тесты, опросники</span>
      </label>
    </div>
  </form>
  )
}
