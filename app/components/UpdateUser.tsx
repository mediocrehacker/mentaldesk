import { addJob } from "../../lib/actions"

const jobs = ["Психотерапевт", "Психолог", "Психиатр", "Психоаналитик", "Другое"]; 

type Props = {
    email: string;
}

export default function UpdateJob({email} : Props) {
  let radioButtons = jobs.map((x) => <RadioButton labelText={x} key={x}/>);

    
  return (
    <form action={addJob} className="pt-12">
      <h3>Как лучше всего описать вашу роль</h3>
      <div className="md:flex md:gap-8">{radioButtons}</div>
      <h3>Фамилия имя отчество или название психологического центра</h3>
      <input type="text" name="email" defaultValue={email} hidden />
      <div className="form-control w-full">
        <input type="text" name="name" required placeholder="" className="input input-bordered input-md w-full" />
        <label className="label">
          <span className="label-text-alt">Они будут указаны на ваших рабочих листах и опросниках</span>
        </label>
      </div>
      <div className="flex pt-4 w-full flex-row-reverse">
        <button type="submit" className="btn btn-primary">Дальше</button>
      </div>
    </form>
  )
}

type PropsRadio = {
  labelText: string
}

function RadioButton({ labelText}: PropsRadio) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-4">
        <span className="label-text">{labelText}</span>
        <input type="radio" name="job" className="radio checked:bg-blue-500" value={labelText} />
      </label>
    </div>
  )
}
