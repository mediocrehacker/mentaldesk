import Link from "next/link"
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"



export default async function Home() {
  const session = await getServerSession(options)

  if (!session?.user) {
    return (<Hero />)
  }

  return (
    <>
      <HeroSearch />
    </>
  ) 
}


function HeroSearch() {
  return (
    <div className="hero h-full g-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <Slogan />
          <Search />
        </div>
      </div>
   </div>
  )
}

function Search() {
  return (
    <form action="search" method="GET" className="pt-12">
      <div className="form-control w-full max-w-4xl">
      <input type="text" name="search" placeholder="Поиск по названию " className="input input-bordered input-primary input-lg w-full max-w-4xl" />
      <label className="label">
      <span className="label-text-alt">рабочие листы, тесты, опросники</span>
      </label>
    </div>
  </form>
  )
}

function Hero() {
  return (
    <div className="hero h-full g-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <Slogan />
          <Link href="/api/auth/signin" className="btn my-6 btn-primary">Начните использовать бесплатно!</Link>
        </div>
      </div>
   </div>
  )
}


function Slogan() {
  return (
    <h1 className="font-title text-center text-[clamp(2rem,6vw,3.2rem)] font-black leading-[1.1] xl:text-left">
      <span className="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">Все необходимые инструменты</span>
      <br />
      <span className="inline-grid">
      <span className="inline-grid"><span className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text opacity-70 blur-3xl [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]" aria-hidden="true">для профессионалов</span> <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">для профессионалов в области</span></span>
      </span>
      <br />
      <span className="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">ментального здоровья</span>
    </h1>
  )
}
