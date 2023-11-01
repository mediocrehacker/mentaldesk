interface Problem{
  name: string;
  description: string;
}

const problems = [
  {name: "СДВГ",
   description: "СДВГ"},
  {name: "Агрессия",
   description: "Агрессия" },
  {name: "Тревожные растройства",
   description: "Тревожные растройства" },
  {name: "Арт-терапия",
   description: "Арт-терапия" },
  {name: "КПТ",
   description: "Когнитивно-поведенческая психотерапия" },
  {name: "Биполярное расстройство",
   description: "Биполярное расстройство" },
  {name: "ДПТ",
   description: "Диалектическая поведенческая терапия" },
  {name: "Депрессия",
   description: "Депрессия" },
  {name: "Зависимость",
   description: "Зависимость" },
  {name: "Эмоции",
   description: "Эмоции" },
  {name: "Родителям",
   description: "Родителям" },
  {name: "Семейная психотерапия",
   description: "Семейная психотерапия" },
  {name: "Шизофрения",
   description: "Шизофрения" },
  {name: "Растройство личности",
   description: "Растройство личности" },
  {name: "Детская психиатрия",
   description: "Детская психиатрия" },
  {name: "Телемедицина",
   description: "Телемедицина" },
  {name: "ОКР",
   description: "ОКР" },
  {name: "Стресс",
   description: "Стресс" },
]


export default function FilterBy() {
  
  return (
    <div className="flex flex-col gap-4 pt-8">
      <h2 className="text-3xl text-left">Найти инструменты по темам:</h2>
      <p className="text-left">Выберите тему для поиска по проблемам, таким как гнев, травма или депрессия.</p>
      <div className="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 my-10 gap-6">
        {problems?.map((x) => ThemeNoDescription(x))}
      </div>
    </div>
  )
}



const ThemeNoDescription = (problem: Problem) => {
  const src = `/search?q=${problem.description}`
  return(
    <a className="card border-2 border-base-content/5 card-compact transition-all duration-200 hover:shadow hover:-translate-y-1 h-[150px]" href={src}>
      <div className="card-body flex justify-center text-center">
        <span className="sm:text-sm md:text-lg ">{problem.name}</span>
      </div>
    </a>
  )
}


const Theme = (problem: Problem) => {
  return(
      <a className="card border-2 border-base-content/5 card-compact transition-all duration-200 hover:shadow hover:-translate-y-1" href="https://stackblitz.com/edit/daisyui-nextjs/" target="\_blank" rel="noopener, noreferrer">
      <figure className="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end overflow-visible">
      <svg width="50" height="50" className="fill-current" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d={problem.description}></path></svg>
      </figure>
      <div className="card-body text-center"><span className="text-xs">{problem.name}</span>
      </div>
    </a>
  )
}


