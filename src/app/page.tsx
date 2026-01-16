import FilterBy from './components/FilterBy'
import Search from './components/Search'
import Slogan from './components/Slogan'

export default function Home() {
  return (
    <HeroSearch />
  ) 
}


function HeroSearch() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Slogan />
          <Search value=""/>
          <FilterBy />
        </div>
      </div>
   </div>
  )
}
