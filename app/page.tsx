import FilterBy from './components/FilterBy';
import Search from './components/Search';
import Slogan from './components/Slogan';
import Navbar from './components/Navbar';
import { Footer } from './Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="wrapper">
        <HeroSearch />
      </main>
      <Footer />
    </>
  ) 
}


function HeroSearch() {
  return (
    <>
      <div className="">
        <div className="">
          <Slogan />
          <Search value=""/>
          <FilterBy />
        </div>
      </div>
   </>
  )
}

