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
      <Link href="/profile" className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24" stroke="currentColor">
<path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
      </svg>
    </Link>
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
