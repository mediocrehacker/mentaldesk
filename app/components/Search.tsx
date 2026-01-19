export default function Search({ value }: any) {
    const v = value;

    return (
        <form action="search" method="GET" className="pt-12">
          <div className="w-full">
            <fieldset className="fieldset">

                <input type="text" required name="q" defaultValue={v} placeholder="Поиск по названию " className="input input-bordered input-primary input-xl w-full" />
                <label className="label">
                    <span className="label-text-alt">рабочие листы, тесты, опросники</span>
                </label>
            </fieldset>
            <button type="submit" className="btn btn-wide btn-primary btn-lg my-8">Найти</button>
            </div>
        </form>
    )
}

