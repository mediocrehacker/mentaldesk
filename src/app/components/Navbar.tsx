import Link from "next/link"

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

export default function Navbar() {
  let user = true;
  if (!!user) { 
  return (

    <header className="navbar bg-base-100 h-16">
      <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/about">О Проекте</Link></li>
              <li><Link href="/worksheets">Рабочие листы</Link></li>
              <li><Link href="/oprosniki">Опросники</Link></li>
              <li><Link href="/profile">Профайл</Link></li>
          </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">Mental Desk</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link href="/about">О Проекте</Link></li>
          <li><Link href="/worksheets">Рабочие листы</Link></li>
          <li><Link href="/oprosniki">Опросники</Link></li>
          <li><Link href="/profile">Профайл</Link></li>
          </ul>
      </div>
    <div className="navbar-end">
      <Link className="btn" href="/api/auth/signin">Вход</Link>
    </div>
    </header>
  )
  }


  return (
    <header className="navbar bg-base-100 h-16">
      <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/about">О Проекте</Link></li>
              <li><Link href="/worksheets">Рабочие листы</Link></li>
              <li><Link href="/oprosniki">Опросники</Link></li>
              <li><Link href="/api/auth/signin">Регистрация</Link></li>
          </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">Mental Desk</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link href="/about">О Проекте</Link></li>
          <li><Link href="/worksheets">Рабочие листы</Link></li>
          <li><Link href="/oprosniki">Опросники</Link></li>
          <li><Link href="/api/auth/signin">Регистрация</Link></li>
          </ul>
      </div>

    <div className="navbar-end">
      <Link className="btn" href="/api/auth/signin">Вход</Link>
    </div>
    </header>
  )
  
}
