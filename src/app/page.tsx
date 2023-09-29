import Link from "next/link"
import Search from './components/Search'
import Slogan from './components/Slogan'

export default function Home() {
  return (
    <HeroSearch />
  ) 
}


function HeroSearch() {
  return (
    <div className="hero h-full g-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <Slogan />
          <Search value=""/>
          <Link href="/api/auth/signin" className="btn my-6 btn-primary">Начните использовать бесплатно!</Link>
        </div>
      </div>
   </div>
  )
}
