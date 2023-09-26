import Link from "next/link"
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Search from './components/Search'
import Slogan from './components/Slogan'

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
          <Search value=""/>
        </div>
      </div>
   </div>
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
